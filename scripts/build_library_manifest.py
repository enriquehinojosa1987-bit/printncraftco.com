#!/usr/bin/env python3
"""Regenerate docs/studio/library/manifest.json from the folder structure.

Drop images into docs/studio/library/backgrounds/<Category>/ or
docs/studio/library/graphics/<Category>/ and run this script (or let the
GitHub Action run it on push). Folder names become category names.
"""
import json, os, sys

ROOT = os.path.join(os.path.dirname(__file__), '..', 'docs', 'studio', 'library')
EXTS = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif')

manifest = {}
for kind in ('backgrounds', 'graphics'):
    manifest[kind] = {}
    base = os.path.join(ROOT, kind)
    if not os.path.isdir(base):
        continue
    for cat in sorted(os.listdir(base)):
        cat_dir = os.path.join(base, cat)
        if not os.path.isdir(cat_dir) or cat.startswith('.'):
            continue
        files = sorted(f for f in os.listdir(cat_dir) if f.lower().endswith(EXTS))
        if files:
            manifest[kind][cat] = files

out = os.path.join(ROOT, 'manifest.json')
with open(out, 'w') as f:
    json.dump(manifest, f, indent=2)
print(f"Wrote {out}: " + ", ".join(f"{k}: {len(v)} categories" for k, v in manifest.items()))
