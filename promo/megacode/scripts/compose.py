#!/usr/bin/env python3
"""Megacode promo compositor — "The Rhythm Changes. Your Decisions Matter."

Edits the genuine Megacode capture (capture/<layout>/) into the commercial, renders every
frame with PIL and pipes it to ffmpeg. Also writes build/timeline_<layout>.json, which
audio.py uses to put the app's own sound cues, taps, whooshes and impacts on the cut.

  python3 scripts/compose.py land            # 1920×1080 master
  python3 scripts/compose.py vert            # 1080×1920 social cut
  python3 scripts/compose.py land --stills   # contact frames only (QA)
  python3 scripts/compose.py land --timeline # only rewrite build/timeline_land.json (for audio.py)
  python3 scripts/compose.py land --cut play # 33 s Google Play preview cut (app-first, captions, no store CTA)
"""
import json
import math
import subprocess
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from compose_lib import (
    CHAR,
    FPS,
    RED,
    REPO,
    ROOT,
    WHITE,
    Bokeh,
    Capture,
    camera_view,
    card,
    chip,
    draw_tracked,
    ease,
    font,
    grade,
    gradient_bg,
    kicker,
    lerp,
    paste_center,
    perspective,
    ramp,
    tap_ring,
    text_size,
    vignette,
    with_alpha,
    words_reveal,
)

LAYOUT = sys.argv[1] if len(sys.argv) > 1 else 'land'
STILLS = '--stills' in sys.argv
VERT = LAYOUT == 'vert'
# --cut play: Google Play store-listing preview (app from frame 0, burned-in captions for muted autoplay)
PLAY = '--cut' in sys.argv and sys.argv[sys.argv.index('--cut') + 1] == 'play'
TAG = LAYOUT + ('_play' if PLAY else '')
W, H = (1080, 1920) if VERT else (1920, 1080)
DUR = 55.0 if not PLAY else 33.0
CUES = dict(s1=0.0, s2=5.0, s3=12.0, s4=21.0, s5=33.0, s6=43.0, end=48.2) if not PLAY else \
    dict(s1=0.0, s2=0.0, s3=4.6, s4=9.2, s5=18.0, s6=25.0, end=28.0)

cap = Capture(LAYOUT)
SRC_A = cap.size[1] / cap.size[0]
# The two captures are the same deterministic run (identical marks), so the vertical cut can take its
# monitor cutaways, cold open and debrief sheet from the landscape capture, where the page never scrolls.
CAP_LAND = Capture('land') if VERT else cap
R_LAND = dict(monitor=(0.060, 0.084, 0.710, 0.628), ecg=(0.07, 0.13, 0.47, 0.33), hr=(0.46, 0.08, 0.72, 0.30), footer=(0.055, 0.45, 0.335, 0.63))


def cap_of(s):
    return CAP_LAND if s['style'] in ('open', 'macro', 'reveal') else cap

# ───────────────────────── regions of the real UI (normalised source coords) ─────────────────────────
if not VERT:
    R = dict(
        monitor=(0.060, 0.084, 0.710, 0.628),
        ecg=(0.07, 0.13, 0.47, 0.33),       # (x0, y0, x1, y1): width sets the zoom, y centre the framing
        hr=(0.46, 0.08, 0.72, 0.30),
        footer=(0.055, 0.45, 0.335, 0.63),
    )
    CAM = dict(  # cx, cy, zoom
        wide=(0.50, 0.50, 1.00),
        main=(0.385, 0.53, 1.30),
        mon=(0.385, 0.36, 1.55),
        quiz=(0.50, 0.56, 1.45),
        lite=(0.385, 0.80, 1.45),
        side=(0.83, 0.55, 1.6),
        modal=(0.50, 0.47, 1.45),
    )
else:
    R = dict()  # cutaways come from the landscape capture (R_LAND)
    CAM = dict(wide=(0.5, 0.5, 1.0), main=(0.5, 0.5, 1.0), mon=(0.5, 0.30, 1.25), quiz=(0.5, 0.5, 1.1), lite=(0.5, 0.72, 1.2),
               side=(0.5, 0.5, 1.0), modal=(0.5, 0.5, 1.1))


def clk(seg, label, n=0):
    cs = [c for c in cap.clicks(seg) if c['label'] == label]
    return cs[n]['frame']


def mk(seg, label, n=0):
    return cap.mark(seg, label, n)


# ───────────────────────── the edit ─────────────────────────
# Each shot: output [t0, t1) plays `seg` from source frame `a` at `speed`; camera keys (u, cam) over the shot.
SHOTS = []


def shot(t0, t1, seg, a, speed=1.0, cams=None, style='full', **kw):
    if VERT and style == 'full':
        # the mobile page scrolls itself to whatever the learner is doing — keep the whole screen, gentle push-in
        cams = [(0, (0.5, 0.5, 1.0)), (1, (0.5, 0.5, 1.05))]
    elif VERT and style == 'card':
        cams = [(0, (0.5, 0.5, 0.80)), (1, (0.5, 0.5, 0.86))]
    SHOTS.append(dict(t0=t0, t1=t1, seg=seg, a=a, speed=speed, cams=cams or [(0, CAM['main'])], style=style, **kw))


def build_edit():
    vt, vf, pea, rosc = 'vt', 'vf', 'pea', 'rosc'
    q = mk(vt, 'quiz')
    c1 = clk(vt, 'answer', 2)                            # "Synchronized cardioversion"
    shock = mk(vt, 'syncShock')
    # S1 — cold open: the monitor in the room (real VT trace from the capture)
    shot(0.0, 5.0, vt, c1 - 40, 1.0, style='open')

    # S2 — scenario launch → recognise the rhythm
    sc = clk('picker', 'scenario')
    shot(5.0, 6.45, 'picker', sc + 12, 1.9, cams=[(0, (0.5, 0.47, 0.80)), (1, (0.5, 0.49, 0.90))], style='card')
    a2 = max(0, q - 30)
    shot(6.45, 12.0, vt, a2, 1.0, cams=[(0, CAM['mon']), (0.25, CAM['mon']), (0.42, CAM['quiz']), (1, (0.52, 0.60, 1.5))])
    e2 = a2 + int(5.55 * FPS)

    # S3 — make the call, intercut with macro close-ups of the real monitor
    shot(12.0, 13.4, vt, e2, 1.0, style='macro', region='ecg', zoom=(1.0, 1.12))
    shot(13.4, 16.0, vt, e2 + 2, 1.0, cams=[(0, CAM['main']), (0.3, CAM['lite']), (1, CAM['lite'])])
    b3 = e2 + 2 + int(2.6 * FPS)
    shot(16.0, 16.7, vt, b3, 1.0, style='macro', region='hr', zoom=(1.0, 1.15))
    shot(16.7, 18.7, vt, b3 + 4, 1.0, cams=[(0, CAM['lite']), (1, CAM['lite'])])
    c3 = b3 + 4 + 60
    shot(18.7, 19.8, vt, c3, 1.0, style='macro', region='footer', zoom=(1.0, 1.1))
    s4a = shock - int(1.3 * FPS)                          # shock lands right after the scene-4 title
    shot(19.8, 21.0, vt, s4a - 36, 1.0, style='macro', region='ecg', zoom=(1.05, 1.2))

    # S4 — act with purpose: synchronized shock → the rhythm changes to VF → defibrillate → CPR
    shot(21.0, 24.2, vt, s4a, 1.0, cams=[(0, CAM['main']), (0.35, CAM['main']), (1, CAM['mon'])])
    vq = mk(vt, 'vfQuiz')
    shot(24.2, 25.0, vt, vq - 4, 1.0, cams=[(0, CAM['quiz']), (1, (0.5, 0.55, 1.55))])
    shot(25.0, 26.0, vf, 0, 1.0, cams=[(0, (0.5, 0.55, 1.55)), (1, (0.5, 0.56, 1.6))])
    vd = mk(vf, 'vfDecision')
    shot(26.0, 28.0, vf, vd, 1.0, cams=[(0, CAM['lite']), (1, CAM['lite'])])
    dsh = mk(vf, 'defibShocked')
    e4 = vd + 60
    shot(28.0, 29.6, vf, e4, (dsh - e4) / (1.2 * FPS), cams=[(0, CAM['main']), (1, CAM['mon'])])
    rc = clk(vf, 'answer', 2)                            # "Resume CPR immediately"
    shot(29.6, 31.4, vf, rc - 24, 1.0, cams=[(0, CAM['lite']), (1, CAM['lite'])])
    cp = mk(vf, 'cpr')
    shot(31.4, 33.0, vf, cp + 5, 1.0, cams=[(0, CAM['mon']), (1, (0.33, 0.30, 1.9))])

    # S5 — the case keeps changing: PEA, a wrong call with genuine feedback, the correction, ROSC
    shot(33.0, 35.2, pea, 10, 1.0, cams=[(0, CAM['main']), (1, CAM['lite'])])
    pq = clk(pea, 'answer', 1)                           # "PEA" rhythm answer
    shot(35.2, 36.4, pea, pq - 12, 1.0, cams=[(0, CAM['quiz']), (1, (0.5, 0.56, 1.55))])
    wr = clk(pea, 'wrong')
    shot(36.4, 40.4, pea, wr - 18, 1.0, cams=[(0, CAM['lite']), (1, (0.40, 0.80, 1.5))])
    pc = clk(rosc, 'answer')
    shot(40.4, 43.0, rosc, pc - 14, 1.0, cams=[(0, CAM['main']), (1, (0.45, 0.60, 1.32))])

    # S6 — product reveal on the genuine debrief, then end card
    fin = clk('debrief', 'finish')
    shot(43.0, DUR, 'debrief', fin + 8, 0.6, style='reveal')


def build_edit_play():
    """33 s store-listing cut: the real app on screen from the first frame, core loop inside 10 s."""
    vt, vf, pea, rosc = 'vt', 'vf', 'pea', 'rosc'
    q = mk(vt, 'quiz')
    c1, c2 = clk(vt, 'answer', 2), clk(vt, 'answer', 3)
    shock = mk(vt, 'syncShock')
    shot(0.0, 1.2, vt, c1 - 38, 1.0, cams=[(0, (0.40, 0.30, 1.7)), (1, CAM['mon'])])   # hook: live VT at 160/min
    shot(1.2, 4.6, vt, q - 6, 1.0, cams=[(0, CAM['quiz']), (1, (0.52, 0.60, 1.5))])
    shot(4.6, 7.4, vt, c1 - 30, 1.0, cams=[(0, CAM['lite']), (1, CAM['lite'])])
    shot(7.4, 9.2, vt, c2 - 24, 1.0, cams=[(0, CAM['lite']), (1, CAM['main'])])
    shot(9.2, 12.4, vt, shock - 30, 1.0, cams=[(0, CAM['main']), (0.35, CAM['main']), (1, CAM['mon'])])
    shot(12.4, 13.4, vf, 0, 1.0, cams=[(0, (0.5, 0.55, 1.55)), (1, (0.5, 0.56, 1.6))])
    vd, dsh = mk(vf, 'vfDecision'), mk(vf, 'defibShocked')
    shot(13.4, 16.6, vf, vd + 20, (dsh - vd - 20) / (2.4 * FPS), cams=[(0, CAM['lite']), (0.45, CAM['lite']), (1, CAM['mon'])])
    cp = mk(vf, 'cpr')
    shot(16.6, 18.0, vf, cp + 5, 1.0, cams=[(0, CAM['mon']), (1, (0.33, 0.30, 1.8))])
    wr = clk(pea, 'wrong')
    shot(18.0, 23.0, pea, wr - 30, 1.0, cams=[(0, CAM['lite']), (1, (0.40, 0.80, 1.5))])
    pc = clk(rosc, 'answer')
    shot(23.0, 25.0, rosc, pc - 14, 1.0, cams=[(0, CAM['main']), (1, (0.45, 0.60, 1.32))])
    fin = clk('debrief', 'finish')
    shot(25.0, DUR, 'debrief', fin + 8, 0.6, style='reveal')


build_edit_play() if PLAY else build_edit()

# ───────────────────────── titles ─────────────────────────
TITLES = [] if PLAY else [  # (t0, t1, big text, accent words, chip label)
    (6.45, 7.95, 'Recognize the rhythm.', ('rhythm',), 'Recognize the rhythm'),
    (12.0, 13.4, 'Make the call.', ('call',), 'Make the call'),
    (21.0, 22.25, 'Act with purpose.', ('purpose',), 'Act with purpose'),
    (33.0, 35.2, 'Every decision is a learning opportunity.', ('learning',), 'Every decision is a learning opportunity'),
]


PLAY_CHIPS = [(0.0, 4.6, 'Recognize the rhythm'), (4.6, 9.2, 'Make the call'), (9.2, 18.0, 'Act with purpose'),
              (18.0, 25.0, 'Every decision is a learning opportunity')]


def captions():
    """Narration as burned-in captions (the store autoplays muted), split by sentence and timed by length."""
    import wave
    out = []
    for line in json.loads((ROOT / 'scripts' / 'vo_lines_play.json').read_text()):
        w = wave.open(str(ROOT / 'audio' / 'vo' / f"{line['id']}.wav"))
        dur = w.getnframes() / w.getframerate()
        parts = [p.strip() + ('' if p.strip().endswith(('.', '?', '!')) else '.') for p in line['text'].replace('?', '?|').replace('. ', '.|').split('|') if p.strip()]
        tot = sum(len(p) for p in parts)
        t = line['start']
        for p in parts:
            d = dur * len(p) / tot
            out.append((t, t + d, p))
            t += d
    return out


CAPTIONS = captions() if PLAY else []


def render_play_overlays(img, t):
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for t0, t1, label in PLAY_CHIPS:
        if t0 <= t < t1:
            ca = ramp(t, t0, t0 + 0.25) * (1 - ramp(t, t1 - 0.25, t1))
            chip(ov, 40, 36, label, ca, size=24)
    for t0, t1, text in CAPTIONS:
        if t0 - 0.05 <= t < t1 + 0.15:
            a = ramp(t, t0 - 0.05, t0 + 0.1) * (1 - ramp(t, t1, t1 + 0.15))
            f = font('SemiBold', 44, display=False)
            tw = f.getlength(text)
            # keep the engine's feedback visible: when framed on the decision panel, caption at the top
            sh_ = shot_at(t)
            top = sh_['style'] == 'full' and cam_at(sh_, (t - sh_['t0']) / (sh_['t1'] - sh_['t0']))[1] >= 0.7
            x, y = W / 2 - tw / 2, 108 if top else H - (150 if t < CUES['end'] else 230)
            d = ImageDraw.Draw(ov)
            d.rounded_rectangle([x - 28, y - 16, x + tw + 28, y + 64], 18, fill=(6, 8, 12, int(200 * a)))
            d.text((x, y), text, font=f, fill=WHITE + (int(255 * a),))
    img.alpha_composite(ov)
    return img


def shot_at(t):
    for s in SHOTS:
        if s['t0'] <= t < s['t1']:
            return s
    return SHOTS[-1]


def cam_at(s, u):
    ks = s['cams']
    if len(ks) == 1:
        return ks[0][1]
    for (u0, c0), (u1, c1) in zip(ks, ks[1:]):
        if u <= u1:
            p = ease((u - u0) / max(1e-6, u1 - u0))
            return tuple(lerp(a, b, p) for a, b in zip(c0, c1))
    return ks[-1][1]


def src_index(s, t):
    return s['a'] + (t - s['t0']) * FPS * s['speed']


def shock_times():
    """Output times of the engine's shock cues (noise bursts) — drives flash + impact."""
    out = []
    for e in app_events():
        if e['kind'] == 'noise':
            out.append(e['t'])
    return out


_EV = None


def app_events():
    """Map the tapped Web Audio events into output time through the edit."""
    global _EV
    if _EV is not None:
        return _EV
    evs = []
    for s in SHOTS:
        cs = cap_of(s)
        seg = cs.segs[s['seg']]
        for e in cs.man['sound']:
            rel = (e['t'] - seg['t0']) * FPS - 1
            if not (0 <= rel < seg['frames']):
                continue
            if not (s['a'] <= rel < src_index(s, s['t1'])):
                continue
            t = s['t0'] + (rel - s['a']) / (FPS * s['speed'])
            if s['style'] == 'reveal' and e['type'] != 'triangle':
                continue
            if s['style'] == 'open' and e.get('type') not in ('sine',):
                continue
            if s['speed'] > 1.3 and e.get('type') == 'sine' and e.get('f', 0) > 100:
                continue
            ev = dict(e, t=round(t, 4))
            if s['style'] == 'open':
                ev['gain'] = 0.6
            evs.append(ev)
    # the engine's alarm pattern under the cold open (same tones as Snd.alarm in megacode.js)
    for t0 in (0.35, 1.55):
        for w, f in ((0, 988), (0.2, 784), (0.4, 988)):
            evs.append(dict(kind='osc', type='square', f=f, t=t0 + w, gain=0.8))
    _EV = sorted(evs, key=lambda e: e['t'])
    return _EV


def refine_tap(seg, c, off=6):
    """Modals re-centre when feedback appears, so the tapped button moves on the very next frame.
    Re-locate it from the highlight the engine paints on it (green = right, red = wrong)."""
    if c['label'] not in ('answer', 'wrong'):
        return dict(c, y1=c['y'])
    fr = np.asarray(cap.frame(seg, c['frame'] + off).reduce(4)).astype(np.int16)
    h, w = fr.shape[:2]
    R_, G_, B_ = fr[..., 0], fr[..., 1], fr[..., 2]
    m = (G_ - R_ > 18) & (G_ - B_ > -4) & (G_ > 36) if c['label'] == 'answer' else (R_ - G_ > 25) & (R_ - B_ > 8) & (R_ > 50)
    x0, x1 = int((c['x'] - c['w'] / 2 - 0.02) * w), int((c['x'] + c['w'] / 2 + 0.02) * w)
    y0, y1 = int(max(0, c['y'] - 0.26) * h), int(min(1, c['y'] + 0.18) * h)
    x0, x1 = max(0, x0), min(w, x1)
    bw = max(4, int(c['w'] * w * 0.4))
    inside = m[y0:y1, x0:x1].mean(1)
    left = m[y0:y1, max(0, x0 - bw):max(1, x0)].mean(1) if x0 > 2 else np.zeros(y1 - y0)
    right = m[y0:y1, min(w - 1, x1):min(w, x1 + bw)].mean(1) if x1 < w - 2 else np.zeros(y1 - y0)
    # a highlighted button fills its own column but not the neighbouring one (the feedback row spans both)
    full_width = c['w'] > 0.6 * (1 if not VERT else 1) and VERT
    rows = (inside > 0.45) & ((np.maximum(left, right) < 0.15) | full_width)
    runs, i = [], 0
    while i < len(rows):
        if rows[i]:
            j = i
            while j < len(rows) and rows[j]:
                j += 1
            runs.append((i, j)); i = j
        else:
            i += 1
    bh = c['h'] * h
    runs = [r for r in runs if 0.55 * bh <= r[1] - r[0] <= 1.3 * bh]
    if not runs:
        return dict(c, y1=c['y']) if off <= 1 else refine_tap(seg, c, 1)
    cy0 = (c['y'] * h) - y0
    r0, r1 = min(runs, key=lambda r: abs((r[0] + r[1]) / 2 - cy0))
    return dict(c, y1=(y0 + (r0 + r1) / 2) / h)


def taps():
    out = []
    for s in SHOTS:
        if s['style'] not in ('full', 'card'):
            continue
        for c in cap.clicks(s['seg']):
            if s['a'] <= c['frame'] < src_index(s, s['t1']):
                out.append((s['t0'] + (c['frame'] - s['a']) / (FPS * s['speed']), refine_tap(s['seg'], c), s))
    return out


TAPS = taps()

# ───────────────────────── renderers ─────────────────────────
VIG = vignette(W, H, 0.5)
BOKEH = Bokeh(W, H, n=30 if not VERT else 26)
ICON = Image.open(REPO / 'icons' / 'icon-512x512.png').convert('RGBA')
_gy, _gx = np.mgrid[0:H, 0:W].astype(np.float32)
DOF_OPEN = Image.fromarray((np.clip((np.abs(_gx - W * 0.55) / (W * 0.5) - 0.35) * 1.8, 0, 1) if not VERT else
                            np.clip((np.abs(_gy - H * 0.4) / (H * 0.5) - 0.3) * 1.8, 0, 1)) .__mul__(255).astype(np.uint8))
DOF_MACRO = Image.fromarray((np.clip((np.abs(_gy - H * 0.5) / (H * 0.5) - 0.25) * 1.6, 0, 1) * 255).astype(np.uint8))
_sy = np.linspace(0, 1, H, dtype=np.float32)[:, None]
SCRIM_BOTTOM = Image.fromarray(np.dstack([np.zeros((H, W, 3), np.uint8),
                                          (np.clip((_sy - 0.55) / 0.45, 0, 1) ** 1.5 * 200 * np.ones((1, W))).astype(np.uint8)]), 'RGBA')


def to_out(c_u, c_v, cam):
    cx, cy, z = cam
    s = z * W
    # mirror camera_view's clamp so taps land on the button
    if z >= 1.0:
        hu, hv = (W / 2) / s, (H / 2) / (s * SRC_A)
        cx = min(max(cx, hu), 1 - hu) if hu < .5 else .5
        cy = min(max(cy, hv), 1 - hv) if hv < .5 else .5
    return W / 2 + (c_u - cx) * s, H / 2 + (c_v - cy) * s * SRC_A


def render_full(s, t):
    u = (t - s['t0']) / (s['t1'] - s['t0'])
    cam = cam_at(s, u)
    src = cap.frame(s['seg'], round(src_index(s, t)))
    view, rect = camera_view(src, W, H, *cam)
    base = gradient_bg(W, H, t) if s['style'] == 'card' else Image.new('RGBA', (W, H), CHAR + (255,))
    if s['style'] == 'card':
        base.alpha_composite(BOKEH.render(t, 0.6))
        base.alpha_composite(card(view, rect, W, H, radius=26))
    else:
        base.alpha_composite(view)
    # taps
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for tt, c, ss in TAPS:
        if ss is s and 0 <= t - tt <= 0.6:
            # the tapped button can move right after the tap (modal re-centres / page scrolls): follow it
            yy = lerp(c['y'], c.get('y1', c['y']), ease(min(1, (t - tt) / 0.08)))
            x, y = to_out(c['x'], yy, cam_at(s, (tt - s['t0']) / (s['t1'] - s['t0'])))
            tap_ring(ov, x, y, t - tt, scale=cam[2] * (1.0 if not VERT else 1.6))
    base.alpha_composite(ov)
    return base


def region_view(src, region, zoom):
    x0, y0, x1, y1 = region
    sw, sh = src.size
    rw = (x1 - x0)
    z = zoom / rw  # region width fills the frame
    if VERT:  # portrait: smallest zoom that still fills the frame height, centred on the region
        sa = src.size[1] / src.size[0]
        z = zoom * max(1 / rw, (H / W) / sa)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    v, _ = camera_view(src, W, H, cx, cy, z, clamp=False)
    return v


def render_macro(s, t):
    """Cinematic macro of the real monitor: tight crop, slow push, shallow focus, glow."""
    u = (t - s['t0']) / (s['t1'] - s['t0'])
    z = lerp(*s['zoom'], ease(u))
    src = cap_of(s).frame(s['seg'], round(src_index(s, t)))
    v = region_view(src, R_LAND[s['region']], z).convert('RGB')
    glow = v.filter(ImageFilter.GaussianBlur(18))
    arr = np.asarray(v, np.float32) + np.asarray(glow, np.float32) * 0.55
    sharp = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    soft = sharp.filter(ImageFilter.GaussianBlur(9))
    out = Image.composite(soft, sharp, DOF_MACRO)  # focus band through the middle
    return out.convert('RGBA')


def render_open(s, t):
    """Cold open: dark bay, alarm light, the real monitor glowing in perspective, slow push-in."""
    base = gradient_bg(W, H, t, a1=0.06 + 0.07 * (0.5 + 0.5 * math.sin(t * 2 * math.pi * 0.9)), a2=0.05)
    base.alpha_composite(BOKEH.render(t, 0.8, red_boost=0.4 + 0.4 * math.sin(t * 5.6)))
    src = cap_of(s).frame(s['seg'], round(src_index(s, t)))
    x0, y0, x1, y1 = R_LAND['monitor']
    sw, sh = src.size
    mon = src.crop((int(x0 * sw), int(y0 * sh), int(x1 * sw), int(y1 * sh)))
    p = ease(t / 5.0, 'io')
    if not VERT:
        sc = lerp(0.60, 0.70, p)
        mw, mh = W * sc, W * sc * mon.height / mon.width
        cx, cy = W * lerp(0.62, 0.60, p), H * 0.42
        k = lerp(0.10, 0.05, p)  # perspective skew
    else:
        sc = lerp(0.86, 0.98, p)
        mw, mh = W * sc, W * sc * mon.height / mon.width
        cx, cy = W * 0.5, H * 0.45
        k = lerp(0.10, 0.05, p)
    quad = [(cx - mw / 2, cy - mh / 2 + mh * k), (cx + mw / 2, cy - mh / 2), (cx + mw / 2, cy + mh / 2), (cx - mw / 2, cy + mh / 2 - mh * k)]
    warped = perspective(mon, W, H, quad)
    glow = warped.filter(ImageFilter.GaussianBlur(30))
    base.alpha_composite(with_alpha(glow, 0.9))
    base.alpha_composite(warped)
    # shallow depth of field: the far edge of the monitor falls out of focus
    blur = base.filter(ImageFilter.GaussianBlur(7))
    base = Image.composite(blur, base, DOF_OPEN)
    # red alarm wash
    a = 0.07 * max(0, math.sin(t * 2 * math.pi * 0.9)) ** 2
    if a > 0:
        base.alpha_composite(Image.new('RGBA', (W, H), RED + (int(255 * a),)))
    # floor scrim so the line reads cleanly
    base.alpha_composite(SCRIM_BOTTOM)
    # fade from black
    fb = 1 - ramp(t, 0.0, 0.9, 'out')
    if fb > 0:
        base.alpha_composite(Image.new('RGBA', (W, H), (0, 0, 0, int(255 * fb))))
    # line
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    f = font('Bold', 74 if not VERT else 84)
    alpha = 1 - ramp(t, 4.55, 4.95)
    if not VERT:
        words_reveal(ov, 120, 800, 'Would you know what to do next?', f, t, 1.7, accent_words=('next',), alpha=alpha)
    else:
        words_reveal(ov, 90, 1330, 'Would you know', f, t, 1.7, alpha=alpha)
        words_reveal(ov, 90, 1430, 'what to do next?', f, t, 2.0, accent_words=('next',), alpha=alpha)
    base.alpha_composite(ov)
    return base


DEBRIEF_BOX = (0.225, 0.035, 0.775, 0.60)  # the debrief sheet in the landscape capture


def debrief_card(t, s, rect):
    """The genuine debrief sheet as a floating glass screen occupying `rect` (x0, y0, x1, y1) in output px."""
    src = cap_of(s).frame(s['seg'], round(src_index(s, t)))
    sw, sh = src.size
    bx0, by0, bx1, by1 = DEBRIEF_BOX
    box = (bx0 * sw, by0 * sh, bx1 * sw, by1 * sh)
    w, h = int(rect[2] - rect[0]), int(rect[3] - rect[1])
    im = src.resize((w, h), Image.LANCZOS, box=box).convert('RGBA')
    view = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    view.paste(im, (int(rect[0]), int(rect[1])))
    return card(view, (int(rect[0]), int(rect[1]), int(rect[0]) + w, int(rect[1]) + h), W, H, radius=26, glow=(230, 37, 76, 60))


def render_reveal(s, t):
    lt = t - s['t0']
    base = gradient_bg(W, H, t, a1=0.12, a2=0.08)
    base.alpha_composite(BOKEH.render(t, 0.55))
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    endc = CUES['end'] - s['t0']
    # phase A: genuine debrief on a floating screen + headline
    pa = 1 - ramp(lt, endc - 0.5, endc + 0.1)
    if pa > 0:
        e = ease((lt - 0.5) / 1.1, 'io')
        bw_, bh_ = DEBRIEF_BOX[2] - DEBRIEF_BOX[0], (DEBRIEF_BOX[3] - DEBRIEF_BOX[1]) * (CAP_LAND.size[1] / CAP_LAND.size[0])
        asp = bh_ / bw_
        if not VERT:
            w0 = W * 0.80; w1 = W * 0.44
            ww = lerp(w0, w1, e); hh = ww * asp
            cx_, cy_ = lerp(W / 2, W * 0.735, e), H / 2 + (1 - e) * 10
        else:
            w0 = W * 0.96; w1 = W * 0.90
            ww = lerp(w0, w1, e); hh = ww * asp
            cx_, cy_ = W / 2, lerp(H * 0.42, H * 0.36, e)
        c = debrief_card(t, s, (cx_ - ww / 2, cy_ - hh / 2, cx_ + ww / 2, cy_ + hh / 2))
        base.alpha_composite(with_alpha(c, pa))
        f = font('Bold', 66 if not VERT else 80)
        if not VERT:
            words_reveal(ov, 110, 452, 'Train your decisions.', f, lt, 1.2, alpha=pa, accent_words=('decisions',))
            words_reveal(ov, 110, 534, 'Strengthen your readiness.', f, lt, 1.6, alpha=pa)
            kicker(ov, 112, 392, 'SmartCare Megacode', lt, 1.0, alpha=pa)
        else:
            words_reveal(ov, 80, 1120, 'Train your decisions.', f, lt, 1.0, alpha=pa, accent_words=('decisions',))
            words_reveal(ov, 80, 1215, 'Strengthen your', f, lt, 1.45, alpha=pa)
            words_reveal(ov, 80, 1310, 'readiness.', f, lt, 1.6, alpha=pa)
            kicker(ov, 82, 1055, 'SmartCare Megacode', lt, 0.8, alpha=pa)
    # phase B: end card
    pb = ramp(lt, endc - 0.2, endc + 0.6, 'out')
    if pb > 0:
        end_card(ov, lt - endc, pb)
    base.alpha_composite(ov)
    return base


def end_card(ov, lt, pb):
    d = ImageDraw.Draw(ov)
    cx = W / 2
    icon_sz = 200 if not VERT else 260
    y0 = 150 if not VERT else 470
    ic = ICON.resize((icon_sz, icon_sz), Image.LANCZOS)
    m = Image.new('L', ic.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, icon_sz - 1, icon_sz - 1], int(icon_sz * 0.22), fill=255)
    ic.putalpha(Image.fromarray(np.minimum(np.asarray(ic.getchannel('A')), np.asarray(m))))
    rise = (1 - pb) * 30
    paste_center(ov, ic, cx, y0 + icon_sz / 2 + rise, alpha=pb)
    y = y0 + icon_sz + (44 if not VERT else 70)
    f1 = font('Bold', 86 if not VERT else 96)
    title = 'SmartCare Megacode'
    tw = f1.getlength(title)
    tmp = Image.new('RGBA', ov.size, (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    if VERT:
        for i, line in enumerate(['SmartCare', 'Megacode']):
            lw = f1.getlength(line)
            td.text((cx - lw / 2, y + rise + i * 108), line, font=f1, fill=(WHITE if i == 0 else RED) + (int(255 * pb),))
        y += 108
    else:
        td.text((cx - tw / 2, y + rise), 'SmartCare ', font=f1, fill=WHITE + (int(255 * pb),))
        td.text((cx - tw / 2 + f1.getlength('SmartCare '), y + rise), 'Megacode', font=f1, fill=RED + (int(255 * pb),))
    ov.alpha_composite(tmp)
    y += 120 if not VERT else 140
    f2 = font('Medium', 40 if not VERT else 46)
    sub = 'Practice.  Decide.  Learn.'
    p2 = ramp(lt, 0.5, 1.0, 'out') * pb
    sw_ = f2.getlength(sub)
    d.text((cx - sw_ / 2, y), sub, font=f2, fill=(205, 212, 222, int(255 * p2)))
    # CTA
    y += 100 if not VERT else 130
    p3 = ramp(lt, 1.0, 1.6, 'out') * pb
    f3 = font('Bold', 46 if not VERT else 50)
    cta = 'Challenge yourself. Try the Megacode.' if not VERT else 'Challenge yourself.'
    cw = f3.getlength(cta)
    d.text((cx - cw / 2, y + (1 - p3) * 16), cta, font=f3, fill=WHITE + (int(255 * p3),))
    if VERT:
        y += 64
        cta2 = 'Try the Megacode.'
        d.text((cx - f3.getlength(cta2) / 2, y + (1 - p3) * 16), cta2, font=f3, fill=WHITE + (int(255 * p3),))
    # store line — plain text (official Google Play badge can be dropped into assets/, see README)
    y += 96 if not VERT else 120
    p4 = ramp(lt, 1.5, 2.1, 'out') * pb
    if PLAY:  # already on the store page: no store CTA, just the disclaimer
        _disclaimer(d, cx, p4)
        return
    f4 = font('SemiBold', 30 if not VERT else 34, display=False)
    lab = 'GET IT ON GOOGLE PLAY'
    lw, _ = text_size(lab, f4, 3)
    bw, bh = lw + 120, 74 if not VERT else 84
    bx, by = cx - bw / 2, y
    d.rounded_rectangle([bx, by, bx + bw, by + bh], bh // 2, fill=(230, 37, 76, int(255 * p4)))
    # play triangle glyph (generic, not the Google logo)
    tx, ty = bx + 42, by + bh / 2
    d.polygon([(tx, ty - 14), (tx, ty + 14), (tx + 22, ty)], fill=WHITE + (int(255 * p4),))
    draw_tracked(d, (bx + 82, by + bh / 2 - 19), lab, f4, WHITE + (int(255 * p4),), tracking=3)
    y += bh + 30
    f5 = font('Regular', 24 if not VERT else 26, display=False)
    url = 'play.google.com/store/apps/details?id=io.github.solimananas.smartcare'
    if VERT:
        for i, line in enumerate(['play.google.com/store/apps/details', '?id=io.github.solimananas.smartcare']):
            d.text((cx - f5.getlength(line) / 2, y + i * 36), line, font=f5, fill=(170, 180, 192, int(255 * p4)))
    else:
        d.text((cx - f5.getlength(url) / 2, y), url, font=f5, fill=(170, 180, 192, int(255 * p4)))
    _disclaimer(d, cx, p4)


def _disclaimer(d, cx, p4):
    f6 = font('Regular', 19 if not VERT else 22, display=False)
    disc = ['Educational simulation for practice. Does not certify competence or replace',
            'accredited ACLS training or supervised clinical practice.'] if not VERT else \
           ['Educational simulation for practice. Does not certify', 'competence or replace accredited ACLS training', 'or supervised clinical practice.']
    yy = H - (86 if not VERT else 210)
    for i, line in enumerate(disc):
        d.text((cx - f6.getlength(line) / 2, yy + i * (26 if not VERT else 30)), line, font=f6, fill=(130, 140, 155, int(220 * p4)))


def render_titles(img, t):
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for t0, t1, text, acc, label in TITLES:
        if t0 - 0.05 <= t < t1:
            a = 1 - ramp(t, t1 - 0.35, t1)
            # scrim: darken/blur footage behind the title
            k = ramp(t, t0, t0 + 0.3) * a
            if k > 0:
                bl = img.filter(ImageFilter.GaussianBlur(14 * k))
                img = Image.blend(img, bl, 1.0)
                sc = Image.new('RGBA', (W, H), (6, 8, 12, int(165 * k)))
                img.alpha_composite(sc)
            if not VERT:
                f = font('Bold', 100 if len(text) < 24 else 82)
                lines = [text] if len(text) < 24 else ['Every decision is a', 'learning opportunity.']
                y = H / 2 - 60 * len(lines)
                kicker(ov, 124, int(y - 52), 'SmartCare Megacode', t, t0, alpha=a)
                for i, line in enumerate(lines):
                    words_reveal(ov, 120, y + i * 112, line, f, t, t0 + 0.05 + i * 0.25, accent_words=acc, alpha=a)
            else:
                f = font('Bold', 96 if len(text) < 24 else 84)
                lines = text.split(' ') if len(text) < 24 else ['Every decision', 'is a learning', 'opportunity.']
                if len(text) < 24:
                    lines = [' '.join(lines[:-1]), lines[-1]] if len(lines) > 2 else lines
                y = H / 2 - 60 * len(lines)
                kicker(ov, 84, int(y - 56), 'SmartCare Megacode', t, t0, alpha=a)
                for i, line in enumerate(lines):
                    words_reveal(ov, 80, y + i * 108, line, f, t, t0 + 0.05 + i * 0.2, accent_words=acc, alpha=a)
        # persistent chip after the title
        nxt = [x for x in TITLES if x[0] > t0]
        chip_end = min([nxt[0][0] if nxt else CUES['s6'], CUES['s6']])
        if t1 - 0.2 <= t < chip_end - 0.05:
            ca = ramp(t, t1 - 0.2, t1 + 0.15) * (1 - ramp(t, chip_end - 0.3, chip_end - 0.05))
            chip(ov, 40 if not VERT else 36, 36 if not VERT else 60, label, ca, size=22 if not VERT else 26)
    img.alpha_composite(ov)
    return img


def render_frame(i):
    t = i / FPS
    s = shot_at(t)
    st = s['style']
    if st == 'open':
        img = render_open(s, t)
    elif st == 'macro':
        img = render_macro(s, t)
    elif st == 'reveal':
        img = render_reveal(s, t)
    else:
        img = render_full(s, t)
    if PLAY:
        img = render_play_overlays(img, t)
    elif st not in ('open', 'reveal'):
        img = render_titles(img, t)
    # shock flash + micro shake (synced to the engine's own shock cue)
    for ts in SHOCKS:
        dt = t - ts
        if 0 <= dt < 0.35:
            a = (1 - dt / 0.35) ** 2
            fl = Image.new('RGBA', (W, H), (235, 245, 255, int(200 * a)))
            img.alpha_composite(fl)
            if dt < 0.15:
                ox = int(8 * math.sin(dt * 180))
                img = Image.fromarray(np.roll(np.asarray(img), ox, axis=1))
    # quick dip between scenes 1→2
    if not PLAY and 4.85 <= t < 5.12:
        a = 1 - abs(t - 4.98) / 0.14
        img.alpha_composite(Image.new('RGBA', (W, H), (0, 0, 0, int(255 * max(0, min(1, a))))))
    out = grade(img.convert('RGB'), VIG, t, grain=4.0)
    if t > DUR - 0.6:
        out = Image.blend(out, Image.new('RGB', (W, H), (0, 0, 0)), ramp(t, DUR - 0.6, DUR))
    return out


SHOCKS = shock_times()


def write_timeline():
    tl = dict(duration=DUR, cues=CUES, layout=LAYOUT,
              app_sounds=app_events(),
              taps=[round(tt, 3) for tt, c, s in TAPS],
              shocks=SHOCKS,
              whooshes=[CUES['s2'], CUES['s3'], CUES['s4'], CUES['s5'], 13.4, 16.0, 16.7, 18.7, 19.8] if not PLAY else
              [CUES['s3'], 7.4, CUES['s4'], 12.4, 13.4, 16.6, CUES['s5'], 23.0],
              vo_lines='scripts/vo_lines_play.json' if PLAY else 'scripts/vo_lines.json',
              impacts=[CUES['s2'], CUES['s6'], CUES['end']],
              shots=[{k: v for k, v in s.items() if k != 'cams'} for s in SHOTS])
    p = ROOT / 'build' / f'timeline_{TAG}.json'
    p.parent.mkdir(exist_ok=True)
    p.write_text(json.dumps(tl, indent=1))
    return p


def main():
    write_timeline()
    if '--timeline' in sys.argv:
        return
    if STILLS:
        outd = ROOT / 'build' / f'stills_{TAG}'
        outd.mkdir(parents=True, exist_ok=True)
        ts = [float(x) for x in sys.argv[sys.argv.index('--stills') + 1:] if not x.startswith('--') and x != 'play'] or [0.5 + k for k in range(int(DUR))]
        for t in ts:
            render_frame(int(round(t * FPS))).save(outd / f't{t:05.2f}.jpg', quality=88)
        print('stills ->', outd)
        return
    out = ROOT / 'build' / f'video_{TAG}.mp4'
    n = int(DUR * FPS)
    ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS),
                           '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', '-r', str(FPS), str(out)],
                          stdin=subprocess.PIPE)
    for i in range(n):
        ff.stdin.write(render_frame(i).tobytes())
        if i % 150 == 0:
            print(f'{i}/{n}', flush=True)
    ff.stdin.close()
    ff.wait()
    print('video ->', out)


if __name__ == '__main__':
    main()
