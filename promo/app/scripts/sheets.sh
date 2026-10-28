#!/usr/bin/env bash
# Stacked contact sheets for several scenes: scripts/sheets.sh out.jpg scene1 scene2 …
cd "$(dirname "$0")/.."
out=$1; shift
for s in "$@"; do python3 scripts/sheet.py "$s" 6 >/dev/null; done
python3 - "$out" "$@" <<'PY'
import sys
from PIL import Image
ims = [Image.open(f'build/sheet_{s}.jpg') for s in sys.argv[2:]]
o = Image.new('RGB', (max(i.width for i in ims), sum(i.height for i in ims)))
y = 0
for i in ims:
    o.paste(i, (0, y)); y += i.height
o.save(sys.argv[1], quality=85)
PY
