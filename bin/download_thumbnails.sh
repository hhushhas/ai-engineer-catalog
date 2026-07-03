#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JOBS="${JOBS:-12}"

mkdir -p "$ROOT/thumbnails"

node -e "const fs=require('fs'); for (const v of JSON.parse(fs.readFileSync('$ROOT/data/videos.json','utf8'))) if (v.thumbnail) console.log(v.id + '\t' + v.thumbnail)" \
  | while IFS=$'\t' read -r id url; do
      [[ -s "$ROOT/thumbnails/$id.jpg" && "${FORCE:-0}" != "1" ]] && continue
      printf '%s\t%s\n' "$id" "$url"
    done \
  | xargs -P "$JOBS" -n 2 sh -c '
      curl -fsSL "$2" -o "$0/thumbnails/$1.jpg" 2>/dev/null \
        || curl -fsSL "https://i.ytimg.com/vi/$1/hqdefault.jpg" -o "$0/thumbnails/$1.jpg" 2>/dev/null \
        || true
    ' "$ROOT"

node "$ROOT/bin/generate_catalog.mjs"
