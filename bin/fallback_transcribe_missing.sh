#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SUMMARIZE_BIN="${SUMMARIZE_BIN:-/Users/macmini/.nvm/versions/node/v23.9.0/bin/summarize}"
JOBS="${JOBS:-2}"

if [[ ! -x "$SUMMARIZE_BIN" ]]; then
  echo "summarize CLI not found at $SUMMARIZE_BIN" >&2
  exit 1
fi

mkdir -p "$ROOT/logs/fallback-transcripts" "$ROOT/transcripts/text"

find "$ROOT/transcripts/text" -name '*.missing' -maxdepth 1 -print \
  | sed 's#.*/##; s#\.missing$##' \
  | xargs -P "$JOBS" -n 1 sh -c '
      id="$2"
      out="$0/transcripts/text/$id.txt"
      log="$0/logs/fallback-transcripts/$id.log"
      if [ -s "$out" ] && [ "${FORCE:-0}" != "1" ]; then exit 0; fi
      "$1" "https://www.youtube.com/watch?v=$id" --youtube yt-dlp --video-mode transcript --transcriber "${TRANSCRIBER:-auto}" --extract --plain > "$out.tmp" 2> "$log" || {
        rm -f "$out.tmp"
        exit 0
      }
      if [ -s "$out.tmp" ]; then mv "$out.tmp" "$out"; rm -f "$0/transcripts/text/$id.missing"; fi
    ' "$ROOT" "$SUMMARIZE_BIN"

node "$ROOT/bin/update_status.mjs"
