#!/usr/bin/env python3
"""Regenerate docs/studio/library/manifest.json from the folder structure.

Drop images into docs/studio/library/backgrounds/<Category>/ or
docs/studio/library/graphics/<Category>/ and run this script (or let the
GitHub Action run it on push). Folder names become category names.

Product templates live in docs/studio/library/templates/<Name>/ and need
a blueprint.* and a shading.* image each.

Anything whose name starts with "_" is hidden from the studio (the admin
page uses this prefix for its hide/unhide toggle).
"""
import json, os

ROOT = os.path.join(os.path.dirname(__file__), '..', 'docs', 'studio', 'library')
EXTS = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif')

hidden_file = os.path.join(ROOT, 'hidden.json')
try:
    with open(hidden_file) as f:
        HIDDEN = set(json.load(f))
except (FileNotFoundError, ValueError):
    HIDDEN = set()

def visible(name, relpath=None):
    if name.startswith('.') or name.startswith('_'):
        return False
    return relpath is None or relpath not in HIDDEN

manifest = {}
for kind in ('backgrounds', 'graphics'):
    manifest[kind] = {}
    base = os.path.join(ROOT, kind)
    if not os.path.isdir(base):
        continue
    for cat in sorted(os.listdir(base)):
        cat_dir = os.path.join(base, cat)
        if not os.path.isdir(cat_dir) or not visible(cat, f"{kind}/{cat}"):
            continue
        files = sorted(f for f in os.listdir(cat_dir)
                       if f.lower().endswith(EXTS) and visible(f, f"{kind}/{cat}/{f}"))
        if files:
            manifest[kind][cat] = files

manifest['templates'] = {}
tpl_base = os.path.join(ROOT, 'templates')
if os.path.isdir(tpl_base):
    for name in sorted(os.listdir(tpl_base)):
        tpl_dir = os.path.join(tpl_base, name)
        if not os.path.isdir(tpl_dir) or not visible(name, f"templates/{name}"):
            continue
        entry = {}
        for f in sorted(os.listdir(tpl_dir)):
            base_name = os.path.splitext(f)[0].lower()
            if f.lower().endswith(EXTS) and visible(f) and base_name in ('blueprint', 'shading'):
                entry[base_name] = f
        if 'blueprint' in entry and 'shading' in entry:
            manifest['templates'][name] = entry

out = os.path.join(ROOT, 'manifest.json')
with open(out, 'w') as f:
    json.dump(manifest, f, indent=2)
print(f"Wrote {out}: " + ", ".join(f"{k}: {len(v)}" for k, v in manifest.items()))
