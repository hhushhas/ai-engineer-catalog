#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JOBS="${JOBS:-6}"

mkdir -p "$ROOT/summaries"

node -e "const fs=require('fs'), path=require('path'); for (const v of JSON.parse(fs.readFileSync('$ROOT/data/videos.json','utf8'))) { const p=path.join('$ROOT','transcripts','text',v.id+'.txt'); if (fs.existsSync(p) && fs.statSync(p).size > 50) console.log(v.id); }" \
  | while read -r id; do
      if [[ -s "$ROOT/summaries/$id.md" && "${FORCE:-0}" != "1" ]]; then
        continue
      fi
      printf '%s\n' "$id"
    done \
  | xargs -n 1 -P "$JOBS" "$ROOT/bin/summarize.sh"

node "$ROOT/bin/update_status.mjs"
