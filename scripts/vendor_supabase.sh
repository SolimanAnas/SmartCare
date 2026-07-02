#!/usr/bin/env bash
# Regenerate vendor/supabase-js-<version>.mjs — a self-contained ESM bundle
# of @supabase/supabase-js, so the SDK is under service-worker control
# instead of loaded from a CDN (see docs/upgrades.md "Offline & PWA #3").
#
# Usage: SUPABASE_JS_VERSION=2.110.0 bash scripts/vendor_supabase.sh
# Requires npm + network access to registry.npmjs.org.
#
# After running: update pages/supabase-client.js's SDK_URL to the new
# filename, delete the old vendor/supabase-js-*.mjs, and re-run
# `python3 scripts/build_precache.py` to pick up the new file.
set -euo pipefail

VERSION="${SUPABASE_JS_VERSION:?Set SUPABASE_JS_VERSION, e.g. 2.110.0}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/vendor/supabase-js-$VERSION.mjs"
WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

cd "$WORKDIR"
npm init -y >/dev/null
npm install --no-save "esbuild" "@supabase/supabase-js@$VERSION" >/dev/null
echo "export * from '@supabase/supabase-js';" > entry.mjs

npx esbuild entry.mjs \
  --bundle --format=esm --minify \
  --platform=browser --target=es2020 \
  --outfile="$OUT.tmp"

{
  echo "// Vendored @supabase/supabase-js@$VERSION — bundled with esbuild"
  echo "// (--bundle --format=esm --minify --platform=browser --target=es2020)."
  echo "// Regenerate with: SUPABASE_JS_VERSION=$VERSION bash scripts/vendor_supabase.sh"
  echo "// See docs/upgrades.md \"Offline & PWA #3\" for why this is vendored"
  echo "// instead of imported from a CDN."
  cat "$OUT.tmp"
} > "$OUT"
rm "$OUT.tmp"

echo "wrote $(realpath --relative-to="$ROOT" "$OUT") ($(wc -c < "$OUT") bytes)"
