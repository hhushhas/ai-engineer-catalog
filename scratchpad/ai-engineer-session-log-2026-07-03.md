# AI Engineer Catalog Session Log

- 2026-07-03 00:30 PKT: created `/Users/macmini/code/ai-engineer-catalog` and collected official AI Engineer YouTube channel uploads/playlists.
- 2026-07-03 00:32 PKT: expanded manifest to enumerate all 67 official channel playlists in parallel, then deduped videos by YouTube ID.
- 2026-07-03 01:20 PKT: final catalog contains 898 public playlist/upload entries, 847 usable caption transcripts, 847 tailored summaries, 851 local thumbnails, and 51 unavailable/no-usable-transcript entries.
- Source limitations: YouTube reports 236 entries for `AIE Europe 2026 Complete Playlist`, but `yt-dlp` 2026.06.09 only exposes the first 100 entries through playlist enumeration. Official schedule JSON exists for Europe 2026 and World's Fair 2026, but does not generally include video IDs. Private/unavailable videos remain marked missing without browser cookies or another authorized source.
- Verification: rendered `html/index.html` with local Helium via Playwright. The page had 898 cards; search for `MCP` returned 52 cards; adding the `context engineering` filter returned 35 cards. Screenshot saved to `html/catalog-verification.png`.
