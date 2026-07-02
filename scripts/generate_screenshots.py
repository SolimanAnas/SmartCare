#!/usr/bin/env python3
"""Regenerate the PWA manifest screenshots with Playwright.

Usage:
    python3 -m http.server 8908   # from the repo root, in another shell
    python3 scripts/generate_screenshots.py [--base http://localhost:8908]

Writes images/screenshots/{phone,tablet}-*.png (palette-quantized PNGs — an
order of magnitude smaller than raw RGB captures) and prints the manifest
"screenshots" entries to paste into manifest.json.

Re-run whenever a captured page's layout changes meaningfully — stale store
screenshots advertise a UI that no longer exists. Only pages that self-host
their fonts are captured (pages on Google Fonts stall in sandboxed
environments and would capture with fallback fonts anyway).
"""
import argparse
import asyncio
import os

from PIL import Image
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "images", "screenshots")
EXECUTABLE = os.environ.get("CHROMIUM_PATH", "/opt/pw-browsers/chromium")

PHONE = {"width": 390, "height": 844, "dpr": 2}     # 780x1688
TABLET = {"width": 1280, "height": 800, "dpr": 1.5}  # 1920x1200

# (filename, form factor, path, label, settle ms)
SHOTS = [
    ("phone-home.png", PHONE, "index.html",
     "Home — chapter library & progress", 2500),
    ("phone-chapter.png", PHONE, "chapters/c1.html?view=summary",
     "Chapter summary study view", 2500),
    ("phone-flashcards.png", PHONE, "chapters/c1.html?view=flashcards",
     "Flashcard practice", 2500),
    ("phone-quiz.png", PHONE, "chapters/c1.html?view=quiz",
     "Quiz setup", 2500),
    ("phone-drugcalc.png", PHONE, "pages/drug-calculator.html",
     "Drug dose calculator", 2500),
    ("phone-ecg.png", PHONE, "pages/ecg.html",
     "ECG rhythm simulator", 3500),
    ("tablet-home.png", TABLET, "index.html",
     "Home on tablet", 2500),
    ("tablet-chapter.png", TABLET, "chapters/c1.html?view=summary",
     "Two-pane study mode on tablet", 2500),
    ("tablet-drugcalc.png", TABLET, "pages/drug-calculator.html",
     "Drug calculator split view", 2500),
]


def compress(path):
    im = Image.open(path).convert("RGB")
    im.quantize(colors=256, method=Image.Quantize.MEDIANCUT).save(path, "PNG", optimize=True)
    return im.size


async def main(base):
    os.makedirs(OUT_DIR, exist_ok=True)
    entries = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=EXECUTABLE)
        for filename, ff, path, label, settle in SHOTS:
            ctx = await browser.new_context(
                viewport={"width": ff["width"], "height": ff["height"]},
                device_scale_factor=ff["dpr"],
                service_workers="block",
            )
            page = await ctx.new_page()
            await page.goto(f"{base}/{path}", wait_until="domcontentloaded")
            await page.wait_for_timeout(settle)
            out = os.path.join(OUT_DIR, filename)
            await page.screenshot(path=out)
            w, h = compress(out)
            kb = os.path.getsize(out) // 1024
            print(f"wrote {filename} ({w}x{h}, {kb} KB)")
            entries.append((filename, w, h, "narrow" if ff is PHONE else "wide", label))
            await ctx.close()
        await browser.close()

    print("\n--- manifest.json entries ---")
    for filename, w, h, form, label in entries:
        print(f'    {{ "src": "images/screenshots/{filename}", "sizes": "{w}x{h}", '
              f'"type": "image/png", "form_factor": "{form}", "label": "{label}" }},')


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default="http://localhost:8908")
    asyncio.run(main(ap.parse_args().base))
