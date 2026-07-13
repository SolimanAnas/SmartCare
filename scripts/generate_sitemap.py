#!/usr/bin/env python3
"""Generate sitemap.xml from the deployable HTML pages.

Usage: python3 scripts/generate_sitemap.py

Walks the same public tree GitHub Pages serves and lists every indexable
page at its canonical URL. Excluded: pages carrying a noindex meta or with
no standalone value (admin console, auth pages, the resume.html redirect
stub, 404.html, dev tools). Re-run after adding or removing pages.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://solimananas.github.io/SmartCare"
OUT = os.path.join(ROOT, "sitemap.xml")

SCAN_DIRS = [
    "", "pages", "chapters",
    "courses/itls", "courses/bls", "courses/acls", "courses/pals",
    "src/prometric",
]
EXCLUDE = {
    "404.html",           # error page
    "resume.html",        # redirect stub (manifest shortcut target)
    "graphify.html",      # dev tool, deploy-excluded anyway
    "pages/admin.html",   # noindex — hidden console
    "pages/login.html",   # auth flow, no search value
    "pages/signup.html",  # auth flow, no search value
}


def main():
    urls = []
    for d in SCAN_DIRS:
        dirpath = os.path.join(ROOT, d)
        if not os.path.isdir(dirpath):
            continue
        for f in sorted(os.listdir(dirpath)):
            if not f.endswith(".html"):
                continue
            relpath = f"{d}/{f}" if d else f
            if relpath in EXCLUDE:
                continue
            if relpath == "index.html":
                urls.append(f"{BASE}/")
            else:
                urls.append(f"{BASE}/{relpath}")

    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        lines.append(f"  <url><loc>{u}</loc></url>")
    lines.append("</urlset>")
    with open(OUT, "w") as fh:
        fh.write("\n".join(lines) + "\n")
    print(f"wrote sitemap.xml: {len(urls)} URLs")


if __name__ == "__main__":
    main()
