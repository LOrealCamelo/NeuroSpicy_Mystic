#!/usr/bin/env python3
"""Build the NeuroSpicy Mystic SACRED MONEY RITUAL ebook.

Outputs (next to this script):
  ebook.html  - browser preview, embeds live Drive image URLs
  ebook.pdf   - 8.5x11 print/digital-ready, placeholder cards for images
  ebook.epub  - EPUB 3.0 with embedded CSS, TOC from page headers

To bake actual photos into the PDF/EPUB:
  1. Download each Drive file into ebook/images/ named after its slot id
     (cover.jpg, altar_flatlay.jpg, salt_circle.jpg, etc.)
  2. Update images.json so the "local" field for each slot points at
     that filename (e.g. "local": "cover.jpg")
  3. Re-run: python3 ebook/build.py
"""
from __future__ import annotations

import json
import re
from pathlib import Path

from ebooklib import epub
from weasyprint import HTML, CSS

BRAND = {
    "purple": "#6B46C1",
    "gold":   "#D4AF37",
    "black":  "#0F172A",
    "white":  "#F8FAFC",
}

ROOT = Path(__file__).resolve().parent
MANUSCRIPT = (ROOT / "manuscript.md").read_text(encoding="utf-8")
IMAGES = json.loads((ROOT / "images" / "images.json").read_text(encoding="utf-8"))

COPYRIGHT_FOOTER = "© 2026 NeuroSpicy Mystic — All rights reserved."


def slot(name: str) -> dict | None:
    v = IMAGES.get(name)
    return v if isinstance(v, dict) else None


def image_block(slot_id: str, caption: str, prefer_url: bool = False) -> str:
    """Embedded <img> if we have a local file (or if prefer_url for HTML preview),
    otherwise a styled placeholder card with the Drive URL listed."""
    s = slot(slot_id)
    if not s:
        return placeholder(slot_id, caption, None)
    local = s.get("local")
    if local and (ROOT / "images" / local).exists():
        src = f"images/{local}"
    elif prefer_url and s.get("url"):
        src = s["url"]
    else:
        return placeholder(slot_id, caption, s.get("url"))
    return (
        f'<figure class="ebook-img">'
        f'<img src="{src}" alt="{caption}" />'
        f'<figcaption>{caption}</figcaption>'
        f'</figure>'
    )


def placeholder(slot_id: str, caption: str, url: str | None) -> str:
    url_html = f'<div class="img-placeholder-url">{url}</div>' if url else ""
    return (
        f'<div class="img-placeholder" data-slot="{slot_id}">'
        f'<div class="img-placeholder-frame">'
        f'<div class="img-placeholder-label">IMAGE SLOT · {slot_id}</div>'
        f'<div class="img-placeholder-caption">{caption}</div>'
        f'{url_html}'
        f'</div></div>'
    )


def md_to_body(md: str, prefer_url: bool = False) -> str:
    """Markdown → HTML via pandoc, with [INSERT_IMAGE: slot | caption] markers
    expanded to image blocks (real <img> if local file exists, or placeholder
    card with the Drive URL listed).  prefer_url=True is used for the HTML
    browser preview so live Drive URLs are embedded."""
    def img_repl(m):
        body = m.group(1).strip()
        if "|" in body:
            sid, cap = (x.strip() for x in body.split("|", 1))
        else:
            sid, cap = body, body
        return image_block(sid, cap, prefer_url=prefer_url)

    # Use pandoc for the heavy lifting
    import subprocess
    html = subprocess.run(
        ["pandoc",
         "-f", "markdown-tex_math_dollars-tex_math_single_backslash",
         "-t", "html5", "--no-highlight"],
        input=md, capture_output=True, text=True, check=True,
    ).stdout
    html = re.sub(
        r'\[INSERT_IMAGE:\s*([^\]]+)\]',
        lambda m: img_repl(m),
        html,
    )
    # Pandoc wraps page-break markers; we used literal \pagebreak in the md
    html = html.replace("\\pagebreak", '<div class="page-break"></div>')
    return html


def page_css(for_pdf: bool) -> str:
    page_rule = ""
    if for_pdf:
        page_rule = f"""
        @page {{
            size: 8.5in 11in;
            margin: 0.7in 0.65in 0.95in 0.65in;
            background: {BRAND['white']};
            @bottom-center {{
                content: "{COPYRIGHT_FOOTER}";
                font-family: 'Georgia', serif;
                font-size: 9pt;
                color: {BRAND['purple']};
                letter-spacing: 0.05em;
            }}
            @bottom-right {{
                content: counter(page);
                font-family: 'Georgia', serif;
                font-size: 9pt;
                color: {BRAND['gold']};
            }}
        }}
        @page :first {{
            margin: 0;
            background: {BRAND['black']};
            @bottom-center {{ content: none; }}
            @bottom-right  {{ content: none; }}
        }}
        """

    return f"""
    :root {{
        --purple: {BRAND['purple']};
        --gold:   {BRAND['gold']};
        --black:  {BRAND['black']};
        --white:  {BRAND['white']};
    }}
    {page_rule}
    html, body {{
        background: var(--white);
        color: var(--black);
        font-family: 'Georgia', 'Iowan Old Style', 'Palatino', serif;
        font-size: 11.5pt;
        line-height: 1.55;
        margin: 0;
        padding: 0;
    }}
    h1, h2, h3, h4 {{
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        color: var(--purple);
        letter-spacing: 0.01em;
        line-height: 1.2;
    }}
    h1 {{
        font-size: 26pt;
        margin: 0 0 0.4em 0;
        padding-bottom: 0.25em;
        border-bottom: 3px solid var(--gold);
        page-break-after: avoid;
    }}
    h2 {{
        font-size: 17pt;
        margin: 1.2em 0 0.4em 0;
        color: var(--black);
        page-break-after: avoid;
    }}
    h2::before {{
        content: "✦ ";
        color: var(--gold);
    }}
    h3 {{
        font-size: 13pt;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--gold);
        margin: 1em 0 0.35em 0;
        page-break-after: avoid;
    }}
    p {{ margin: 0 0 0.7em 0; }}
    strong {{ color: var(--purple); }}
    em {{ color: var(--black); }}
    blockquote {{
        margin: 1em 0;
        padding: 0.6em 1em;
        border-left: 4px solid var(--gold);
        background: rgba(107, 70, 193, 0.06);
        color: var(--black);
        font-style: italic;
        border-radius: 4px;
    }}
    ul, ol {{ margin: 0.3em 0 0.9em 1.3em; padding: 0; }}
    li {{ margin: 0.15em 0; }}
    hr {{
        border: none;
        border-top: 1px solid var(--gold);
        opacity: 0.6;
        margin: 1.5em 0;
    }}
    table {{
        width: 100%;
        border-collapse: collapse;
        margin: 0.8em 0 1.1em 0;
        font-size: 10.5pt;
    }}
    th, td {{
        text-align: left;
        padding: 0.45em 0.6em;
        border-bottom: 1px solid rgba(107, 70, 193, 0.25);
    }}
    th {{
        background: var(--purple);
        color: var(--white);
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        letter-spacing: 0.05em;
    }}
    tr:nth-child(even) td {{ background: rgba(212, 175, 55, 0.08); }}

    .page-break {{ page-break-before: always; }}
    h1 {{ page-break-before: always; }}
    h1:first-of-type {{ page-break-before: avoid; }}

    figure.ebook-img {{
        margin: 1em auto;
        text-align: center;
        page-break-inside: avoid;
    }}
    figure.ebook-img img {{
        max-width: 100%;
        max-height: 4.5in;
        border: 6px solid var(--gold);
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(15, 23, 42, 0.2);
    }}
    figure.ebook-img figcaption {{
        font-size: 9.5pt;
        color: var(--purple);
        font-style: italic;
        margin-top: 0.4em;
    }}

    .img-placeholder {{
        page-break-inside: avoid;
        margin: 1em 0;
    }}
    .img-placeholder-frame {{
        border: 2px dashed var(--gold);
        background: linear-gradient(135deg,
            rgba(107, 70, 193, 0.05),
            rgba(212, 175, 55, 0.05));
        border-radius: 8px;
        padding: 1.4em 1em;
        text-align: center;
        color: var(--purple);
    }}
    .img-placeholder-label {{
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        font-size: 9pt;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--gold);
        margin-bottom: 0.4em;
    }}
    .img-placeholder-caption {{
        font-size: 11pt;
        font-style: italic;
        color: var(--purple);
    }}
    .img-placeholder-url {{
        margin-top: 0.5em;
        font-family: 'Menlo', 'Consolas', monospace;
        font-size: 7.5pt;
        word-break: break-all;
        color: var(--black);
        opacity: 0.65;
    }}

    /* Cover sheet (page 1, full bleed) */
    .cover {{
        position: relative;
        width: 100%;
        height: 11in;
        background: var(--black);
        color: var(--white);
        padding: 0;
        margin: 0;
        overflow: hidden;
        page-break-after: always;
    }}
    .cover .cover-art {{
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 30% 20%,
            rgba(107, 70, 193, 0.55), transparent 60%),
            radial-gradient(ellipse at 80% 80%,
            rgba(212, 175, 55, 0.35), transparent 55%),
            var(--black);
    }}
    .cover .cover-art img {{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.55;
    }}
    .cover .cover-inner {{
        position: relative;
        z-index: 2;
        padding: 0.5in 0.75in 0.55in 0.75in;
        text-align: center;
    }}
    .cover .eyebrow {{
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        color: var(--gold);
        letter-spacing: 0.28em;
        text-transform: uppercase;
        font-size: 9pt;
        margin-bottom: 0.55em;
    }}
    .cover h1.cover-title {{
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        font-size: 24pt;
        line-height: 1.08;
        color: var(--white);
        border: none;
        margin: 0 0 0.35em 0;
        text-transform: uppercase;
        letter-spacing: 0.015em;
    }}
    .cover .cover-sub {{
        font-family: 'Georgia', serif;
        font-style: italic;
        font-size: 13pt;
        color: var(--gold);
        margin: 0 0 0.55em 0;
    }}
    .cover .cover-block {{
        font-size: 9.5pt;
        line-height: 1.4;
        color: var(--white);
        max-width: 6in;
        margin: 0 auto 0.45em auto;
    }}
    .cover .cover-author {{
        margin-top: 0.55em;
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        color: var(--gold);
        letter-spacing: 0.18em;
        font-size: 9.5pt;
        text-transform: uppercase;
    }}
    .cover .cover-tag {{
        margin-top: 0.2em;
        color: var(--white);
        font-size: 8.5pt;
        opacity: 0.9;
        letter-spacing: 0.04em;
    }}
    .cover .cover-free {{
        margin-top: 0.55em;
        display: inline-block;
        padding: 0.35em 1em;
        border: 2px solid var(--gold);
        border-radius: 40px;
        color: var(--gold);
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
        letter-spacing: 0.22em;
        font-size: 9.5pt;
    }}
    .cover .cover-foot {{
        margin-top: 0.4em;
        color: var(--white);
        font-style: italic;
        font-size: 9pt;
        opacity: 0.9;
    }}
    """


def cover_html() -> str:
    """Hand-built full-bleed cover that preserves page-1 wording exactly."""
    cover_slot = slot("cover")
    art = ""
    if cover_slot and cover_slot.get("local"):
        art = f'<img src="images/{cover_slot["local"]}" alt="cover" />'
    elif cover_slot and cover_slot.get("url"):
        art = f'<img src="{cover_slot["url"]}" alt="cover" />'
    return f"""
    <section class="cover">
      <div class="cover-art">{art}</div>
      <div class="cover-inner">
        <div class="eyebrow">My Personal Sacred Money Ritual is now yours!</div>
        <h1 class="cover-title">DESTROY THE<br/>ANCESTRIAL MONEY BLOCKAGE<br/>THAT YOU WERE NEVER MEANT TO CARRY!</h1>
        <div class="cover-sub">The Cheat Code to Abundance in 2027</div>
        <div class="cover-block"><strong>NOW Available for download!</strong></div>
        <div class="cover-block"><em>Manifesting our Divine Financial Blessing<br/>One Spell at a Time ~ From Altar to Empire</em></div>
        <div class="cover-block">A NeuroSpicy Money Ritual for Divinely Distracted Goddesses &amp; StarSeeds</div>
        <div class="cover-author">By L'Oreal Venturini Camelo<br/>AKA NeuroSpicy Mystic</div>
        <div class="cover-tag">Tarot Reader · Intuitive · AuDHD Priestess</div>
        <div class="cover-block" style="margin-top:0.6em;">This Ritual is the EXACT same Money Spell on performed LIVE on TikTok for 1 hour 34 minutes. 32K watched an Ancestral Money Blockage turn into Divine Financial Righteousness.</div>
        <div class="cover-block">This is the Ritual I performed when I left the 9-5 rat race due to extreme burnout as a Corperate Accountant, Computer Programmer, Mother of 4, &amp; Neurodivergent being of light.</div>
        <div class="cover-block">With an eviction notice posted on my door after 8 years in the same apartment, car about to get repossessed, and no one to turn to, I knew I had to go back to my roots, a natural born Intuitive, Spiritual Healer, and a generational Priestess, and envoke the divine magic that I was born with. If you've ever been in that position, close to, or even worse....it's your turn, to remove you're Ancestrial Money Block using the same spell I created for myself &amp; the collective, NOW!!</div>
        <div class="cover-free">FREE DOWNLOAD</div>
        <div class="cover-foot">No gatekeeping. Just priestess energy.</div>
      </div>
    </section>
    """


def body_after_cover(md: str) -> str:
    """Strip the page-1 markdown (everything before the first \\pagebreak)
    because the cover sheet renders page-1 in full-bleed form instead."""
    parts = md.split("\\pagebreak", 1)
    return parts[1] if len(parts) == 2 else md


def build_html(for_pdf: bool) -> str:
    body_md = body_after_cover(MANUSCRIPT)
    body = md_to_body(body_md, prefer_url=not for_pdf)
    css = page_css(for_pdf=for_pdf)
    cover = cover_html()
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Sacred Money Ritual — NeuroSpicy Mystic</title>
  <meta name="author" content="L'Oreal Venturini Camelo" />
  <style>{css}</style>
</head>
<body>
{cover}
<main>{body}</main>
</body>
</html>
"""


def write_html() -> Path:
    out = ROOT / "ebook.html"
    out.write_text(build_html(for_pdf=False), encoding="utf-8")
    return out


def write_pdf() -> Path:
    out = ROOT / "ebook.pdf"
    HTML(string=build_html(for_pdf=True), base_url=str(ROOT)).write_pdf(str(out))
    return out


def write_epub() -> Path:
    book = epub.EpubBook()
    book.set_identifier("neurospicy-mystic-sacred-money-ritual-2027")
    book.set_title("Sacred Money Ritual — The Cheat Code to Abundance in 2027")
    book.set_language("en")
    book.add_author("L'Oreal Venturini Camelo (NeuroSpicy Mystic)")

    css = page_css(for_pdf=False) + """
        body { padding: 1em; }
        .cover { min-height: auto; padding: 1.5em 1em; }
        .cover .cover-inner { padding: 1.5em 0.5em; }
        .cover h1.cover-title { font-size: 22pt; }
        h1 { page-break-before: auto; }
    """
    style = epub.EpubItem(
        uid="brand_css", file_name="style/brand.css",
        media_type="text/css", content=css,
    )
    book.add_item(style)

    cover_chap = epub.EpubHtml(
        title="Cover", file_name="cover.xhtml", lang="en",
    )
    cover_chap.content = f"<html><head><link rel='stylesheet' href='style/brand.css'/></head><body>{cover_html()}<p style='text-align:center;color:#6B46C1;margin-top:2em;'><small>{COPYRIGHT_FOOTER}</small></p></body></html>"
    cover_chap.add_item(style)
    book.add_item(cover_chap)

    body_md = body_after_cover(MANUSCRIPT)
    chapters_md = re.split(r"\\pagebreak", body_md)
    spine = ["nav", cover_chap]
    toc = [epub.Link("cover.xhtml", "Cover", "cover")]

    for i, chunk in enumerate(chapters_md, start=1):
        chunk = chunk.strip()
        if not chunk:
            continue
        title_m = re.search(r"^#\s+(.+)$", chunk, re.M)
        title = title_m.group(1).strip() if title_m else f"Chapter {i}"
        html_body = md_to_body(chunk)
        chap = epub.EpubHtml(
            title=title, file_name=f"chap_{i:02d}.xhtml", lang="en",
        )
        chap.content = (
            "<html><head>"
            "<link rel='stylesheet' href='style/brand.css'/>"
            "</head><body>"
            f"{html_body}"
            f"<p style='text-align:center;color:#6B46C1;margin-top:2em;'>"
            f"<small>{COPYRIGHT_FOOTER}</small></p>"
            "</body></html>"
        )
        chap.add_item(style)
        book.add_item(chap)
        spine.append(chap)
        toc.append(epub.Link(chap.file_name, title, f"c{i}"))

    book.toc = tuple(toc)
    book.add_item(epub.EpubNcx())
    book.add_item(epub.EpubNav())
    book.spine = spine

    out = ROOT / "ebook.epub"
    epub.write_epub(str(out), book)
    return out


def main():
    html = write_html()
    pdf = write_pdf()
    book = write_epub()
    print(f"wrote {html.relative_to(ROOT.parent)}  ({html.stat().st_size} b)")
    print(f"wrote {pdf.relative_to(ROOT.parent)}  ({pdf.stat().st_size} b)")
    print(f"wrote {book.relative_to(ROOT.parent)} ({book.stat().st_size} b)")


if __name__ == "__main__":
    main()
