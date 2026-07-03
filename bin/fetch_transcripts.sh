#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JOBS="${JOBS:-6}"

if [[ ! -f "$ROOT/data/videos.json" ]]; then
  "$ROOT/bin/collect_manifest.sh"
fi

mkdir -p "$ROOT/logs"

node -e "const fs=require('fs'); for (const v of JSON.parse(fs.readFileSync('$ROOT/data/videos.json','utf8'))) console.log(v.id)" \
  | xargs -n 1 -P "$JOBS" "$ROOT/bin/fetch_one_transcript.sh"

node "$ROOT/bin/update_status.mjs"

