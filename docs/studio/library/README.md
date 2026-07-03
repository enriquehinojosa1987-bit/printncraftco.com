# PrintNCraft Studio Library

Drop images here to make them available inside the Creator Studio.

- `backgrounds/<Category>/` — full-wrap backgrounds (fill the whole canvas)
- `graphics/<Category>/` — individual graphics/elements users place on top

The **folder name is the category name** users see in the studio dropdown.
Supported formats: png, jpg, webp, svg, gif. PNG with transparency is best for graphics.

After adding files on GitHub.com, the manifest rebuilds automatically (GitHub Action).
Locally, run `python3 scripts/build_library_manifest.py` before committing.
