#!/usr/bin/env python3
"""Sync the products gallery from gallery-originals/ to the website.

Source of truth: gallery-originals/<folder>/ at the repo root.
Incremental: each original maps to a stable output name (slug + content
hash), so unchanged files are skipped, additions encode only the new
files, and outputs whose original is gone get deleted. A sync commit
therefore contains only what actually changed.

For each category folder, this script:
  - encodes new images to max 1600px JPEG (quality 80)
  - encodes new .mov/.mp4 videos to web H.264 mp4 (max 1280px wide)
  - removes outputs whose original no longer exists
  - regenerates GALLERY_MANIFEST inside docs/products/gallery.js

"drinkware hidden" becomes the password-gated "drinkware2" category: its
manifest is written to docs/products/gallery/drinkware2/m-<hash>.json where
<hash> comes from the password in .gallery-password (gitignored, one line).
The site unlocks it by triple-clicking the Drinkware tab. To change the
password, edit .gallery-password and re-run this script.
Display order = alphabetical original-filename order within each folder.

Usage: python3 scripts/sync-gallery.py
"""
import glob
import hashlib
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "gallery-originals")
DST = os.path.join(ROOT, "docs", "products", "gallery")
GALLERY_JS = os.path.join(ROOT, "docs", "products", "gallery.js")

# originals folder name -> gallery category key
CATS = {"apparel": "apparel", "drinkware": "drinkware", "print": "prints",
        "signs": "signs", "accessories": "accessories"}
# password-gated categories: folder -> key. Their manifest goes to a JSON file
# named after the password hash instead of GALLERY_MANIFEST, so the page never
# references it. Password lives in .gallery-password (gitignored).
HIDDEN = {"drinkware hidden": "drinkware2"}
LABEL = {"apparel": "Apparel", "drinkware": "Drinkware", "prints": "Prints",
         "signs": "Signs", "accessories": "Accessories", "drinkware2": "Drinkware"}
IMG_EXT = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic", ".tif", ".tiff", ".bmp"}
VID_EXT = {".mov", ".mp4", ".m4v"}

manifest = {}
failures = []

def stable_name(path):
    """Slug of the original filename + short content hash — stable across
    runs, changes only if the file's bytes change."""
    base = os.path.splitext(os.path.basename(path))[0]
    slug = re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", base.lower())).strip("-")[:40] or "item"
    h = hashlib.md5()
    with open(path, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return f"{slug}-{h.hexdigest()[:6]}"

for folder, cat in {**CATS, **HIDDEN}.items():
    srcdir = os.path.join(SRC, folder)
    outdir = os.path.join(DST, cat)
    os.makedirs(outdir, exist_ok=True)
    files = sorted(
        (f for f in glob.glob(os.path.join(srcdir, "*")) if os.path.isfile(f)
         and os.path.basename(f) != ".DS_Store"),
        key=lambda f: os.path.basename(f).lower())
    entries = []
    expected = set()
    new = skipped = 0
    thumbdir = os.path.join(outdir, "thumbs")
    os.makedirs(thumbdir, exist_ok=True)
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in VID_EXT:
            stem = stable_name(f)
            fname = stem + ".mp4"
            out = os.path.join(outdir, fname)
            thumb = os.path.join(thumbdir, stem + ".jpg")
            expected.add(fname)
            if not os.path.exists(out):
                r = subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", f,
                    "-vf", "scale='min(1280,iw)':-2", "-c:v", "libx264",
                    "-preset", "medium", "-crf", "26", "-movflags", "+faststart",
                    "-c:a", "aac", "-b:a", "96k", out], capture_output=True, text=True)
                if r.returncode != 0:
                    failures.append((f, r.stderr[:200])); expected.discard(fname); continue
                new += 1
            else:
                skipped += 1
            expected.add("thumbs/" + stem + ".jpg")
            if not os.path.exists(thumb):
                # poster frame from 1s in, thumbnail-sized
                subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", "1",
                    "-i", out, "-frames:v", "1", "-vf", "scale='min(480,iw)':-2",
                    "-q:v", "5", thumb], capture_output=True, text=True)
            entries.append({"type": "video", "src": f"/products/gallery/{cat}/{fname}",
                            "thumb": f"/products/gallery/{cat}/thumbs/{stem}.jpg"})
        elif ext in IMG_EXT:
            stem = stable_name(f)
            fname = stem + ".jpg"
            out = os.path.join(outdir, fname)
            thumb = os.path.join(thumbdir, fname)
            expected.add(fname)
            if not os.path.exists(out):
                r = subprocess.run(["sips", "-Z", "1600", "-s", "format", "jpeg",
                    "-s", "formatOptions", "80", f, "--out", out],
                    capture_output=True, text=True)
                if r.returncode != 0:
                    failures.append((f, r.stderr[:150])); expected.discard(fname); continue
                new += 1
            else:
                skipped += 1
            expected.add("thumbs/" + fname)
            if not os.path.exists(thumb):
                subprocess.run(["sips", "-Z", "480", "-s", "format", "jpeg",
                    "-s", "formatOptions", "70", out, "--out", thumb],
                    capture_output=True, text=True)
            entries.append({"type": "image", "src": f"/products/gallery/{cat}/{fname}",
                            "thumb": f"/products/gallery/{cat}/thumbs/{fname}"})
        else:
            failures.append((f, f"unsupported extension {ext}"))
    # delete outputs (and thumbs) whose original is gone
    removed = 0
    for old in glob.glob(os.path.join(outdir, "*")) + glob.glob(os.path.join(thumbdir, "*")):
        if os.path.isdir(old):
            continue
        rel = os.path.relpath(old, outdir)
        if os.path.basename(old) != ".gitkeep" and rel not in expected:
            os.remove(old); removed += 1
    manifest[cat] = entries
    print(f"{cat}: {len(entries)} items ({new} new, {skipped} unchanged, {removed} removed)")

# hidden categories: manifest goes to a JSON file named by the password hash
pw_file = os.path.join(ROOT, ".gallery-password")
if not os.path.exists(pw_file):
    sys.exit("ERROR: .gallery-password not found (one line, the gallery password)")
pw = open(pw_file).read().strip()
digest = hashlib.sha256(pw.encode()).hexdigest()[:16]
for cat in HIDDEN.values():
    outdir = os.path.join(DST, cat)
    for old in glob.glob(os.path.join(outdir, "m-*.json")):
        os.remove(old)  # drop manifests for old passwords
    entries = [{**e, "alt": f"Custom {LABEL[cat].lower()} by Print & Craft Co."}
               for e in manifest.pop(cat)]
    with open(os.path.join(outdir, f"m-{digest}.json"), "w") as fh:
        json.dump(entries, fh)
    print(f"{cat}: manifest -> {cat}/m-{digest}.json")

# rewrite GALLERY_MANIFEST in gallery.js
lines = ["const GALLERY_MANIFEST = {"]
for cat in ["apparel", "drinkware", "accessories", "signs", "prints"]:
    lines.append(f"    {cat}: [")
    for e in manifest[cat]:
        alt = f"Custom {LABEL[cat].lower()} by Print & Craft Co."
        lines.append(f'        {{ type: "{e["type"]}", src: "{e["src"]}", thumb: "{e["thumb"]}", alt: "{alt}" }},')
    lines.append("    ],")
lines.append("};")
block = "\n".join(lines)

h = open(GALLERY_JS).read()
h2 = re.sub(r"const GALLERY_MANIFEST = \{.*?\n\};", block, h, count=1, flags=re.S)
if h2 == h and block not in h:
    sys.exit("ERROR: could not find GALLERY_MANIFEST block in gallery.js")
open(GALLERY_JS, "w").write(h2)

print(f"\nTotal: {sum(len(v) for v in manifest.values())} items in manifest")
if failures:
    print(f"{len(failures)} FAILURES:")
    for f, err in failures:
        print(" -", os.path.basename(f), "|", err)
