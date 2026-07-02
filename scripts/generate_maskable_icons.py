#!/usr/bin/env python3
"""Generate maskable variants of the app icon (icons/icon-{size}-maskable.png).

Usage: python3 scripts/generate_maskable_icons.py

The existing icons/icon-{size}x{size}.png files are full-bleed (content fills
~90% of the canvas) and stay as the "any" purpose icons — fine for browser
tabs and app drawers that render icons as-is. Maskable icons are different:
Android (and other platforms) crop them to arbitrary shapes (circle, squircle,
rounded square...), so anything outside a centered "safe zone" — a circle at
80% of the icon's diameter — can get clipped. A full-bleed icon declared
maskable gets its edges cut off. This script crops each source icon to its
actual (non-transparent) content, shrinks it to fit safely inside that zone,
and pastes it centered on a solid background (manifest.json's
background_color, since maskable icons can't rely on transparency — most
platforms render transparent regions as black or white unpredictably).
"""
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS_DIR = os.path.join(ROOT, "icons")
BACKGROUND = (15, 32, 39)  # #0f2027 — manifest.json background_color
SIZES = [72, 96, 128, 144, 152, 192, 384, 512]
SAFE_ZONE_FRACTION = 0.55  # content width/height as a fraction of canvas size


def main():
    for size in SIZES:
        src_path = os.path.join(ICONS_DIR, f"icon-{size}x{size}.png")
        out_path = os.path.join(ICONS_DIR, f"icon-{size}x{size}-maskable.png")

        icon = Image.open(src_path).convert("RGBA")
        bbox = icon.getbbox()
        content = icon.crop(bbox) if bbox else icon

        target = int(size * SAFE_ZONE_FRACTION)
        content.thumbnail((target, target), Image.LANCZOS)

        canvas = Image.new("RGBA", (size, size), BACKGROUND + (255,))
        x = (size - content.width) // 2
        y = (size - content.height) // 2
        canvas.alpha_composite(content, (x, y))
        canvas.convert("RGB").save(out_path, "PNG", optimize=True)
        print(f"wrote icons/icon-{size}x{size}-maskable.png")


if __name__ == "__main__":
    main()
