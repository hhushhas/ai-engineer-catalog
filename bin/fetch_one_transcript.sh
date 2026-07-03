#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ID="${1:?video id required}"
URL="https://www.youtube.com/watch?v=$ID"
RAW_DIR="$ROOT/transcripts/raw"
TEXT_DIR="$ROOT/transcripts/text"
LOG_DIR="$ROOT/logs/transcripts"

mkdir -p "$RAW_DIR" "$TEXT_DIR" "$LOG_DIR"

if [[ -s "$TEXT_DIR/$ID.txt" && "${FORCE:-0}" != "1" ]]; then
  exit 0
fi

if ! compgen -G "$RAW_DIR/$ID*.vtt" > /dev/null || [[ "${FORCE:-0}" == "1" ]]; then
  yt-dlp \
    --skip-download \
    --write-subs \
    --write-auto-subs \
    --sub-langs "en,en.*,en-orig" \
    --sub-format "vtt" \
    --output "$RAW_DIR/%(id)s.%(ext)s" \
    "$URL" > "$LOG_DIR/$ID.log" 2>&1 || true
fi

node "$ROOT/bin/vtt_to_text.mjs" "$ID"

