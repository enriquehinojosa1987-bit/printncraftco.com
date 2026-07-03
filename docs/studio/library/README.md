# PrintNCraft Studio Library

Everything the Creator Studio offers users lives here.

- `backgrounds/<Collection>/` — full-wrap backgrounds
- `graphics/<Collection>/` — individual graphics users place on top
- `templates/<Name>/` — product templates (needs `blueprint.png` + `shading.png`)
- `hidden.json` — paths hidden from the studio (managed by the admin page)

## Easiest way to manage: the admin page

Open **/studio/admin/** on the live site, unlock with a GitHub access token
(fine-grained, this repo only, Contents read/write), and you can upload,
delete, hide/show collections, images, and templates without touching code.

## Manual way

Drop images into the folders above (folder name = collection name) and the
GitHub Action rebuilds `manifest.json` on push. Locally, run
`python3 scripts/build_library_manifest.py` before committing.

Supported formats: png, jpg, webp, svg, gif. PNG with transparency is best
for graphics. Names starting with `_` are hidden.
