# SmartCare Megacode — promo film

**"The Rhythm Changes. Your Decisions Matter."** A 55-second commercial for the Megacode simulator
(`pages/megacode.html`). It is built only from genuine captures of the running engine, with no edits
to the app itself.

| Deliverable | File |
|---|---|
| Landscape master, 1920×1080, 30 fps, H.264 + AAC, 55 s | `output/smartcare-megacode-hero.mp4` |
| Vertical cut, 1080×1920, for Reels, Shorts and TikTok | `output/smartcare-megacode-vertical.mp4` |
| Poster, 2160×2700 (4:5) | `output/smartcare-megacode-poster.png` |
| QA report and contact sheets | `output/QA_REPORT.md`, `output/*_contact.jpg` |
| Storyboard and clinical notes | `STORYBOARD.md` |
| Voiceover script with timings | `VOICEOVER.md` (source: `scripts/vo_lines.json`) |

## How it is made

```
pages/megacode.html  ──(Playwright, frozen virtual clock, 30 fps)──▶  capture/<layout>/<segment>/f*.jpg + manifest.json
                                                                       │  marks · tap positions · Web Audio events
scripts/compose.py   ──(edit decision list, PIL compositing)──────────▶  build/video_<layout>.mp4 + timeline_<layout>.json
scripts/audio.py     ──(original score + app cues + foley + VO mix)──▶  build/mix_<layout>.wav
ffmpeg               ──(loudnorm −16 LUFS, AAC 256k, faststart)───────▶  output/*.mp4
```

* **`scripts/record.js`** plays *Megacode 7 · Crescendo Angina* in **Quick Code** mode, picking each
  Team-Leader call by its on-screen text. The one deliberately wrong pick (atropine in PEA) shows
  the engine's corrective feedback.
  * `Math.random` is seeded, and Playwright's clock is installed and paused. The page only advances
    when the script steps it by exactly one video frame, so waveforms, timers, the defibrillator
    charge and the toasts all play at true speed in the video.
  * The engine's Web Audio calls (QRS beeps, alarm, charge whine, shock, ready tone) are tapped
    without changing any audio. `audio.py` re-renders them so they land on the exact frames where
    the app produced them.
  * `ONLY=<segment> node scripts/record.js land` replays the identical run and re-shoots just one
    segment. This was used once to re-take the debrief opening on its score.
* **`scripts/compose.py`** holds the edit: shots, camera moves, titles, macro cutaways and tap rings.
  * Tap rings follow the tapped button by finding the engine's own green or red highlight.
  * The cold open and the reveal are stylised motion graphics built around real frames.
  * There is no live-action footage and nothing is generated: no ECG, UI or clinical data was drawn.
* **`scripts/audio.py`** synthesises an original D-minor score that resolves to D major at the
  reveal. It adds the app cues and foley, ducks under the narration, and applies a safety limiter.
* **Narration**: Piper TTS, `en_US-joe-medium` voice. Its model card lists the dataset as **CC0**.

## Rebuild

Needs Node 18+, Python 3.10+ with `numpy pillow scipy piper-tts`, ffmpeg, and a Chromium.
`CHROME=/path/to/chrome` overrides the default `/opt/pw-browsers/...` path.

```bash
cd promo/megacode
./build.sh                       # capture → compose → audio → mux → poster → QA, both layouts
./build.sh land                  # landscape only
STEPS="compose audio mux qa" ./build.sh land   # re-edit without re-capturing
python3 scripts/compose.py land --stills 8.5 22.3   # QA stills at given seconds → build/stills_land/
```

Capture takes about 20 minutes per layout (it screenshots at 2–3× device pixel ratio), and compose
about 10 minutes. `capture/`, `build/`, `node_modules/` and the downloaded voice are git-ignored
and regenerable.

## Notes and open items

* **Google Play badge.** The end card and poster use a plain "GET IT ON GOOGLE PLAY" pill and the
  real store URL. Google's official badge is trademarked artwork with usage rules, so it is not
  redrawn here. To use it, download the badge from Google's badge generator into `assets/` and swap
  it in, in `end_card()` (`compose.py`) and in `poster.py`.
* **Voice.** The TTS read is production-clean but synthetic. `VOICEOVER.md` explains how to drop in
  a human read.
* **Atmosphere.** The resuscitation-bay look (bokeh, alarm light, monitor in perspective) is
  motion graphics, not photography. Live-action plates can replace `render_open()` without
  touching the rest of the edit.
