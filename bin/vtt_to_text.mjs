#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const id = process.argv[2];
if (!id) {
  console.error("Usage: vtt_to_text.mjs VIDEO_ID");
  process.exit(2);
}

const rawDir = path.join(root, "transcripts", "raw");
const textDir = path.join(root, "transcripts", "text");
fs.mkdirSync(textDir, { recursive: true });

const candidates = fs.existsSync(rawDir)
  ? fs.readdirSync(rawDir).filter((name) => name.startsWith(`${id}.`) && name.endsWith(".vtt"))
  : [];

if (!candidates.length) {
  fs.writeFileSync(path.join(textDir, `${id}.missing`), "no captions found\n");
  process.exit(0);
}

const preferred = candidates.sort((a, b) => {
  const rank = (name) => name.includes(".en-orig.") ? 0 : name.includes(".en.") ? 1 : 2;
  return rank(a) - rank(b) || a.length - b.length;
})[0];

const input = fs.readFileSync(path.join(rawDir, preferred), "utf8");
const lines = input.split(/\r?\n/);
const cleaned = [];
let last = "";

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  if (trimmed === "WEBVTT" || trimmed.startsWith("Kind:") || trimmed.startsWith("Language:")) continue;
  if (/^\d+$/.test(trimmed)) continue;
  if (/-->/.test(trimmed)) continue;
  const withoutTags = trimmed
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
  if (!withoutTags || withoutTags === last) continue;
  cleaned.push(withoutTags);
  last = withoutTags;
}

const paragraphs = [];
let current = [];
for (const line of cleaned) {
  current.push(line);
  if (current.join(" ").length > 700) {
    paragraphs.push(current.join(" "));
    current = [];
  }
}
if (current.length) paragraphs.push(current.join(" "));

fs.writeFileSync(path.join(textDir, `${id}.txt`), `${paragraphs.join("\n\n")}\n`);

