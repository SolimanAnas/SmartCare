# SmartCare app promo (vertical social cut)

A ~75-second vertical promo of the whole SmartCare app for Instagram/Facebook Reels, YouTube
Shorts and TikTok. Every phone screen is a **genuine capture of the running app**: the frames come
from `record.js` driving the real pages, and none of the UI is redrawn.

| Deliverable | File |
|---|---|
| Vertical video, 1080×1920, 30 fps, H.264 + AAC, −14 LUFS | `output/smartcare-app-promo-vertical.mp4` |
| Cover / thumbnail frame | `output/smartcare-app-promo-cover.jpg` |
| Script: headlines, captions and narration | `scripts/script.json` |

## Running order

| # | Scene | Real app screen(s) | Feature mentioned |
|---|---|---|---|
| 1 | Home | `index.html` | Clinical learning app for EMS & nursing |
| 2 | Course library | `pages/courses.html` | 14 courses: BLS, ACLS, ACLS Megacode, ITLS, BDLS, MCI, PEPP, PPET, PALS, EMPACT, Medical, ECG Course, ECG Simulator, Prometric |
| 3 | Study modes | `chapters/c3.html` summary → cards → quiz → scenario | Summaries, flashcards, quizzes, clinical scenarios |
| 4 | Search | `index.html` search | Search across every chapter |
| 5 | ACLS Megacode | `pages/megacode.html` scenario 7, Quick Code | 12 live-monitor megacode scenarios |
| 6 | ECG | `pages/ecg.html` (library → VT → 12-lead), `pages/ECG-study.html` | ECG simulator (68 rhythms, 12-lead), ECG course |
| 7 | Respiratory patterns | `pages/respiratory-patterns.html` (Cheyne–Stokes) | Animated breathing patterns |
| 8 | Prometric exam | `src/prometric/exam.html` (modes → question → explanation → results) | 2,749 Paramedic/EMT questions, score by topic |
| 9 | Study planner | `pages/prometric-planner.html` | Day-by-day plan to the exam date |
| 10 | EMS tools & MCI drills | `pages/ems-tools.html` (START triage), `courses/mci/index.html#c06` (drill) | GCS, APGAR, burns, RTS, START, METHANE, O₂; timed triage drills |
| 11 | Drug calculator | `pages/drug-calculator.html` (epinephrine, 1–3 years) | Weight-based dosing by age group |
| 12 | AHA algorithms | `pages/aha.html` (adult cardiac arrest) | 17 AHA algorithms |
| 13 | Themes & offline | `index.html` theme toggle | 5 themes, works offline |
| 14 | End card | — | Get it on Google Play + web link + study-aid disclaimer |

The figures in the headlines come from the app itself: "All 14" on the course page, "12 AHA
scenarios" in Megacode, "68 of 68" in the ECG rhythm library, "2,749 Questions" on the exam start
screen, and 17 cards on the AHA page. That the app works offline was verified for the Play listing
(see `marketing/google-play/README.md`).

## How it's made

```
real pages ──(Playwright, frozen virtual clock, 412×800 @2.5x, 30 fps)──▶ capture/<scene>/f*.jpg + seg.json
scripts/compose.py ──(phone frame, headlines, captions, tap rings, cuts)──▶ build/video.mp4 + timeline.json
scripts/audio.py   ──(original score, UI foley, ducked narration)────────▶ build/mix.wav
ffmpeg             ──(loudnorm −14 LUFS for social, AAC, faststart)───────▶ output/*.mp4
```

* **`record.js` and `rec.js`** step the page clock one video frame at a time, so the ECG sweep,
  monitor, timers and animations play at true speed. `Math.random` is seeded, the date is fixed,
  and the app runs signed out ("Guest"). Right answers in quizzes and drills come from a dry run
  of the same seeded session, so every tap in the film is a correct answer.
* **Captions are burned in**, because social feeds autoplay muted. The caption is the narration
  word for word. `script.json` keeps a separate `say` spelling for the voice only, so acronyms
  are read out letter by letter (A-C-L-S, G-C-S, A-H-A).
* **Layout:** the headline, caption and phone sit high in the frame, inside the area that Reels,
  Shorts and TikTok leave clear of their own buttons.
* **Narration:** Piper TTS, `en_US-joe-medium` voice. Its model card lists the dataset as CC0.
* **Music:** an original synthesized D-major track (`audio.py`). No samples or licensed music.
* **Google Play button:** the end card uses a plain "GET IT ON Google Play" button. It is not
  Google's official badge, which is trademarked artwork with its own usage rules.

## Rebuild

Needs Node 18+ with Playwright, Python 3.10+ with `numpy pillow scipy piper-tts`, and ffmpeg.

```bash
cd promo/app
./build.sh                              # everything (capture takes ~15 min, compose ~15 min)
STEPS="compose audio mux" ./build.sh    # re-edit only
node scripts/record.js ecg              # re-shoot one scene
python3 scripts/compose.py --stills 12 40   # PNG stills → build/stills/
```

To change the wording, edit `scripts/script.json` and run `STEPS="voice compose audio mux" ./build.sh`.
Scene lengths follow the narration automatically.
