#!/usr/bin/env python3
"""Original score + sound design + narration mix for the Megacode promo.

Everything here is synthesized from scratch (no samples, no third-party music):
  * score      — D-minor pulse that builds through the code and resolves to D major at the reveal
  * app sounds — the Megacode engine's own Web Audio cues (monitor beeps, charge whine, shock,
                 ready tone, alarm), re-rendered from the events tapped during capture so they
                 land on the exact frames where the app produced them
  * foley      — UI taps, whooshes, impacts, low room tone
  * narration  — Piper TTS lines (audio/vo/*.wav), music ducked underneath

Usage: python3 scripts/audio.py build/timeline_land.json audio/mix_land.wav
"""
import json
import sys
import wave
from pathlib import Path

import numpy as np
from scipy import signal

SR = 48000
ROOT = Path(__file__).resolve().parent.parent
rng = np.random.default_rng(7)


def tl(sec):
    return np.arange(int(sec * SR)) / SR


def place(buf, x, t, gain=1.0, pan=0.0):
    """Add mono/stereo clip x into stereo buf at time t."""
    i = int(round(t * SR))
    if i >= buf.shape[0] or i + len(x) <= 0:
        return
    if x.ndim == 1:
        gain_l, gain_r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
        x = np.stack([x * gain_l * 1.414, x * gain_r * 1.414], 1)
    a, b = max(0, i), min(buf.shape[0], i + len(x))
    buf[a:b] += x[a - i:b - i] * gain


def env(n, a=0.005, r=0.1, sus=None):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4))
    if sus is None:
        e *= np.exp(-t / r)
    else:
        rel = np.clip((t - sus) / r, 0, 1)
        e *= 1 - rel
    return e


def saw(f, t, k=30):
    f = np.atleast_1d(f)
    ph = 2 * np.pi * np.cumsum(np.broadcast_to(f, t.shape)) / SR
    out = np.zeros_like(t)
    fmax = float(np.max(f))
    for h in range(1, k + 1):
        if h * fmax > SR / 2.2:
            break
        out += np.sin(h * ph) / h
    return out * 0.55


def square(f, t, k=15):
    ph = 2 * np.pi * f * t
    out = np.zeros_like(t)
    for h in range(1, 2 * k, 2):
        if h * f > SR / 2.2:
            break
        out += np.sin(h * ph) / h
    return out * 0.8


def tri(f, t):
    return 2 / np.pi * np.arcsin(np.sin(2 * np.pi * f * t))


def lp(x, fc, order=2):
    sos = signal.butter(order, min(fc, SR / 2.1), 'low', fs=SR, output='sos')
    return signal.sosfilt(sos, x, axis=0)


def hp(x, fc, order=2):
    sos = signal.butter(order, fc, 'high', fs=SR, output='sos')
    return signal.sosfilt(sos, x, axis=0)


def bp(x, f1, f2, order=2):
    sos = signal.butter(order, [f1, f2], 'band', fs=SR, output='sos')
    return signal.sosfilt(sos, x, axis=0)


def reverb(x, sec=2.6, wet=0.3, damp=4000):
    n = int(sec * SR)
    ir = rng.standard_normal((n, 2)) * np.exp(-np.arange(n) / SR * 6.9 / sec)[:, None]
    ir = lp(ir, damp)
    ir[: int(0.012 * SR)] = 0
    ir /= np.sqrt((ir ** 2).sum(0))
    if x.ndim == 1:
        x = np.stack([x, x], 1)
    y = np.stack([signal.fftconvolve(x[:, c], ir[:, c])[: len(x)] for c in range(2)], 1)
    return x * (1 - wet) + y * wet * 2.2


def midi(n):
    return 440 * 2 ** ((n - 69) / 12)


# ───────────────────────── score ─────────────────────────
def score(D, cue):
    """cue: dict of section times from the edit (s1..s6)."""
    n = int(D * SR)
    out = np.zeros((n, 2))
    T = tl(D)

    # Drone bed: D1 + A1 saws, low-passed, slow swell; fades into the reveal.
    dr = saw(midi(26), T) + 0.7 * saw(midi(33), T) + 0.4 * saw(midi(38) * 1.003, T)
    dark, bright = lp(dr, 180), lp(dr, 900)
    mix = np.clip((T - cue['s2']) / (cue['s4'] - cue['s2']), 0, 1)
    bed = dark * (1 - mix) + bright * mix
    g = np.clip(T / 3.0, 0, 1) * np.where(T < cue['s6'] - 0.2, 1, np.clip(1 - (T - cue['s6'] + 0.2) / 0.6, 0, 1))
    bed = bed * g * (0.5 + 0.2 * np.sin(2 * np.pi * 0.11 * T))
    out += np.stack([bed, bed], 1) * 0.16

    # Heartbeat sub (lub-dub) in the cold open.
    def thump(f0=55, d=0.35):
        t = tl(d)
        return np.sin(2 * np.pi * (f0 * t + 30 * (1 - np.exp(-t * 25)) / 25)) * np.exp(-t * 11)
    for tb in np.arange(0.9, cue['s2'] - 0.3, 0.86):
        place(out, thump(), tb, 0.55)
        place(out, thump(48, 0.3), tb + 0.2, 0.35)

    # Pulse ostinato at 120 BPM (8ths), from scene 2 until the reveal, filter opening with tension.
    step = 0.25  # one 8th note at 120 BPM
    pat = [50, 50, 53, 50, 57, 50, 52, 50]  # D F A C colour over D
    t0, t1 = cue['s2'], cue['s6'] - 0.5
    k = 0
    for tb in np.arange(t0, t1, step):
        p = (tb - t0) / (t1 - t0)
        note = pat[k % 8] - (12 if k % 16 >= 8 and p > 0.5 else 0) + (0 if tb < cue['s5'] else -2 if k % 32 >= 16 else 0)
        d = 0.22
        t = tl(d)
        x = saw(midi(note), t, 20) * env(len(t), 0.003, 0.09)
        x = lp(x, 500 + 3000 * p ** 1.4)
        lvl = 0.14 + 0.06 * p
        if cue['s5'] <= tb < cue['s6']:
            lvl *= 0.75
        place(out, x, tb, lvl, pan=-0.35 if k % 2 else 0.35)
        k += 1

    # Kick (quarters) from scene 3, toms on the shock section, hats from scene 4.
    def kick():
        t = tl(0.4)
        f = 45 + 90 * np.exp(-t * 30)
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9)
    def hat():
        t = tl(0.06)
        return hp(rng.standard_normal(len(t)), 7000) * np.exp(-t * 70)
    for tb in np.arange(cue['s3'], cue['s6'] - 0.5, 0.5):
        place(out, kick(), tb, 0.42 if tb < cue['s4'] else 0.5)
    for tb in np.arange(cue['s4'], cue['s6'] - 0.5, 0.25):
        place(out, hat(), tb + 0.125, 0.06, pan=0.4)

    # Bass on the section downbeats.
    for t0b, note in [(cue['s3'], 38), (cue['s4'], 38), (cue['s4'] + 4, 34), (cue['s4'] + 8, 36), (cue['s5'], 34), (cue['s5'] + 5, 36)]:
        t = tl(3.9)
        x = lp(saw(midi(note - 12), t, 12), 300) * env(len(t), 0.02, 0.6, sus=3.2)
        place(out, x, t0b, 0.22)

    # Pad progression under scene 5 (Bb – C – Dm).
    for t0p, chord in [(cue['s5'], [46, 50, 53, 57]), (cue['s5'] + 3.4, [48, 52, 55, 59]), (cue['s5'] + 6.8, [50, 53, 57, 62])]:
        d = 3.6
        t = tl(d)
        x = sum(saw(midi(m) * (1 + 0.002 * j), t, 14) for j, m in enumerate(chord))
        x = lp(x, 1400) * env(len(t), 0.6, 0.6, sus=3.0)
        place(out, x, t0p, 0.05)

    # Risers into each scene + into the reveal.
    def riser(d):
        t = tl(d)
        x = bp(rng.standard_normal(len(t)), 300, 6000) * (t / d) ** 2.2
        s = saw(midi(50) * 2 ** (t / d), t, 10) * (t / d) ** 3 * 0.3
        return lp(x * 0.5 + s, 8000)
    for c, d, gn in [('s2', 0.9, 0.12), ('s3', 0.8, 0.10), ('s4', 1.0, 0.12), ('s5', 0.8, 0.09), ('s6', 1.8, 0.22)]:
        place(out, riser(d), cue[c] - d, gn)

    # Reveal: warm D major (add9) bloom + bell motif, final chord.
    s6 = cue['s6']
    d = D - s6
    t = tl(d)
    chord = [38, 45, 50, 54, 57, 64]
    pad = sum(saw(midi(m) * (1 + 0.0015 * ((-1) ** j)), t, 16) for j, m in enumerate(chord))
    pad = lp(pad, 2400) * np.clip(t / 1.2, 0, 1) * np.clip((d - t) / 2.5, 0, 1)
    place(out, pad, s6, 0.06)
    sub = np.sin(2 * np.pi * midi(26) * t) * np.clip(t / 0.5, 0, 1) * np.clip((d - t) / 3, 0, 1)
    place(out, sub, s6, 0.14)
    bell_notes = [74, 78, 81, 86, 81, 78, 74, 69]
    for i, m in enumerate(bell_notes):
        tb = s6 + 0.6 + i * 0.5
        tt = tl(1.6)
        x = (np.sin(2 * np.pi * midi(m) * tt) + 0.25 * np.sin(2 * np.pi * midi(m) * 2.76 * tt) * np.exp(-tt * 6)) * np.exp(-tt * 2.2)
        place(out, x, tb, 0.05, pan=(-0.3 if i % 2 else 0.3))
    # end-card chord
    tt = tl(D - cue['end'])
    x = sum(np.sin(2 * np.pi * midi(m) * tt) for m in [62, 66, 69, 74]) * np.exp(-tt * 0.8) * np.clip((len(tt) / SR - tt) / 1.5, 0, 1)
    place(out, x, cue['end'], 0.05)
    return reverb(out, 2.8, 0.28)


# ───────────────────────── app sounds (re-rendered from tapped Web Audio events) ─────────────────────────
def app_sound(ev):
    ty, f = ev.get('type'), ev.get('f') or 0
    if ev['kind'] == 'noise':  # defib shock body
        t = tl(0.35)
        return lp(rng.standard_normal(len(t)) * np.exp(-t / (0.35 * 0.18)), 900) * 0.35
    if ty == 'sawtooth':  # charge whine 380 → 1900 Hz over the charge time
        d = max(0.5, min(3.0, ev.get('dur') or 2.4))
        t = tl(d)
        fr = 380 * (1900 / 380) ** (t / max(d - 0.05, 0.1))
        e = np.clip(t / 0.1, 0, 1) * np.clip((d - t) / 0.05, 0, 1)
        return saw(fr, t, 12) * e * 0.018 * 1.6
    if ty == 'square':  # alarm / ready
        d = 0.15 if f < 1200 else 0.12
        t = tl(d + 0.03)
        return square(f, t) * env(len(t), 0.006, d / 5) * (0.035 if f < 1200 else 0.03)
    if ty == 'triangle':
        t = tl(0.25)
        return tri(f, t) * env(len(t), 0.006, 0.05) * 0.04
    if ty == 'sine':
        if f < 100:  # shock thump
            t = tl(0.33)
            return np.sin(2 * np.pi * f * t) * env(len(t), 0.006, 0.06) * 0.18
        t = tl(0.115)  # pulse-ox / QRS beep
        return np.sin(2 * np.pi * f * t) * env(len(t), 0.006, 0.085 / 5) * 0.045
    return np.zeros(1)


def foley_tap():
    t = tl(0.05)
    return (bp(rng.standard_normal(len(t)), 1800, 6000) * np.exp(-t * 160) + np.sin(2 * np.pi * 2400 * t) * np.exp(-t * 120) * 0.3)


def whoosh(d=0.6):
    t = tl(d)
    x = rng.standard_normal(len(t))
    e = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
    lo = bp(x, 200, 1200) * e
    hi = bp(x, 1500, 7000) * e * np.clip(t / d * 1.4, 0, 1)
    return lo * 0.6 + hi * 0.4


def impact():
    t = tl(2.2)
    f = 38 + 60 * np.exp(-t * 18)
    boom = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 2.4)
    crack = lp(rng.standard_normal(len(t)), 2500) * np.exp(-t * 14) * 0.5
    return boom + crack


def read_wav(p):
    w = wave.open(str(p))
    x = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float64) / 32768
    sr = w.getframerate()
    if w.getnchannels() == 2:
        x = x.reshape(-1, 2).mean(1)
    return signal.resample_poly(x, SR, sr) if sr != SR else x


def voice_chain(x):
    """Gentle broadcast chain for the TTS narration: HPF, presence, warmth, light compression."""
    x = hp(x, 70)
    x = x + 0.25 * bp(x, 2500, 5000) + 0.15 * lp(x, 220)
    # simple RMS compressor
    e = np.sqrt(signal.lfilter([0.002], [1, -0.998], x ** 2) + 1e-9)
    thr = 0.08
    g = np.where(e > thr, (thr / e) ** 0.45, 1.0)
    return x * g


def main():
    tlj = json.loads(Path(sys.argv[1]).read_text())
    outp = Path(sys.argv[2])
    D = tlj['duration']
    cue = tlj['cues']
    n = int(D * SR)

    music = score(D, cue)

    sfx = np.zeros((n, 2))
    for ev in tlj['app_sounds']:
        x = app_sound(ev)
        place(sfx, x, ev['t'], 1.0 * ev.get('gain', 1.0), pan=ev.get('pan', 0.0))
    for t in tlj['taps']:
        place(sfx, foley_tap(), t, 0.05)
    for t in tlj['whooshes']:
        place(sfx, whoosh(0.55), t - 0.4, 0.18)
    for t in tlj['impacts']:
        place(sfx, impact(), t, 0.32)
    for t in tlj['shocks']:  # weight under the engine's own shock cue
        place(sfx, impact(), t, 0.22)
    # room tone: low, filtered ventilation hum (not an alarm bed)
    T = tl(D)
    room = lp(rng.standard_normal((n, 2)), 350) * 0.02 + np.sin(2 * np.pi * 60 * T)[:, None] * 0.0015
    room *= np.clip((cue['s6'] - T) / 1.0, 0.0, 1.0)[:, None]
    sfx += room
    sfx = reverb(sfx, 1.2, 0.18, 6000)

    vo = np.zeros(n)
    for line in json.loads((ROOT / tlj.get('vo_lines', 'scripts/vo_lines.json')).read_text()):
        x = voice_chain(read_wav(ROOT / 'audio' / 'vo' / f"{line['id']}.wav"))
        i = int(line['start'] * SR)
        vo[i:i + len(x)] += x[: n - i]
    vo = vo / (np.abs(vo).max() + 1e-9) * 0.7
    vo_st = reverb(vo, 0.7, 0.06, 7000)

    # Duck music (and a little SFX) under the narration.
    venv = np.sqrt(signal.lfilter([0.0006], [1, -0.9994], vo ** 2))
    k = int(0.25 * SR)  # centred moving average via cumulative sum (np.convolve is O(N·k) here)
    c = np.concatenate([[0], np.cumsum(np.pad(venv, (k // 2, k - k // 2)))])
    venv = (c[k:] - c[:-k])[: len(venv)] / k
    venv = np.clip(venv / (venv.max() + 1e-9) * 2.5, 0, 1)
    duck = 1 - 0.68 * venv

    mix = music * duck[:, None] * 0.30 + sfx * (1 - 0.3 * venv)[:, None] * 0.8 + vo_st * 1.0
    # tail fade + safety limiter
    fade = np.clip((D - T) / 0.8, 0, 1)
    mix *= fade[:, None]
    peak = np.abs(mix).max()
    mix = np.tanh(mix / peak * 1.2) * 0.89
    outp.parent.mkdir(parents=True, exist_ok=True)
    pcm = (mix * 32767).astype(np.int16)
    w = wave.open(str(outp), 'wb')
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
    w.close()
    print('wrote', outp, f'{D:.2f}s')


if __name__ == '__main__':
    main()
