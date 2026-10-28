#!/usr/bin/env python3
"""Contact sheet of a captured scene: python3 scripts/sheet.py <scene> [n] → build/sheet_<scene>.jpg"""
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
name, n = sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 8
fs = sorted((ROOT / 'capture' / name).glob('f*.jpg'))
pick = [fs[round(i * (len(fs) - 1) / (n - 1))] for i in range(n)]
w = 260
ims = [Image.open(p).convert('RGB') for p in pick]
h = round(ims[0].height * w / ims[0].width)
cols = min(n, 6)
rows = (n + cols - 1) // cols
sheet = Image.new('RGB', (cols * (w + 6), rows * (h + 6)), (40, 40, 40))
for i, im in enumerate(ims):
    sheet.paste(im.resize((w, h)), ((i % cols) * (w + 6), (i // cols) * (h + 6)))
(ROOT / 'build').mkdir(exist_ok=True)
sheet.save(ROOT / 'build' / f'sheet_{name}.jpg', quality=85)
print(ROOT / 'build' / f'sheet_{name}.jpg', len(fs), 'frames')
