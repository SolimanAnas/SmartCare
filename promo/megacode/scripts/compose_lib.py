"""Rendering primitives for the Megacode promo compositor (PIL + numpy)."""
import json
import math
from functools import lru_cache
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
REPO = ROOT.parent.parent
FPS = 30

# Palette — charcoal, restrained emergency red, monitor green, clinical white
CHAR = (11, 14, 19)
RED = (230, 37, 76)
GREEN = (52, 211, 120)
WHITE = (244, 246, 248)
MUTED = (150, 160, 175)

FONT_DIR = Path('/usr/share/fonts/opentype/inter')


@lru_cache(None)
def font(weight='Bold', size=40, display=True):
    name = f"Inter{'Display' if display else ''}-{weight}.otf"
    return ImageFont.truetype(str(FONT_DIR / name), size)


def ease(p, kind='io'):
    p = min(1.0, max(0.0, p))
    if kind == 'out':
        return 1 - (1 - p) ** 3
    if kind == 'in':
        return p ** 3
    return 4 * p ** 3 if p < .5 else 1 - (-2 * p + 2) ** 3 / 2


def lerp(a, b, p):
    return a + (b - a) * p


def ramp(t, t0, t1, kind='io'):
    return ease((t - t0) / max(1e-6, t1 - t0), kind)


class Capture:
    """Frames + manifest of one recorded layout (land / vert)."""

    def __init__(self, layout):
        self.dir = ROOT / 'capture' / layout
        self.man = json.loads((self.dir / 'manifest.json').read_text())
        self.segs = {s['name']: s for s in self.man['segments']}
        first = next(iter(self.segs))
        im = Image.open(self.dir / first / 'f00000.jpg')
        self.size = im.size

    def mark(self, seg, label, nth=0):
        ms = [m['frame'] for m in self.segs[seg]['marks'] if m['label'] == label]
        return ms[nth]

    def clicks(self, seg):
        return self.segs[seg]['clicks']

    def frames(self, seg):
        return self.segs[seg]['frames']

    @lru_cache(maxsize=24)
    def frame(self, seg, i):
        i = int(max(0, min(self.frames(seg) - 1, i)))
        return Image.open(self.dir / seg / f'f{i:05d}.jpg').convert('RGB')


def camera_view(src, W, H, cx, cy, z, clamp=True):
    """Render src (RGB) as seen by a camera centred on (cx, cy) in normalised source
    coordinates with zoom z (z=1 → source width fills output width).
    Returns (image RGBA sized W×H, rect of the source in output px)."""
    sw, sh = src.size
    s = z * W  # output px per normalised source-width unit
    A = sh / sw
    if clamp and z * 1.0 >= 1.0:
        half_u = (W / 2) / s
        half_v = (H / 2) / (s * A)
        cx = min(max(cx, half_u), 1 - half_u) if half_u < .5 else .5
        cy = min(max(cy, half_v), 1 - half_v) if half_v < .5 else .5
    X0 = W / 2 - cx * s
    Y0 = H / 2 - cy * s * A
    X1, Y1 = X0 + s, Y0 + s * A
    # visible part
    vx0, vy0, vx1, vy1 = max(0, X0), max(0, Y0), min(W, X1), min(H, Y1)
    out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    if vx1 <= vx0 or vy1 <= vy0:
        return out, (X0, Y0, X1, Y1)
    bx0 = (vx0 - X0) / s * sw
    by0 = (vy0 - Y0) / (s * A) * sh
    bx1 = (vx1 - X0) / s * sw
    by1 = (vy1 - Y0) / (s * A) * sh
    ox0, oy0 = int(math.floor(vx0)), int(math.floor(vy0))
    ow, oh = int(math.ceil(vx1)) - ox0, int(math.ceil(vy1)) - oy0
    part = src.resize((ow, oh), Image.LANCZOS if s / sw < 0.75 else Image.BICUBIC, box=(bx0, by0, bx1, by1))
    out.paste(part, (ox0, oy0))
    return out, (X0, Y0, X1, Y1)


def rounded_mask(size, rect, r):
    m = Image.new('L', size, 0)
    ImageDraw.Draw(m).rounded_rectangle([int(rect[0]), int(rect[1]), int(rect[2]) - 1, int(rect[3]) - 1], r, fill=255)
    return m


def card(view, rect, W, H, radius=22, shadow=True, glow=None):
    """Turn a camera view (smaller than frame) into a floating screen with shadow + edge light."""
    out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    if shadow:
        sh = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        d = ImageDraw.Draw(sh)
        d.rounded_rectangle([rect[0] + 10, rect[1] + 34, rect[2] - 10, rect[3] + 40], radius, fill=(0, 0, 0, 200))
        sh = sh.filter(ImageFilter.GaussianBlur(38))
        out.alpha_composite(sh)
    if glow:
        gl = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(gl).rounded_rectangle([rect[0] - 4, rect[1] - 4, rect[2] + 4, rect[3] + 4], radius + 4, fill=glow)
        out.alpha_composite(gl.filter(ImageFilter.GaussianBlur(40)))
    m = rounded_mask((W, H), rect, radius)
    a = np.minimum(np.asarray(view.getchannel('A')), np.asarray(m))
    v = view.copy()
    v.putalpha(Image.fromarray(a))
    out.alpha_composite(v)
    bd = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(bd).rounded_rectangle([int(rect[0]), int(rect[1]), int(rect[2]) - 1, int(rect[3]) - 1], radius, outline=(255, 255, 255, 38), width=2)
    out.alpha_composite(bd)
    return out


def perspective_coeffs(dst_quad, src_quad):
    """PIL PERSPECTIVE coefficients mapping output (dst) points back to source points."""
    M, B = [], []
    for (x, y), (u, v) in zip(dst_quad, src_quad):
        M.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.append(u)
        M.append([0, 0, 0, x, y, 1, -v * x, -v * y]); B.append(v)
    return np.linalg.solve(np.array(M, float), np.array(B, float)).tolist()


def perspective(src, W, H, quad):
    """Warp the full src onto quad (tl, tr, br, bl) in a W×H RGBA canvas."""
    sw, sh = src.size
    c = perspective_coeffs(quad, [(0, 0), (sw, 0), (sw, sh), (0, sh)])
    rgba = src.convert('RGBA')
    return rgba.transform((W, H), Image.PERSPECTIVE, c, Image.BICUBIC, fillcolor=(0, 0, 0, 0))


# ───────────── backgrounds & atmosphere ─────────────
@lru_cache(None)
def _grid(W, H):
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    return y, x


def gradient_bg(W, H, t, accent=RED, accent2=GREEN, a1=0.14, a2=0.08):
    y, x = _grid(W, H)
    base = np.zeros((H, W, 3), np.float32) + np.array(CHAR, np.float32)
    cx1, cy1 = W * (0.18 + 0.03 * math.sin(t * 0.4)), H * 0.15
    cx2, cy2 = W * (0.85 + 0.02 * math.cos(t * 0.3)), H * 0.9
    r1 = np.exp(-(((x - cx1) / (W * 0.45)) ** 2 + ((y - cy1) / (H * 0.6)) ** 2))
    r2 = np.exp(-(((x - cx2) / (W * 0.4)) ** 2 + ((y - cy2) / (H * 0.55)) ** 2))
    base += r1[..., None] * np.array(accent, np.float32) * a1
    base += r2[..., None] * np.array(accent2, np.float32) * a2
    return Image.fromarray(np.clip(base, 0, 255).astype(np.uint8)).convert('RGBA')


class Bokeh:
    """Out-of-focus clinical lights drifting slowly — a stylised resuscitation-bay backdrop."""

    def __init__(self, W, H, n=26, seed=3):
        r = np.random.default_rng(seed)
        self.W, self.H = W, H
        cols = [(255, 255, 255), (255, 240, 225), RED, (120, 200, 255), GREEN]
        wts = [0.35, 0.25, 0.18, 0.12, 0.10]
        self.p = []
        for _ in range(n):
            self.p.append(dict(x=r.uniform(-0.1, 1.1), y=r.uniform(-0.1, 1.0), r=r.uniform(10, 70), a=r.uniform(0.03, 0.13),
                               c=cols[r.choice(len(cols), p=wts)], vx=r.uniform(-0.006, 0.006), ph=r.uniform(0, 6.28)))
        self.cache = {}

    def sprite(self, rad, col):
        key = (int(rad), col)
        if key not in self.cache:
            s = int(rad * 2 + 8)
            im = Image.new('RGBA', (s, s), (0, 0, 0, 0))
            d = ImageDraw.Draw(im)
            d.ellipse([4, 4, s - 4, s - 4], fill=col + (255,))
            d.ellipse([4, 4, s - 4, s - 4], outline=tuple(min(255, c + 40) for c in col) + (255,), width=max(2, int(rad * 0.08)))
            self.cache[key] = im.filter(ImageFilter.GaussianBlur(max(2.5, rad * 0.16)))
        return self.cache[key]

    def render(self, t, alpha=1.0, red_boost=0.0):
        out = Image.new('RGBA', (self.W, self.H), (0, 0, 0, 0))
        for q in self.p:
            a = q['a'] * alpha * (0.7 + 0.3 * math.sin(t * 0.8 + q['ph']))
            if q['c'] == RED:
                a *= 1 + red_boost
            sp = self.sprite(q['r'], q['c'])
            arr = np.asarray(sp).copy()
            arr[..., 3] = (arr[..., 3] * min(1, a)).astype(np.uint8)
            x = int((q['x'] + q['vx'] * t) * self.W - sp.width / 2)
            y = int(q['y'] * self.H - sp.height / 2)
            out.alpha_composite(Image.fromarray(arr), (x, y)) if 0 <= x < self.W and 0 <= y < self.H else out.paste(Image.fromarray(arr), (x, y), Image.fromarray(arr))
        return out


def vignette(W, H, strength=0.55):
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    d = np.sqrt(((x - W / 2) / (W / 2)) ** 2 + ((y - H / 2) / (H / 2)) ** 2) / math.sqrt(2)
    return (1 - strength * np.clip(d, 0, 1) ** 2.2).astype(np.float32)


_v = np.arange(256, dtype=np.float32)
# gentle filmic curve with lifted charcoal blacks, as per-channel LUTs
_CURVE = 255 * (1 - np.exp(-_v / 255 * 1.9)) / (1 - math.exp(-1.9)) * 0.965
LUT = [np.clip(_CURVE + o, 0, 255).astype(np.uint8) for o in (5, 7, 9)]


@lru_cache(None)
def _grain(h, w, amount, k):
    return np.random.default_rng(100 + k).normal(0, amount, (h, w, 1)).astype(np.int16)


def grade(img_rgb, vig, t, grain=5.0):
    a = (np.asarray(img_rgb, np.float32) * vig[..., None]).astype(np.uint8)
    out = np.empty_like(a)
    for c in range(3):
        out[..., c] = LUT[c][a[..., c]]
    if grain:
        g = _grain(a.shape[0], a.shape[1], grain, int(t * 30) % 6)
        out = np.clip(out.astype(np.int16) + g, 0, 255).astype(np.uint8)
    return Image.fromarray(out)


# ───────────── typography ─────────────
def text_size(txt, f, tracking=0):
    b = f.getbbox(txt)
    return b[2] - b[0] + tracking * max(0, len(txt) - 1), b[3]


def draw_tracked(d, xy, txt, f, fill, tracking=0):
    x, y = xy
    if not tracking:
        d.text((x, y), txt, font=f, fill=fill)
        return
    for ch in txt:
        d.text((x, y), ch, font=f, fill=fill)
        x += f.getlength(ch) + tracking


def words_reveal(layer, x, y, text, f, t, t0, per=0.09, dur=0.45, fill=WHITE, accent_words=(), accent=RED, alpha=1.0, rise=26):
    """Word-by-word rise + fade. Returns width drawn."""
    d = ImageDraw.Draw(layer)
    cx = x
    for i, w in enumerate(text.split(' ')):
        p = ramp(t, t0 + i * per, t0 + i * per + dur, 'out')
        if p > 0:
            col = accent if w.strip('.,?!') in accent_words else fill
            a = int(255 * p * alpha)
            tmp = Image.new('RGBA', layer.size, (0, 0, 0, 0))
            ImageDraw.Draw(tmp).text((cx, y + (1 - p) * rise), w, font=f, fill=col + (a,))
            layer.alpha_composite(tmp)
        cx += f.getlength(w + ' ')
    return cx - x


def kicker(layer, x, y, label, t, t0, alpha=1.0, size=22, color=RED):
    """Small uppercase label with a red bar: e.g.  ▍RECOGNIZE THE RHYTHM"""
    p = ramp(t, t0, t0 + 0.35, 'out') * alpha
    if p <= 0:
        return
    f = font('SemiBold', size, display=False)
    tmp = Image.new('RGBA', layer.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(tmp)
    bw = int(lerp(0, 34, p))
    d.rounded_rectangle([x, y + 4, x + bw, y + size - 2], 2, fill=color + (int(255 * p),))
    draw_tracked(d, (x + 46, y - 2), label.upper(), f, WHITE + (int(235 * p),), tracking=3)
    layer.alpha_composite(tmp)


def chip(layer, x, y, label, alpha, size=24):
    """Persistent corner label over footage: dark glass pill with red dot."""
    if alpha <= 0:
        return
    f = font('SemiBold', size, display=False)
    w, _ = text_size(label.upper(), f, 2)
    pad = 20
    tmp = Image.new('RGBA', layer.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(tmp)
    h = size + 26
    d.rounded_rectangle([x, y, x + w + pad * 2 + 22, y + h], h // 2, fill=(8, 10, 14, int(200 * alpha)), outline=(255, 255, 255, int(40 * alpha)), width=1)
    d.ellipse([x + pad - 2, y + h / 2 - 6, x + pad + 10, y + h / 2 + 6], fill=RED + (int(255 * alpha),))
    draw_tracked(d, (x + pad + 22, y + 11), label.upper(), f, WHITE + (int(240 * alpha),), tracking=2)
    layer.alpha_composite(tmp)


def tap_ring(layer, x, y, age, scale=1.0):
    """Touch indicator where the learner tapped (age in seconds since the tap)."""
    if age < 0 or age > 0.6:
        return
    p = age / 0.6
    r = (14 + 46 * ease(p, 'out')) * scale
    a = int(230 * (1 - p))
    d = ImageDraw.Draw(layer)
    d.ellipse([x - r, y - r, x + r, y + r], outline=(255, 255, 255, a), width=max(2, int(4 * scale)))
    if age < 0.18:
        r2 = 16 * scale
        d.ellipse([x - r2, y - r2, x + r2, y + r2], fill=(255, 255, 255, int(150 * (1 - age / 0.18))))


def paste_center(layer, im, cx, cy, alpha=1.0):
    im = im.convert('RGBA')
    if alpha < 1:
        arr = np.asarray(im).copy()
        arr[..., 3] = (arr[..., 3] * alpha).astype(np.uint8)
        im = Image.fromarray(arr)
    layer.alpha_composite(im, (int(cx - im.width / 2), int(cy - im.height / 2)))


def with_alpha(im, a):
    if a >= 1:
        return im
    arr = np.asarray(im.convert('RGBA')).copy()
    arr[..., 3] = (arr[..., 3] * max(0, a)).astype(np.uint8)
    return Image.fromarray(arr)
