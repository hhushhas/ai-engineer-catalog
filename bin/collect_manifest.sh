#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHANNEL_URL="${CHANNEL_URL:-https://www.youtube.com/@aiDotEngineer}"
JOBS="${JOBS:-8}"

mkdir -p "$ROOT/data" "$ROOT/data/playlist_entries" "$ROOT/logs" "$ROOT/scratchpad"

{
  printf '# AI Engineer Catalog Session Log\n\n'
  printf '%s\n' "- $(date '+%Y-%m-%d %H:%M:%S %Z'): collecting channel and playlist manifests from $CHANNEL_URL"
} >> "$ROOT/scratchpad/ai-engineer-session-log-$(date '+%Y-%m-%d').md"

yt-dlp --flat-playlist --dump-json "$CHANNEL_URL/videos" > "$ROOT/data/videos.raw.jsonl"
yt-dlp --flat-playlist --dump-json "$CHANNEL_URL/playlists" > "$ROOT/data/playlists.raw.jsonl"

rm -f "$ROOT/data/playlist_entries/"*.jsonl "$ROOT/data/playlist_entries.raw.jsonl" 2>/dev/null || true
node -e "const fs=require('fs'); for (const line of fs.readFileSync('$ROOT/data/playlists.raw.jsonl','utf8').trim().split(/\n+/)) { const p=JSON.parse(line); if (p.url) console.log(p.id + '\t' + p.url); }" \
  | xargs -P "$JOBS" -n 2 sh -c 'yt-dlp --flat-playlist --dump-json "$2" > "$0/data/playlist_entries/$1.jsonl"' "$ROOT"

find "$ROOT/data/playlist_entries" -name '*.jsonl' -type f -print0 | xargs -0 cat > "$ROOT/data/playlist_entries.raw.jsonl"

node "$ROOT/bin/normalize_manifest.mjs"

printf 'Manifest written: %s\n' "$ROOT/data/videos.json"
