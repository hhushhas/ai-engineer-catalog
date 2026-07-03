#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ID="${1:?video id required}"
TEXT_FILE="$ROOT/transcripts/text/$ID.txt"
OUT_FILE="$ROOT/summaries/$ID.md"

mkdir -p "$ROOT/summaries"

if [[ ! -s "$TEXT_FILE" ]]; then
  printf '# Transcript missing\n\nNo transcript text was available for `%s`.\n' "$ID" > "$OUT_FILE"
  exit 0
fi

if [[ "${SUMMARIZER:-heuristic}" == "ollama" ]] && command -v ollama >/dev/null 2>&1; then
  MODEL="${OLLAMA_MODEL:-llama3.1:8b}"
  META="$(node "$ROOT/bin/metadata_for_id.mjs" "$ID")"
  {
    printf '%s\n\n' "$META"
    sed -n '1,220p' "$TEXT_FILE"
  } | ollama run "$MODEL" "$(cat <<'PROMPT'
Summarize this AI Engineer session for Hasan, a builder interested in coding agents, context engineering, agent skills, evals, automation, voice/multimodal products, infrastructure, and practical product judgment.

Return Markdown with:
- one sentence gist
- why Hasan should care
- 5 practical takeaways
- implementation ideas
- skip/watch recommendation
PROMPT
)" > "$OUT_FILE"
else
  node "$ROOT/bin/summarize_heuristic.mjs" "$ID" > "$OUT_FILE"
fi

