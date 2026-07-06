#!/usr/bin/env python3
"""Generate iOS PWA splash screens (apple-touch-startup-image) from the app icon.

Usage: python3 scripts/generate_splash.py

Regenerate this whenever icons/icon.png or manifest.json's
background_color changes. Each entry below is (css_width, css_height, dpr)
matching Apple's documented device-pixel-ratio + orientation breakpoints for
the devices SmartCare's manifest already targets; pixel dimensions and the
media query are both derived from those three numbers.
"""
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICON_PATH = os.path.join(ROOT, "icons", "icon.png")
OUT_DIR = os.path.join(ROOT, "splash")
BACKGROUND = (15, 32, 39)  # #0f2027 — manifest.json background_color

# (css_width, css_height, device-pixel-ratio)
DEVICES = [
    (320, 568, 2),
    (375, 667, 2),
    (414, 896, 2),
    (375, 812, 3),
    (390, 844, 3),
    (393, 852, 3),
    (414, 736, 3),
    (414, 896, 3),
    (428, 926, 3),
    (430, 932, 3),
    (768, 1024, 2),
    (810, 1080, 2),
    (834, 1112, 2),
    (834, 1194, 2),
    (1024, 1366, 2),
]


def device_entry(css_w, css_h, dpr):
    w, h = css_w * dpr, css_h * dpr
    filename = f"splash-{w}x{h}.png"
    media = (
        f"(device-width: {css_w}px) and (device-height: {css_h}px) "
        f"and (-webkit-device-pixel-ratio: {dpr})"
    )
    return filename, w, h, media


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    icon = Image.open(ICON_PATH).convert("RGBA")
    entries = [device_entry(*d) for d in DEVICES]

    for filename, w, h, _media in entries:
        canvas = Image.new("RGBA", (w, h), BACKGROUND + (255,))
        icon_size = int(min(w, h) * 0.32)
        resized = icon.resize((icon_size, icon_size), Image.LANCZOS)
        x = (w - icon_size) // 2
        y = (h - icon_size) // 2
        canvas.alpha_composite(resized, (x, y))
        canvas.convert("RGB").save(os.path.join(OUT_DIR, filename), "PNG", optimize=True)
        print(f"wrote {filename} ({w}x{h})")

    # Emit the <link> tags for index.html's <head>
    print("\n--- <link> tags ---")
    for filename, _w, _h, media in entries:
        print(f'<link rel="apple-touch-startup-image" media="{media}" href="splash/{filename}">')


if __name__ == "__main__":
    main()
