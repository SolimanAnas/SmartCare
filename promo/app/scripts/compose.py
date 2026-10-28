#!/usr/bin/env python3
"""Edit + render of the SmartCare app promo, 30 fps: vertical 1080×1920 (Reels / Shorts / TikTok)
or, with --land, horizontal 1920×1080 (YouTube, Facebook feed, presentations).

Every phone screen is a genuine capture of the running app (capture/<segment>/f*.jpg, made by
scripts/record.js). This script only lays those frames out in a phone frame, adds the headline,
the burned-in captions (social video autoplays muted), tap rings and transitions, and writes:
  build/video[_land].mp4   silent picture
  build/timeline.json      scene/VO/tap timings for scripts/audio.py (identical for both layouts)

Usage: python3 scripts/compose.py [--land]            # full render
       python3 scripts/compose.py [--land] --stills 3 20.5   # PNG stills → build/stills[_land]/
"""
import json
import math
import subprocess
import sys
import wave
from functools import lru_cache
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
REPO = ROOT.parent.parent
CAP = ROOT / 'capture'
BUILD = ROOT / 'build'
FPS = 30
LAND = '--land' in sys.argv
TAG = '_land' if LAND else ''
W, H = (1920, 1080) if LAND else (1080, 1920)

NAVY = (9, 14, 28)
WHITE = (244, 247, 252)
MUTED = (176, 188, 208)
ACCENT = {
    'home': (88, 160, 255), 'courses': (168, 120, 255), 'study': (64, 196, 255), 'search': (88, 160, 255),
    'mega': (255, 72, 104), 'ecg': (64, 220, 130), 'resp': (56, 200, 230), 'exam': (120, 132, 255),
    'planner': (88, 160, 255), 'tools': (255, 150, 64), 'drug': (90, 150, 255), 'aha': (255, 84, 96),
    'themes': (255, 196, 72), 'end': (88, 160, 255),
}

# Phone layout: 412×800 CSS-px captures. Vertical: centred under the headline, 600 px wide.
# Horizontal: on the right, 880 px tall, with the headline and caption in a column on the left.
if LAND:
    SCR_H = 880
    SCR_W = round(SCR_H * 412 / 800)
    BEZEL = 18
    PH_W, PH_H = SCR_W + 2 * BEZEL, SCR_H + 2 * BEZEL
    PH_X = 1350 - PH_W // 2
    PH_Y = (H - PH_H) // 2
    TEXT_X, TEXT_W = 150, 800   # left column
else:
    SCR_W = 600
    SCR_H = round(SCR_W * 800 / 412)
    BEZEL = 20
    PH_W, PH_H = SCR_W + 2 * BEZEL, SCR_H + 2 * BEZEL
    PH_X = (W - PH_W) // 2
    PH_Y = 540
SCR_X, SCR_Y = PH_X + BEZEL, PH_Y + BEZEL
K = SCR_W / 600  # scale for radii and tap rings

PAD = 0.7         # scene length = narration + PAD
VO_IN = 0.25      # narration starts this long after the cut
XF = 8            # crossfade frames between segments / scenes
END_LEN = 4.8

FONT_DIR = Path('/usr/share/fonts/opentype/inter')


@lru_cache(None)
def font(weight='Bold', size=40, display=True):
    return ImageFont.truetype(str(FONT_DIR / f"Inter{'Display' if display else ''}-{weight}.otf"), size)


def ease(p):
    p = min(1.0, max(0.0, p))
    return 4 * p ** 3 if p < .5 else 1 - (-2 * p + 2) ** 3 / 2


def ease_out(p):
    p = min(1.0, max(0.0, p))
    return 1 - (1 - p) ** 3


def wav_len(p):
    w = wave.open(str(p))
    return w.getnframes() / w.getframerate()


# ───────────────────────── static layers ─────────────────────────
def background():
    y = np.linspace(0, 1, H)[:, None]
    x = np.linspace(0, 1, W)[None, :]
    top, bot = np.array([12, 20, 40]), np.array([6, 9, 20])
    img = top[None, None] * (1 - y[..., None]) + bot[None, None] * y[..., None]
    img = np.broadcast_to(img, (H, W, 3)).copy()

    def glow(cx, cy, r, col, a):
        d = np.sqrt(((x - cx) * W) ** 2 + ((y - cy) * H) ** 2) / r
        return np.exp(-d ** 2)[..., None] * np.array(col)[None, None] * a
    img += glow(0.15, 0.30, 700, (40, 90, 220), 0.55)
    img += glow(0.90, 0.75, 650, (200, 40, 90), 0.30)
    img += glow(0.50, 1.05, 800, (20, 140, 170), 0.35)
    # faint grid
    g = ((np.arange(W) % 60 == 0)[None, :] | (np.arange(H) % 60 == 0)[:, None]).astype(float)
    img += g[..., None] * 5
    return Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))


def phone_layers():
    """Shadow + bezel (RGBA, full frame) and the screen's rounded mask."""
    sh = Image.new('L', (W, H), 0)
    ImageDraw.Draw(sh).rounded_rectangle((PH_X + 10, PH_Y + 40, PH_X + PH_W - 10, PH_Y + PH_H + 30), int(80 * K), fill=200)
    sh = sh.filter(ImageFilter.GaussianBlur(40))
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    shadow.putalpha(sh)
    bez = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(bez)
    d.rounded_rectangle((PH_X - 3, PH_Y - 3, PH_X + PH_W + 3, PH_Y + PH_H + 3), int(76 * K), fill=(70, 82, 104))
    d.rounded_rectangle((PH_X, PH_Y, PH_X + PH_W, PH_Y + PH_H), int(74 * K), fill=(10, 12, 16))
    mask = Image.new('L', (SCR_W, SCR_H), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, SCR_W - 1, SCR_H - 1), int(56 * K), fill=255)
    return shadow, bez, mask


def text_w(txt, f):
    return f.getbbox(txt)[2] - f.getbbox(txt)[0]


def wrap(txt, f, maxw):
    lines, cur = [], ''
    for w in txt.split():
        t = (cur + ' ' + w).strip()
        if text_w(t, f) > maxw and cur:
            lines.append(cur)
            cur = w
        else:
            cur = t
    return lines + [cur]


def headline_layer(sc):
    """Kicker pill + two-line title, as one RGBA layer (y 0…400). Centred (vertical) or left-aligned (horizontal)."""
    acc = ACCENT[sc['id']]
    L = Image.new('RGBA', (W, 400), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    fk = font('SemiBold', 26, False)
    k = sc['kicker']
    tw = sum(text_w(c, fk) + 3 for c in k)
    x0 = TEXT_X if LAND else (W - tw - 54) // 2
    d.rounded_rectangle((x0, 100, x0 + tw + 54, 146), 23, fill=acc + (40,), outline=acc + (150,), width=2)
    d.ellipse((x0 + 18, 117, x0 + 30, 129), fill=acc + (255,))
    x = x0 + 40
    for c in k:
        d.text((x, 108), c, font=fk, fill=WHITE + (255,))
        x += text_w(c, fk) + 3
    ft = font('Bold', 88 if LAND else 84)
    for i, line in enumerate(sc['title']):
        col = WHITE if i == 0 else tuple(min(255, int(c * 1.0 + 30)) for c in acc)
        x = TEXT_X - 4 if LAND else (W - text_w(line, ft)) // 2
        d.text((x, 168 + i * 100), line, font=ft, fill=col + (255,))
    return L


def caption_layer(txt):
    if LAND:
        f = font('Medium', 36, False)
        lines = wrap(txt, f, TEXT_W)
        assert len(lines) <= 4, txt
        L = Image.new('RGBA', (W, 200), (0, 0, 0, 0))
        d = ImageDraw.Draw(L)
        for i, line in enumerate(lines):
            d.text((TEXT_X, i * 48), line, font=f, fill=MUTED + (255,))
        return L
    f = font('Medium', 32, False)
    lines = wrap(txt, f, 940)
    assert len(lines) <= 3, txt
    L = Image.new('RGBA', (W, 130), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    y0 = (3 - len(lines)) * 20
    for i, line in enumerate(lines):
        d.text(((W - text_w(line, f)) // 2, y0 + i * 42), line, font=f, fill=MUTED + (255,))
    return L


def end_layer():
    # y positions of: icon, wordmark, tagline, chip rows, store button, links, disclaimer
    if LAND:
        Y = dict(icon=70, isz=230, word=320, tag=460, chips=545, crow=70, btn=700, links=850, disc=960)
        chips = [['14 courses', '12 megacodes', '68 ECG rhythms', '2,749 exam questions', 'EMS tools', 'Works offline']]
    else:
        Y = dict(icon=440, isz=300, word=790, tag=945, chips=1050, crow=76, btn=1260, links=1430, disc=1560)
        chips = [['14 courses', '12 megacodes', '68 ECG rhythms'], ['2,749 exam questions', 'EMS tools', 'Works offline']]
    L = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(L)
    isz = Y['isz']
    icon = Image.open(REPO / 'icons' / 'icon-512x512.png').convert('RGBA').resize((isz, isz), Image.LANCZOS)
    m = Image.new('L', (isz, isz), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, isz - 1, isz - 1), int(isz * 0.23), fill=255)
    icon.putalpha(Image.fromarray(np.minimum(np.array(icon.getchannel('A')), np.array(m))))
    gl = Image.new('L', (W, H), 0)
    cy = Y['icon'] + isz // 2
    ImageDraw.Draw(gl).ellipse((W // 2 - 260, cy - 260, W // 2 + 260, cy + 260), fill=140)
    gl = gl.filter(ImageFilter.GaussianBlur(90))
    glow = Image.new('RGBA', (W, H), (60, 130, 255, 0))
    glow.putalpha(gl)
    L = Image.alpha_composite(L, glow)
    L.alpha_composite(icon, ((W - isz) // 2, Y['icon']))
    d = ImageDraw.Draw(L)
    ft = font('Bold', 120)
    d.text(((W - text_w('SmartCare', ft)) // 2, Y['word']), 'SmartCare', font=ft, fill=WHITE)
    fs = font('Medium', 40, False)
    s = 'Clinical learning for EMS & Nursing'
    d.text(((W - text_w(s, fs)) // 2, Y['tag']), s, font=fs, fill=MUTED)
    fc = font('SemiBold', 30, False)
    for r, row in enumerate(chips):
        ws = [text_w(c, fc) + 48 for c in row]
        x = (W - sum(ws) - 16 * (len(row) - 1)) // 2
        y = Y['chips'] + r * Y['crow']
        for c, w in zip(row, ws):
            d.rounded_rectangle((x, y, x + w, y + 58), 29, fill=(255, 255, 255, 18), outline=(255, 255, 255, 60), width=2)
            d.text((x + 24, y + 12), c, font=fc, fill=WHITE)
            x += w + 16
    # store call-to-action (plain pill: Google's official badge is trademarked artwork, not redrawn here)
    bw, bh, by = 620, 128, Y['btn']
    bx = (W - bw) // 2
    d.rounded_rectangle((bx, by, bx + bw, by + bh), 28, fill=(255, 255, 255), outline=None)
    f1, f2 = font('SemiBold', 26, False), font('Bold', 52)
    d.text((bx + (bw - text_w('GET IT ON', f1)) // 2, by + 16), 'GET IT ON', font=f1, fill=(20, 24, 32))
    d.text((bx + (bw - text_w('Google Play', f2)) // 2, by + 50), 'Google Play', font=f2, fill=(20, 24, 32))
    fu = font('Medium', 30, False)
    for i, s in enumerate(['Search “SmartCare” on Google Play', 'Web: solimananas.github.io/SmartCare']):
        d.text(((W - text_w(s, fu)) // 2, Y['links'] + i * 46), s, font=fu, fill=MUTED)
    fd = font('Regular', 24, False)
    s = 'Study aid for education and revision. Not for direct patient care.'
    d.text(((W - text_w(s, fd)) // 2, Y['disc']), s, font=fd, fill=(130, 140, 160))
    return L


# ───────────────────────── edit ─────────────────────────
def load_seg(name):
    meta = json.loads((CAP / name / 'seg.json').read_text())
    return meta


def build_timeline():
    script = json.loads((ROOT / 'scripts' / 'script.json').read_text())
    t = 0.0
    scenes = []
    for sc in script:
        vo = wav_len(ROOT / 'audio' / 'vo' / f"{sc['id']}.wav")
        dur = END_LEN if sc['id'] == 'end' else max(3.0, vo + PAD)
        segs = [load_seg(s) for s in sc['segs']]
        nat = sum(s['frames'] for s in segs)
        F = round(dur * FPS)
        plan = []  # (segment, start frame in scene, length in scene, source frame map)
        if segs:
            speed = max(1.0, min(1.8, nat / F))
            alloc = [round(F * s['frames'] / nat) for s in segs]
            alloc[-1] = F - sum(alloc[:-1])
            f0 = 0
            for s, a in zip(segs, alloc):
                n = s['frames']
                used = min(n, round(a * speed))  # source frames we can show at this speed
                sp = used / a if used >= a else 1.0
                lead = max(0, a - used) * 0.25 if sp == 1.0 else 0
                src = [min(n - 1, max(0, int((i - lead) * sp))) for i in range(a)]
                # keep the end of the segment (its result) if it had to be trimmed
                if n > round(a * speed):
                    off = n - round(a * speed)
                    src = [min(n - 1, x + off) for x in src]
                plan.append({'seg': s['name'], 'start': f0, 'len': a, 'src': src, 'clicks': s['clicks']})
                f0 += a
        scenes.append({**sc, 't0': t, 'dur': F / FPS, 'frames': F, 'vo_start': t + (0.4 if sc['id'] == 'end' else VO_IN), 'vo_len': vo, 'plan': plan})
        t += F / FPS
    return scenes, t


@lru_cache(maxsize=16)
def shot(seg, i):
    im = Image.open(CAP / seg / f'f{i:05d}.jpg').convert('RGB')
    return im.resize((SCR_W, SCR_H), Image.LANCZOS)


def screen_at(sc, f):
    """Phone screen image for frame f of scene sc (with in-scene crossfades and tap rings)."""
    plan = sc['plan']
    k = max(j for j, p in enumerate(plan) if p['start'] <= f)
    p = plan[k]
    i = f - p['start']
    im = shot(p['seg'], p['src'][min(i, p['len'] - 1)])
    if k > 0 and i < XF:  # crossfade from previous segment's last frame
        q = plan[k - 1]
        prev = shot(q['seg'], q['src'][-1])
        im = Image.blend(prev, im, ease(i / XF))
    # tap rings
    rings = []
    for c in p['clicks']:
        # scene frame where the source frame c['frame'] is shown
        try:
            at = p['src'].index(c['frame'])
        except ValueError:
            near = [j for j, s in enumerate(p['src']) if s >= c['frame']]
            if not near:
                continue
            at = near[0]
        age = (i - at) / FPS
        if 0 <= age < 0.55:
            rings.append((c['x'] * SCR_W, c['y'] * SCR_H, age))
    if rings:
        im = im.convert('RGBA')
        ov = Image.new('RGBA', im.size, (0, 0, 0, 0))
        d = ImageDraw.Draw(ov)
        for x, y, age in rings:
            p_ = age / 0.55
            r = (22 + 46 * ease_out(p_)) * K
            a = int(230 * (1 - p_))
            d.ellipse((x - r, y - r, x + r, y + r), outline=(255, 255, 255, a), width=max(3, round(5 * K)))
            if age < 0.18:
                c0 = 20 * K
                d.ellipse((x - c0, y - c0, x + c0, y + c0), fill=(255, 255, 255, int(120 * (1 - age / 0.18))))
        im = Image.alpha_composite(im, ov).convert('RGB')
    return im


def ecg_trace(t):
    """Faint scrolling ECG line behind the phone (decorative)."""
    xs = np.arange(0, W, 3)
    ph = (xs / 260.0 + t * 0.9) % 1.0
    y = np.zeros_like(ph)
    y += 10 * np.exp(-((ph - 0.20) / 0.03) ** 2)
    y -= 14 * np.exp(-((ph - 0.36) / 0.008) ** 2)
    y += 90 * np.exp(-((ph - 0.40) / 0.010) ** 2)
    y -= 26 * np.exp(-((ph - 0.44) / 0.010) ** 2)
    y += 20 * np.exp(-((ph - 0.65) / 0.05) ** 2)
    return list(zip(xs.tolist(), ((H * 0.78 if LAND else 1100) - y).tolist()))


def render(stills=None):
    scenes, D = build_timeline()
    BUILD.mkdir(exist_ok=True)
    bg = background()
    shadow, bez, mask = phone_layers()
    heads = {sc['id']: headline_layer(sc) for sc in scenes if sc['id'] != 'end'}
    caps = {sc['id']: caption_layer(sc['vo']) for sc in scenes if sc['id'] != 'end'}
    endL = end_layer()
    N = round(D * FPS)

    # timeline for the audio mix
    taps, whooshes = [], []
    for sc in scenes:
        whooshes.append(sc['t0'])
        for p in sc['plan']:
            for c in p['clicks']:
                if c['frame'] in p['src']:
                    taps.append(sc['t0'] + (p['start'] + p['src'].index(c['frame'])) / FPS)
    (BUILD / 'timeline.json').write_text(json.dumps({
        'duration': N / FPS,
        'scenes': [{'id': s['id'], 't0': s['t0'], 'dur': s['dur']} for s in scenes],
        'vo': [{'id': s['id'], 'start': s['vo_start']} for s in scenes],
        'taps': taps, 'whooshes': whooshes[1:], 'end': scenes[-1]['t0'],
    }, indent=1))

    def frame(n):
        t = n / FPS
        k = max(j for j, s in enumerate(scenes) if s['t0'] <= t + 1e-6)
        sc = scenes[k]
        f = n - round(sc['t0'] * FPS)
        img = bg.copy().convert('RGBA')
        end_t = scenes[-1]['t0']
        tr_a = int(34 * (1 - ease((t - end_t) / 0.6)))
        if tr_a > 0:
            tr = Image.new('RGBA', (W, H), (0, 0, 0, 0))
            ImageDraw.Draw(tr).line(ecg_trace(t), fill=(90, 150, 255, tr_a), width=3)
            img = Image.alpha_composite(img, tr)
        # phone (all scenes but the end card; slides up at the start, drops away into the end card)
        if sc['id'] != 'end' or t < end_t + 0.6:
            if sc['id'] == 'end':
                p = ease((t - end_t) / 0.6)
                dy, alpha = int(900 * p ** 1.5), 1 - p
                prev = scenes[k - 1]
                scr = screen_at(prev, prev['frames'] - 1)
            else:
                p = ease_out(t / 0.9) if k == 0 else 1
                dy, alpha = int((1 - p) * 700), 1.0
                scr = screen_at(sc, f)
                if k > 0 and f < XF:  # crossfade from previous scene's last screen
                    prev = scenes[k - 1]
                    scr = Image.blend(screen_at(prev, prev['frames'] - 1), scr, ease(f / XF))
            layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
            layer.alpha_composite(shadow, (0, dy) if dy < H else (0, H - 1))
            layer.alpha_composite(bez, (0, dy) if dy < H else (0, H - 1))
            m = mask
            layer.paste(scr, (SCR_X, SCR_Y + dy), m)
            if alpha < 1:
                a = np.array(layer.getchannel('A'), dtype=np.float32) * alpha
                layer.putalpha(Image.fromarray(a.astype(np.uint8)))
            img = Image.alpha_composite(img, layer)
        # headline + caption: in at scene start, out before the next cut
        if sc['id'] != 'end':
            fin = ease_out(f / 12)
            fout = 1 - ease((f - (sc['frames'] - 8)) / 8) if k + 1 < len(scenes) else 1
            a = min(fin, fout)
            # horizontal: the text column is centred vertically on the left
            ys = (190, 610) if LAND else (0, 384)
            for L, y0, rise in ((heads[sc['id']], ys[0], 30), (caps[sc['id']], ys[1], 20)):
                if a <= 0:
                    continue
                Lx = L if a >= 1 else L.copy()
                if a < 1:
                    Lx.putalpha(Image.fromarray((np.array(L.getchannel('A'), dtype=np.float32) * a).astype(np.uint8)))
                img.alpha_composite(Lx, (0, y0 + int((1 - fin) * rise)))
        else:
            p = ease_out((t - end_t - 0.3) / 0.8)
            if p > 0:
                Lx = endL.copy()
                Lx.putalpha(Image.fromarray((np.array(endL.getchannel('A'), dtype=np.float32) * p).astype(np.uint8)))
                img.alpha_composite(Lx, (0, int((1 - p) * 60)))
        # fade from / to black at the very ends
        edge = min(1.0, t / 0.35, (D - t) / 0.6)
        if edge < 1:
            img = Image.blend(Image.new('RGBA', (W, H), (0, 0, 0, 255)), img, max(0.0, edge))
        return img.convert('RGB')

    if stills:
        out = BUILD / f'stills{TAG}'
        out.mkdir(exist_ok=True)
        for s in stills:
            frame(round(float(s) * FPS)).save(out / f'still_{float(s):06.2f}.png')
        print('stills →', out)
        return

    ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}',
                           '-r', str(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '14',
                           '-pix_fmt', 'yuv420p', str(BUILD / f'video{TAG}.mp4')], stdin=subprocess.PIPE)
    for n in range(N):
        ff.stdin.write(frame(n).tobytes())
        if n % 150 == 0:
            print(f'  frame {n}/{N}', flush=True)
    ff.stdin.close()
    ff.wait()
    print(f'→ build/video{TAG}.mp4  {N / FPS:.2f} s')


if __name__ == '__main__':
    if '--stills' in sys.argv:
        render(sys.argv[sys.argv.index('--stills') + 1:])
    else:
        render()
