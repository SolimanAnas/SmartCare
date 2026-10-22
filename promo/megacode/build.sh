#!/usr/bin/env bash
# Reproducible build for the SmartCare Megacode promo.
#   ./build.sh            # everything: capture → compose → audio → mux → poster → QA
#   ./build.sh land       # landscape master only (skips capture if frames exist)
#   STEPS="compose audio mux" ./build.sh land
set -euo pipefail
cd "$(dirname "$0")"
HERE=$PWD
REPO=$(cd ../.. && pwd)
LAYOUTS=${1:-"land vert"}
STEPS=${STEPS:-"capture compose audio mux poster qa"}
PORT=8765
export MEGACODE_URL="http://localhost:$PORT/pages/megacode.html"

has() { [[ " $STEPS " == *" $1 "* ]]; }

[ -d node_modules/playwright-core ] || npm install --no-audit --no-fund

# Static server for the untouched app
if ! curl -s -o /dev/null "http://localhost:$PORT/pages/megacode.html"; then
  (cd "$REPO" && python3 -m http.server $PORT >/dev/null 2>&1 &)
  sleep 1
fi

# Narration (Piper TTS, CC0 voice). Downloads the voice once.
VOICE=${VOICE:-$HERE/assets/voice/en_US-joe-medium.onnx}
if [ ! -f audio/vo/vo1.wav ]; then
  mkdir -p "$(dirname "$VOICE")" audio/vo
  if [ ! -f "$VOICE" ]; then
    base=https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/joe/medium
    curl -sSL -o "$VOICE" "$base/en_US-joe-medium.onnx"
    curl -sSL -o "$VOICE.json" "$base/en_US-joe-medium.onnx.json"
  fi
  python3 - "$VOICE" <<'EOF'
import json, subprocess, sys
for l in json.load(open('scripts/vo_lines.json')):
    subprocess.run([sys.executable, '-m', 'piper', '-m', sys.argv[1], '--length-scale', '1.07', '--sentence-silence', '0.28',
                    '-f', f"audio/vo/{l['id']}.wav"], input=l['text'].encode(), check=True)
EOF
fi

mkdir -p build output
for L in $LAYOUTS; do
  if has capture && [ ! -f "capture/$L/manifest.json" ]; then node scripts/record.js "$L"; fi
  if has compose; then python3 scripts/compose.py "$L"; fi
  if has audio; then python3 scripts/audio.py "build/timeline_$L.json" "build/mix_$L.wav"; fi
  if has mux; then
    name=$([ "$L" = land ] && echo smartcare-megacode-hero || echo smartcare-megacode-vertical)
    # 2-pass delivery encode (~8 Mbit/s keeps the grain without 300 MB files)
    BR=$([ "$L" = land ] && echo 8M || echo 7M)
    ffmpeg -y -loglevel error -i "build/video_$L.mp4" -c:v libx264 -preset slow -b:v $BR -maxrate 12M -bufsize 16M \
      -pix_fmt yuv420p -profile:v high -pass 1 -passlogfile "build/x264_$L" -an -f mp4 /dev/null
    ffmpeg -y -loglevel error -i "build/video_$L.mp4" -i "build/mix_$L.wav" \
      -af "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000" \
      -map 0:v -map 1:a -c:v libx264 -preset slow -b:v $BR -maxrate 12M -bufsize 16M -pix_fmt yuv420p -profile:v high \
      -pass 2 -passlogfile "build/x264_$L" -c:a aac -b:a 256k -ar 48000 -shortest -movflags +faststart \
      "output/$name.mp4"
    echo "→ output/$name.mp4"
  fi
done
if has poster; then python3 scripts/poster.py; fi
if has qa; then python3 scripts/qa.py; fi
