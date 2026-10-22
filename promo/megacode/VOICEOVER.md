# Voiceover — final script with timings

Narration is produced with **Piper TTS** using the `en_US-joe-medium` voice. The voice's model card
lists its dataset license as **CC0**, so it is cleared for commercial use. Settings: length-scale
1.07, sentence silence 0.28 s. The rendered lines are in `audio/vo/*.wav`. Timings live in
`scripts/vo_lines.json`, which is the single source of truth for both the mix and this table.

The mix ducks the music by about 8 dB under each line and adds a light broadcast chain (HPF,
presence lift, gentle compression).

| ID | In | Out | Scene | Line |
|----|----|-----|-------|------|
| vo1 | 0:00.9 | 0:03.7 | 1 · The call | "In resuscitation, every second matters." |
| vo2 | 0:05.4 | 0:07.9 | 2 · The challenge | "Recognizing the rhythm is only the beginning." |
| vo3 | 0:12.4 | 0:14.8 | 3 · The decision | "Can you make the right call when the pressure rises?" |
| vo4 | 0:21.4 | 0:27.5 | 4 · The intervention | "Step into the scenario. Interpret the rhythm. Make your decisions, and follow the consequences." |
| vo5 | 0:33.6 | 0:38.7 | 5 · The next decision | "Every choice gets instant feedback. Every decision is a learning opportunity." |
| vo6 | 0:43.6 | 0:46.6 | 6 · Reveal | "Experience Megacode, inside SmartCare." |
| vo7 | 0:47.4 | 0:52.4 | 6 · End card | "Practice your thinking. Challenge your knowledge. Prepare for the moments that matter." |

## Changes from the brief's draft

* "Assess the patient." was dropped from vo4. Quick Code hands the assessment to the team, and the
  line didn't fit the 12-second intervention beat.
* vo5 ("Every choice gets instant feedback") is new. It describes what Quick Code actually does:
  every pick returns the engine's ✅/⛔ explanation, shown on screen in the same scene.
* "the right decision" became "the right call" to match the on-screen "Make the call."

## Replacing the TTS with a human read

Record each line as a mono WAV at 22.05–48 kHz, name it `audio/vo/<id>.wav`, keep roughly the same
length (±0.4 s), and re-run `make audio mux` (see README). If a read runs long, nudge `start` in
`scripts/vo_lines.json`.
