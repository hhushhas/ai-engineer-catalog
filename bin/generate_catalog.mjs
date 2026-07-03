#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const videosPath = path.join(root, "data", "videos.json");
const htmlDir = path.join(root, "html");
fs.mkdirSync(htmlDir, { recursive: true });

const videos = JSON.parse(fs.readFileSync(videosPath, "utf8"));

function readSummary(id) {
  const file = path.join(root, "summaries", `${id}.md`);
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
}

function excerpt(markdown) {
  return markdown
    .replace(/^# .+$/m, "")
    .replace(/\*\*/g, "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("Source:"))
    .slice(0, 8)
    .join("\n");
}

const catalog = videos.map((video) => ({
  ...video,
  summary: excerpt(readSummary(video.id)),
  thumbnail: fs.existsSync(path.join(root, "thumbnails", `${video.id}.jpg`)) ? `../thumbnails/${video.id}.jpg` : video.thumbnail,
  summaryPath: `../summaries/${video.id}.md`,
  transcriptPath: `../transcripts/text/${video.id}.txt`,
}));

fs.writeFileSync(path.join(root, "data", "catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);

const tags = [...new Set(catalog.flatMap((video) => video.interests))].sort();
const updated = new Date().toISOString().replace("T", " ").slice(0, 16);
const ready = catalog.filter((video) => video.summaryStatus === "ready").length;
const transcripts = catalog.filter((video) => video.transcriptStatus === "ready").length;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI Engineer Session Catalog</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f7f7f2;
      --ink: #151719;
      --muted: #5e6470;
      --line: #d9d8cc;
      --panel: #ffffff;
      --accent: #0f766e;
      --accent-2: #b45309;
      --chip: #e6f3f1;
      --chip-2: #f7ead8;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--ink);
      letter-spacing: 0;
    }
    header {
      padding: 28px max(20px, 4vw) 18px;
      border-bottom: 1px solid var(--line);
      background: #fffffb;
      position: sticky;
      top: 0;
      z-index: 2;
    }
    h1 {
      margin: 0 0 14px;
      font-size: clamp(24px, 3vw, 42px);
      line-height: 1.05;
      letter-spacing: 0;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      color: var(--muted);
      font-size: 14px;
      margin-bottom: 16px;
    }
    .controls {
      display: grid;
      grid-template-columns: minmax(220px, 1fr) auto auto;
      gap: 10px;
      align-items: center;
    }
    input, select {
      height: 40px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      color: var(--ink);
      padding: 0 12px;
      font: inherit;
      min-width: 0;
    }
    main {
      padding: 22px max(20px, 4vw) 48px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 16px;
    }
    article {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
      min-height: 100%;
    }
    .thumb {
      aspect-ratio: 16 / 9;
      background: #e5e3d8;
      overflow: hidden;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .body {
      padding: 14px;
      display: grid;
      gap: 10px;
      align-content: start;
    }
    h2 {
      margin: 0;
      font-size: 17px;
      line-height: 1.25;
      letter-spacing: 0;
    }
    .speaker, .summary, .status {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }
    .summary {
      white-space: pre-line;
      max-height: 185px;
      overflow: auto;
      padding-right: 4px;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .chip {
      border-radius: 999px;
      background: var(--chip);
      color: #0f4f49;
      padding: 4px 8px;
      font-size: 12px;
      line-height: 1.2;
    }
    .rec {
      background: var(--chip-2);
      color: #7c3f08;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 2px;
    }
    a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 650;
    }
    a:hover { text-decoration: underline; }
    .empty {
      padding: 42px 0;
      color: var(--muted);
      display: none;
    }
    @media (max-width: 720px) {
      header { position: static; }
      .controls { grid-template-columns: 1fr; }
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>AI Engineer Session Catalog</h1>
    <div class="meta">
      <span>${catalog.length} videos</span>
      <span>${transcripts} transcripts ready</span>
      <span>${ready} summaries ready</span>
      <span>Updated ${updated}</span>
    </div>
    <div class="controls">
      <input id="search" type="search" placeholder="Search titles, speakers, summaries">
      <select id="tag">
        <option value="">All interests</option>
        ${tags.map((tag) => `<option value="${escapeHtml(tag)}">${escapeHtml(tag)}</option>`).join("")}
      </select>
      <select id="sort">
        <option value="fit">Best Hasan fit</option>
        <option value="recent">Channel order</option>
        <option value="duration">Longest first</option>
        <option value="title">Title</option>
      </select>
    </div>
  </header>
  <main>
    <div id="grid" class="grid"></div>
    <div id="empty" class="empty">No sessions match that filter.</div>
  </main>
  <script id="catalog-data" type="application/json">${escapeScript(JSON.stringify(catalog))}</script>
  <script>
    const catalog = JSON.parse(document.getElementById('catalog-data').textContent);
    const grid = document.getElementById('grid');
    const empty = document.getElementById('empty');
    const search = document.getElementById('search');
    const tag = document.getElementById('tag');
    const sort = document.getElementById('sort');

    function recommendation(video) {
      if (video.interestScore >= 8) return 'Watch';
      if (video.interestScore >= 4) return 'Skim';
      return 'Optional';
    }

    function render() {
      const q = search.value.trim().toLowerCase();
      const selectedTag = tag.value;
      const rows = catalog.filter(video => {
        const haystack = [video.title, video.speakerLine, video.summary, video.interests.join(' ')].join(' ').toLowerCase();
        return (!q || haystack.includes(q)) && (!selectedTag || video.interests.includes(selectedTag));
      });
      rows.sort((a, b) => {
        if (sort.value === 'fit') return b.interestScore - a.interestScore || a.playlistIndex - b.playlistIndex;
        if (sort.value === 'duration') return b.durationSeconds - a.durationSeconds;
        if (sort.value === 'title') return a.sessionTitle.localeCompare(b.sessionTitle);
        return a.playlistIndex - b.playlistIndex;
      });
      grid.innerHTML = rows.map(video => card(video)).join('');
      empty.style.display = rows.length ? 'none' : 'block';
    }

    function card(video) {
      const chips = video.interests.map(item => '<span class="chip">' + escapeHtml(item) + '</span>').join('');
      const playlists = (video.sourcePlaylists || []).slice(0, 3).map(item => '<span class="chip playlist">' + escapeHtml(item) + '</span>').join('');
      const status = 'Transcript: ' + video.transcriptStatus + ' · Summary: ' + video.summaryStatus + (video.duration ? ' · ' + video.duration : '');
      return '<article>' +
        '<a class="thumb" href="' + video.url + '" target="_blank" rel="noreferrer"><img loading="lazy" src="' + video.thumbnail + '" alt=""></a>' +
        '<div class="body">' +
          '<div class="chips"><span class="chip rec">' + recommendation(video) + '</span>' + chips + '</div>' +
          (playlists ? '<div class="chips">' + playlists + '</div>' : '') +
          '<h2>' + escapeHtml(video.sessionTitle || video.title) + '</h2>' +
          (video.speakerLine ? '<div class="speaker">' + escapeHtml(video.speakerLine) + '</div>' : '') +
          '<div class="status">' + escapeHtml(status) + '</div>' +
          '<div class="summary">' + escapeHtml(video.summary || 'Summary pending. Run bin/summarize_all.sh after transcripts finish.') + '</div>' +
          '<div class="links"><a href="' + video.url + '" target="_blank" rel="noreferrer">Watch</a><a href="' + video.summaryPath + '">Summary</a><a href="' + video.transcriptPath + '">Transcript</a></div>' +
        '</div>' +
      '</article>';
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    }

    for (const el of [search, tag, sort]) el.addEventListener('input', render);
    render();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(htmlDir, "index.html"), html);
console.log(path.join(htmlDir, "index.html"));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function escapeScript(value) {
  return value.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}
