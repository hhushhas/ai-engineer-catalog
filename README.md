# AI Engineer Catalog

Resumable pipeline for AI Engineer session discovery, transcript acquisition, tailored summaries, and an HTML catalog.

## Dependency Graph

1. `bin/collect_manifest.sh`
   - writes `data/videos.raw.jsonl`
   - writes `data/playlists.raw.jsonl`
   - writes `data/videos.json`
2. `bin/fetch_transcripts.sh`
   - downloads YouTube captions where available
   - writes VTT files under `transcripts/raw/`
   - writes text files under `transcripts/text/`
3. `bin/summarize_all.sh`
   - calls `bin/summarize.sh`
   - writes Markdown summaries under `summaries/`
4. `bin/generate_catalog.mjs`
   - writes `data/catalog.json`
   - writes `html/index.html`

Each step is safe to rerun. Existing transcript and summary files are skipped unless `FORCE=1` is set.

## Run

```bash
bin/collect_manifest.sh
JOBS=8 bin/fetch_transcripts.sh
JOBS=8 bin/summarize_all.sh
node bin/generate_catalog.mjs
```

Open `html/index.html` in a browser.

