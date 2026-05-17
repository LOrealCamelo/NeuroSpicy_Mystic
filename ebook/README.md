# Sacred Money Ritual — Ebook Build

NeuroSpicy Mystic's *Sacred Money Ritual* free ebook, rebuilt from
`SACRED_MONEY_RITUAL_ebook.pdf`. The original draft had typos, duplicate
sections (the wax-reading bonus appeared 3 times in 3 different forms,
Step 7 appeared twice, the circle page appeared twice), and was not
brand-styled. This directory holds the clean source-of-truth.

## What's in here

| File | What it is |
|---|---|
| `manuscript.md` | The single source of truth. Page-1 wording is verbatim from the original (typos preserved per author request). Everything else is rewritten for clarity, with `witch` → `Goddess` everywhere except page 1. Image slots are marked `[INSERT_IMAGE: slot_id \| caption]`. |
| `images/images.json` | Maps each image slot to a Google Drive URL. Set the `local` field to a filename in `images/` to bake the real photo into the PDF + EPUB. |
| `build.py` | Renders `manuscript.md` + `images.json` → `ebook.html`, `ebook.pdf`, `ebook.epub`. |
| `ebook.html` | Browser preview. Live Drive image URLs are embedded — open in any browser to see images inline. |
| `ebook.pdf` | 8.5×11 print/digital-ready. Full-bleed cover (page 1). Per-page copyright footer + page number on every page after the cover. Image slots render as styled gold-dashed placeholder cards with the slot id + Drive URL listed inside. |
| `ebook.epub` | EPUB 3.0. Brand CSS embedded. TOC built from `<h1>` page headers. |
| `carousel/page-NN.png` | 150 dpi PNG of each PDF page, ready for social-carousel posts. |

## Brand palette (locked)

- **Deep Purple** `#6B46C1` — headings, table headers, body emphasis
- **Ritual Gold** `#D4AF37` — dividers, section markers (`✦`), section labels
- **Void Black** `#0F172A` — cover background, body text
- **Moon White** `#F8FAFC` — body background, cover text

## To bake real images into the PDF & EPUB

This build runs inside a sandbox that blocks `drive.google.com`, so the
PDF and EPUB show labeled placeholder cards for each image slot. To
replace them with the real photos:

1. Download each Drive file into `ebook/images/` named after its slot id,
   e.g. `cover.jpg`, `altar_flatlay.jpg`, `salt_circle.jpg`,
   `burning_paper.jpg`, `tiktok_live_burn.jpg`, `wax_top.jpg`,
   `wax_side.jpg`, `wax_closeup.jpg`, `wax_roses.jpg`, `qr_playlist.png`.
2. In `images/images.json`, set each slot's `"local"` field to the
   filename, e.g. `"local": "altar_flatlay.jpg"`.
3. `python3 ebook/build.py`

The HTML preview already shows live Drive images — just open
`ebook.html` in a browser.

## Rebuild

```sh
python3 ebook/build.py
pdftoppm -r 150 -png ebook/ebook.pdf ebook/carousel/page    # carousel
```
