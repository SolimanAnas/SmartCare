#!/usr/bin/env python3
"""Original score + UI foley + narration mix for the SmartCare app promo.

Everything is synthesized here (no samples, no third-party music). The DSP helpers are shared with
the Megacode promo (promo/megacode/scripts/audio.py).
  * score     — bright D-major groove (D – A – Bm – G), pluck arpeggio, kick/hat, pads; it drops
                out under the end card and resolves on a final chord
  * foley     — a soft tick on every captured tap, a whoosh on every scene cut
  * narration — Piper TTS lines (audio/vo/<scene>.wav), music ducked underneath

Usage: python3 scripts/audio.py build/timeline.json build/mix.wav
"""
import json
import sys
import wave
from pathlib import Path

import numpy as np
from scipy import signal

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT.parent / 'megacode' / 'scripts'))
from audio import SR, bp, env, foley_tap, hp, lp, midi, place, read_wav, reverb, saw, tl, voice_chain, whoosh  # noqa: E402

rng = np.random.default_rng(11)
BPM = 112
BEAT = 60 / BPM
CHORDS = [(50, [50, 54, 57, 62]), (45, [49, 52, 57, 61]), (47, [50, 54, 59, 62]), (43, [50, 55, 59, 62])]  # D A Bm G


def score(D, end):
    out = np.zeros((int(D * SR), 2))
    bar = 4 * BEAT
    nbars = int(np.ceil(end / bar))

    def kick():
        t = tl(0.35)
        return np.sin(2 * np.pi * np.cumsum(48 + 80 * np.exp(-t * 32)) / SR) * np.exp(-t * 10)

    def hat():
        t = tl(0.05)
        return hp(rng.standard_normal(len(t)), 8000) * np.exp(-t * 80)

    def clap():
        t = tl(0.2)
        return bp(rng.standard_normal(len(t)), 900, 4000) * np.exp(-t * 22)

    for b in range(nbars):
        t0 = b * bar
        root, ch = CHORDS[b % 4]
        intro = b < 2  # first two bars: pads + pluck only
        # pad
        t = tl(bar + 0.3)
        pad = sum(saw(midi(m) * (1 + 0.002 * (-1) ** j), t, 12) for j, m in enumerate(ch))
        pad = lp(pad, 1500) * env(len(t), 0.25, 0.3, sus=bar)
        place(out, pad, t0, 0.035)
        # bass (8ths, root)
        if not intro:
            for i in range(8):
                tt = tl(BEAT / 2 * 0.9)
                x = lp(saw(midi(root - 12), tt, 10), 380) * env(len(tt), 0.004, 0.12)
                place(out, x, t0 + i * BEAT / 2, 0.16)
        # pluck arpeggio (16ths)
        arp = [ch[0] + 12, ch[1] + 12, ch[2] + 12, ch[3] + 12, ch[2] + 12, ch[1] + 12]
        for i in range(16):
            tt = tl(0.22)
            m = arp[i % len(arp)]
            x = (np.sin(2 * np.pi * midi(m) * tt) + 0.3 * np.sin(4 * np.pi * midi(m) * tt)) * np.exp(-tt * 18)
            place(out, x, t0 + i * BEAT / 4, 0.05 if not intro else 0.04, pan=0.35 if i % 2 else -0.35)
        # drums
        if not intro:
            for i in range(4):
                place(out, kick(), t0 + i * BEAT, 0.42)
                place(out, hat(), t0 + i * BEAT + BEAT / 2, 0.07, pan=0.3)
            for i in (1, 3):
                place(out, clap(), t0 + i * BEAT, 0.08)
    # fade the groove out into the end card, then a warm final chord + bell
    T = tl(D)
    out *= np.clip((end + 0.4 - T) / 0.8, 0, 1)[:, None]
    tt = tl(D - end)
    chord = sum(saw(midi(m), tt, 14) for m in [38, 50, 54, 57, 62, 66])
    chord = lp(chord, 2200) * np.clip(tt / 0.4, 0, 1) * np.exp(-tt * 0.5)
    place(out, chord, end, 0.05)
    for i, m in enumerate([74, 78, 81, 86]):
        x = np.sin(2 * np.pi * midi(m) * tt[: SR * 2]) * np.exp(-tt[: SR * 2] * 2.5)
        place(out, x, end + 0.3 + i * 0.16, 0.05, pan=0.3 if i % 2 else -0.3)
    return reverb(out, 2.0, 0.22)


def main():
    tlj = json.loads(Path(sys.argv[1]).read_text())
    outp = Path(sys.argv[2])
    D = tlj['duration']
    n = int(D * SR)
    music = score(D, tlj['end'])

    sfx = np.zeros((n, 2))
    for t in tlj['taps']:
        place(sfx, foley_tap(), t, 0.06)
    for t in tlj['whooshes']:
        place(sfx, whoosh(0.5), t - 0.3, 0.10)
    sfx = reverb(sfx, 0.8, 0.12, 6000)

    vo = np.zeros(n)
    for line in tlj['vo']:
        x = voice_chain(read_wav(ROOT / 'audio' / 'vo' / f"{line['id']}.wav"))
        i = int(line['start'] * SR)
        vo[i:i + len(x)] += x[: max(0, n - i)]
    vo = vo / (np.abs(vo).max() + 1e-9) * 0.7
    vo_st = reverb(vo, 0.6, 0.05, 7000)

    venv = np.sqrt(signal.lfilter([0.0006], [1, -0.9994], vo ** 2))
    k = int(0.25 * SR)
    c = np.concatenate([[0], np.cumsum(np.pad(venv, (k // 2, k - k // 2)))])
    venv = (c[k:] - c[:-k])[: len(venv)] / k
    venv = np.clip(venv / (venv.max() + 1e-9) * 2.5, 0, 1)
    duck = 1 - 0.7 * venv

    mix = music * duck[:, None] * 0.4 + sfx * 0.8 + vo_st
    T = tl(D)
    mix *= np.clip((D - T) / 0.8, 0, 1)[:, None] * np.clip(T / 0.2, 0, 1)[:, None]
    mix = np.tanh(mix / np.abs(mix).max() * 1.2) * 0.89
    outp.parent.mkdir(parents=True, exist_ok=True)
    w = wave.open(str(outp), 'wb')
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((mix * 32767).astype(np.int16).tobytes())
    w.close()
    print('wrote', outp, f'{D:.2f}s')


if __name__ == '__main__':
    main()
