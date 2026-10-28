#!/usr/bin/env bash
# Reproducible build for the SmartCare app promo (vertical 1080×1920 social cut).
#   ./build.sh                          # capture → voice → compose → audio → mux
#   STEPS="compose audio mux" ./build.sh   # re-edit without re-capturing
#   node scripts/record.js mega ecg     # re-shoot single scenes
set -euo pipefail
cd "$(dirname "$0")"
REPO=$(cd ../.. && pwd)
STEPS=${STEPS:-"capture voice compose audio mux"}
PORT=8765
export BASE="http://localhost:$PORT/"
has() { [[ " $STEPS " == *" $1 "* ]]; }

# Static server for the untouched app
if ! curl -s -o /dev/null "${BASE}index.html"; then
  (cd "$REPO" && python3 -m http.server $PORT >/dev/null 2>&1 &)
  sleep 1
fi

if has capture; then node scripts/record.js; fi

# Narration (Piper TTS, en_US-joe-medium, CC0 dataset). Shares the voice download with the Megacode promo.
VOICE=${VOICE:-$REPO/promo/megacode/assets/voice/en_US-joe-medium.onnx}
if has voice; then
  if [ ! -f "$VOICE" ]; then
    mkdir -p "$(dirname "$VOICE")"
    base=https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/joe/medium
    curl -sSL -o "$VOICE" "$base/en_US-joe-medium.onnx"
    curl -sSL -o "$VOICE.json" "$base/en_US-joe-medium.onnx.json"
  fi
  mkdir -p audio/vo
  python3 - "$VOICE" <<'PY'
import json, subprocess, sys
for l in json.load(open('scripts/script.json')):
    subprocess.run([sys.executable, '-m', 'piper', '-m', sys.argv[1], '--length-scale', '0.98', '--sentence-silence', '0.2',
                    '-f', f"audio/vo/{l['id']}.wav"], input=l.get('say', l['vo']).encode(), check=True)
PY
fi

mkdir -p build output
if has compose; then python3 scripts/compose.py; fi
if has audio; then python3 scripts/audio.py build/timeline.json build/mix.wav; fi
if has mux; then
  ffmpeg -y -loglevel error -i build/video.mp4 -i build/mix.wav \
    -af "loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000" \
    -map 0:v -map 1:a -c:v libx264 -preset slow -crf 18 -maxrate 12M -bufsize 16M -pix_fmt yuv420p -profile:v high \
    -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart output/smartcare-app-promo-vertical.mp4
  echo "→ output/smartcare-app-promo-vertical.mp4"
fi
