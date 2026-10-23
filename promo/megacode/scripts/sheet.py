# QA helper: tile build/stills_<layout> into contact sheets
import sys, glob
from PIL import Image, ImageDraw
L = sys.argv[1]; cols = int(sys.argv[2]) if len(sys.argv) > 2 else 3; tw = int(sys.argv[3]) if len(sys.argv) > 3 else 640
fs = sorted(glob.glob(f'build/stills_{L}/*.jpg'))
per = cols * (4 if L == 'land' else 2)
for k in range(0, len(fs), per):
    ims = [Image.open(f) for f in fs[k:k + per]]
    th = int(tw * ims[0].height / ims[0].width)
    rows = (len(ims) + cols - 1) // cols
    c = Image.new('RGB', (cols * tw, rows * th), (40, 40, 40)); d = ImageDraw.Draw(c)
    for i, (f, im) in enumerate(zip(fs[k:k + per], ims)):
        c.paste(im.resize((tw, th)), ((i % cols) * tw, (i // cols) * th)); d.text(((i % cols) * tw + 6, (i // cols) * th + 4), f.split('/')[-1], fill=(255, 255, 0))
    c.save(f'/tmp/claude-0/sheet_{L}_{k // per}.jpg', quality=85)
print('ok')
