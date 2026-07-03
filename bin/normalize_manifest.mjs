#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const rawPath = path.join(root, "data", "videos.raw.jsonl");
const playlistEntriesPath = path.join(root, "data", "playlist_entries.raw.jsonl");
const playlistsPath = path.join(root, "data", "playlists.raw.jsonl");
const outPath = path.join(root, "data", "videos.json");
const playlistsOutPath = path.join(root, "data", "playlists.json");

function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${file}:${index + 1}: ${error.message}`);
      }
    });
}

function bestThumbnail(thumbnails = [], id) {
  const sorted = [...thumbnails].sort((a, b) => (b.width || 0) - (a.width || 0));
  return sorted[0]?.url || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function splitTitle(title) {
  const parts = title.split(/\s+(?:-|–|—)\s+/);
  if (parts.length < 2) return { sessionTitle: title.trim(), speakerLine: "" };
  return {
    sessionTitle: parts.slice(0, -1).join(" - ").trim(),
    speakerLine: parts.at(-1).trim(),
  };
}

const interestRules = [
  ["coding agents", /\b(coding agent|code agent|swe agent|ai coding|developer tool|devtool|ide|cursor|codex|claude code)\b/i, 6],
  ["context engineering", /\b(context engineering|prompt|prompting|memory|skills?|tool use|mcp|model context protocol)\b/i, 5],
  ["agent systems", /\b(agent|agentic|multi-agent|workflow|orchestrat|autonomous)\b/i, 4],
  ["evals and reliability", /\b(eval|benchmark|observability|reliability|guardrail|testing|monitoring|quality|hallucination)\b/i, 4],
  ["product and startups", /\b(founder|startup|product|growth|go-to-market|business|monetiz|customer|enterprise)\b/i, 3],
  ["voice and multimodal", /\b(voice|audio|speech|video|vision|multimodal|image)\b/i, 3],
  ["infra and deployment", /\b(infra|inference|serving|deploy|latency|cost|scale|gpu|edge|on device|serverless)\b/i, 3],
  ["rag and data", /\b(rag|retrieval|vector|database|knowledge|search|data|embedding)\b/i, 3],
  ["security and governance", /\b(security|privacy|policy|governance|legal|law|government|compliance)\b/i, 2],
  ["open source models", /\b(open source|llama|mistral|qwen|gemma|local model|oss)\b/i, 2],
];

function interestsFor(text) {
  const hits = [];
  let score = 0;
  for (const [label, regex, weight] of interestRules) {
    if (regex.test(text)) {
      hits.push(label);
      score += weight;
    }
  }
  if (!hits.length) hits.push("general ai engineering");
  return { hits, score };
}

const uploadItems = readJsonl(rawPath);
const playlistItems = readJsonl(playlistEntriesPath);
const sourceItems = playlistItems.length ? playlistItems : uploadItems;
const uploadById = new Map(uploadItems.map((item) => [item.id, item]));
const playlistLabels = new Map();
for (const item of playlistItems) {
  if (!item.id) continue;
  const labels = playlistLabels.get(item.id) || new Set();
  if (item.playlist) labels.add(item.playlist);
  playlistLabels.set(item.id, labels);
}

const byId = new Map();
for (const item of sourceItems) {
  if (!item.id || byId.has(item.id)) continue;
  byId.set(item.id, { ...uploadById.get(item.id), ...item });
}

const videos = [...byId.values()]
  .map((item) => {
    const { sessionTitle, speakerLine } = splitTitle(item.title || "");
    const text = `${item.title || ""} ${item.description || ""}`;
    const { hits, score } = interestsFor(text);
    return {
      id: item.id,
      title: item.title || "",
      sessionTitle,
      speakerLine,
      url: item.webpage_url || item.url || `https://www.youtube.com/watch?v=${item.id}`,
      durationSeconds: Math.round(item.duration || 0),
      duration: item.duration_string || "",
      channel: item.playlist_channel || "AI Engineer",
      playlistIndex: item.playlist_index || null,
      thumbnail: bestThumbnail(item.thumbnails, item.id),
      interests: hits,
      interestScore: score,
      sourcePlaylists: [...(playlistLabels.get(item.id) || [])].sort(),
      transcriptStatus: "pending",
      summaryStatus: "pending",
      localThumbnail: `../thumbnails/${item.id}.jpg`,
    };
  });

const playlists = readJsonl(playlistsPath).map((item) => ({
  id: item.id,
  title: item.title || "",
  url: item.webpage_url || item.url || "",
  thumbnail: bestThumbnail(item.thumbnails, item.id),
}));

videos.sort((a, b) => (a.playlistIndex || 0) - (b.playlistIndex || 0));

fs.writeFileSync(outPath, `${JSON.stringify(videos, null, 2)}\n`);
fs.writeFileSync(playlistsOutPath, `${JSON.stringify(playlists, null, 2)}\n`);

console.log(`videos=${videos.length}`);
console.log(`playlists=${playlists.length}`);
