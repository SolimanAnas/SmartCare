#!/usr/bin/env python3
"""Promotional poster (4:5, 2160×2700) built on a genuine Megacode capture frame."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from compose_lib import (RED, REPO, ROOT, WHITE, Bokeh, Capture, draw_tracked, font, gradient_bg, grade, rounded_mask,
                         text_size, vignette)

W, H = 2160, 2700


def main():
    cap = Capture('land')
    # VF just appeared and the learner must decide: the scenario's turning point
    seg = 'vf'
    fr = cap.frame(seg, cap.mark(seg, 'vfDecision') + 24)
    sw, sh = fr.size
    crop = fr.crop((int(0.052 * sw), int(0.075 * sh), int(0.718 * sw), int(0.995 * sh)))

    img = gradient_bg(W, H, 2.0, a1=0.26, a2=0.12)
    img.alpha_composite(Bokeh(W, H, n=34, seed=9).render(1.0, 0.8))
    d = ImageDraw.Draw(img)

    # headline
    kx = 150
    f_k = font('SemiBold', 40, display=False)
    d.rounded_rectangle([kx, 214, kx + 60, 246], 4, fill=RED + (255,))
    draw_tracked(d, (kx + 84, 204), 'SMARTCARE MEGACODE', f_k, WHITE + (235,), tracking=6)
    f_h = font('Bold', 150)
    d.text((kx - 6, 290), 'The rhythm changes.', font=f_h, fill=WHITE + (255,))
    d.text((kx - 6, 460), 'Your decisions matter.', font=f_h, fill=RED + (255,))

    # app screen
    cw = W - 2 * 300
    ch = int(cw * crop.height / crop.width)
    scr = crop.resize((cw, ch), Image.LANCZOS).convert('RGBA')
    x0, y0 = 300, 700
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([x0 + 20, y0 + 60, x0 + cw - 20, y0 + ch + 70], 40, fill=(0, 0, 0, 220))
    img.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(60)))
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).rounded_rectangle([x0 - 8, y0 - 8, x0 + cw + 8, y0 + ch + 8], 48, fill=(230, 37, 76, 70))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(70)))
    m = rounded_mask((cw, ch), (0, 0, cw, ch), 40)
    scr.putalpha(m)
    img.alpha_composite(scr, (x0, y0))
    ImageDraw.Draw(img).rounded_rectangle([x0, y0, x0 + cw - 1, y0 + ch - 1], 40, outline=(255, 255, 255, 50), width=3)

    # footer
    y = y0 + ch + 95
    f_s = font('Medium', 64)
    d = ImageDraw.Draw(img)
    d.text((kx, y), 'Practice.  Decide.  Learn.', font=f_s, fill=(214, 220, 228, 255))
    y += 96
    f_c = font('Bold', 74)
    d.text((kx, y), 'Challenge yourself. Try the Megacode.', font=f_c, fill=WHITE + (255,))
    y += 132
    f_b = font('SemiBold', 42, display=False)
    lab = 'GET IT ON GOOGLE PLAY'
    lw, _ = text_size(lab, f_b, 4)
    bw, bh = lw + 170, 112
    d.rounded_rectangle([kx, y, kx + bw, y + bh], bh // 2, fill=RED + (255,))
    tx, ty = kx + 58, y + bh / 2
    d.polygon([(tx, ty - 22), (tx, ty + 22), (tx + 34, ty)], fill=WHITE + (255,))
    draw_tracked(d, (kx + 118, y + bh / 2 - 27), lab, f_b, WHITE + (255,), tracking=4)
    f_u = font('Regular', 34, display=False)
    d.text((kx, y + bh + 34), 'play.google.com/store/apps/details?id=io.github.solimananas.smartcare', font=f_u, fill=(165, 175, 188, 255))

    # brand mark
    icon = Image.open(REPO / 'icons' / 'icon-512x512.png').convert('RGBA').resize((300, 300), Image.LANCZOS)
    im = rounded_mask((300, 300), (0, 0, 300, 300), 66)
    icon.putalpha(Image.fromarray(np.minimum(np.asarray(icon.getchannel('A')), np.asarray(im))))
    img.alpha_composite(icon, (W - 150 - 300, y - 150))

    f_d = font('Regular', 28, display=False)
    for i, line in enumerate(['Screen: the genuine SmartCare Megacode simulator, Scenario 7 (Crescendo Angina).',
                              'Educational simulation. Does not certify competence or replace accredited ACLS training.']):
        d.text((kx, H - 140 + i * 44), line, font=f_d, fill=(120, 130, 145, 255))

    out = grade(img.convert('RGB'), vignette(W, H, 0.35), 0, grain=2.5)
    p = ROOT / 'output' / 'smartcare-megacode-poster.png'
    p.parent.mkdir(exist_ok=True)
    out.save(p, optimize=True)
    print('poster ->', p)


if __name__ == '__main__':
    main()
