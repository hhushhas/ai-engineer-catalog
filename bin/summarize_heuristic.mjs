#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const id = process.argv[2];
const videos = JSON.parse(fs.readFileSync(path.join(root, "data", "videos.json"), "utf8"));
const video = videos.find((item) => item.id === id);
if (!video) {
  console.error(`Unknown video id: ${id}`);
  process.exit(2);
}

const textPath = path.join(root, "transcripts", "text", `${id}.txt`);
const transcript = fs.existsSync(textPath) ? fs.readFileSync(textPath, "utf8") : "";
const compact = transcript.replace(/\s+/g, " ").trim();
const sentences = compact.match(/[^.!?]+[.!?]+/g) || compact.split(/(?<=\S)\s{2,}/);
const keywords = [
  "agent", "coding", "context", "skill", "eval", "test", "benchmark", "workflow",
  "memory", "mcp", "tool", "product", "customer", "latency", "cost", "deploy",
  "voice", "vision", "multimodal", "security", "open source", "model",
];

function scoreSentence(sentence) {
  const lower = sentence.toLowerCase();
  let score = 0;
  for (const word of keywords) if (lower.includes(word)) score += 1;
  for (const interest of video.interests) if (lower.includes(interest.split(" ")[0])) score += 2;
  if (sentence.length > 80 && sentence.length < 260) score += 1;
  return score;
}

const selected = sentences
  .map((sentence, index) => ({ sentence: sentence.trim(), score: scoreSentence(sentence), index }))
  .filter((item) => item.sentence.length > 50)
  .sort((a, b) => b.score - a.score || a.index - b.index)
  .slice(0, 8)
  .sort((a, b) => a.index - b.index)
  .map((item) => item.sentence.replace(/\s+/g, " "));

const topInterests = video.interests.join(", ");
const recommendation = video.interestScore >= 8 ? "Watch" : video.interestScore >= 4 ? "Skim" : "Optional";
const gist = selected[0] || "Transcript was too sparse for a reliable extractive gist.";
const duration = video.duration ? ` (${video.duration})` : "";

console.log(`# ${video.sessionTitle || video.title}`);
console.log("");
if (video.speakerLine) console.log(`**Speaker:** ${video.speakerLine}`);
console.log(`**Source:** ${video.url}`);
console.log(`**Duration:** ${video.duration || "Unknown"}`);
console.log(`**Recommendation:** ${recommendation}`);
console.log(`**Hasan-fit themes:** ${topInterests}`);
console.log("");
console.log("## Gist");
console.log("");
console.log(`${gist}`);
console.log("");
console.log("## Why Hasan Should Care");
console.log("");
console.log(`This session maps to ${topInterests}. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows${duration}.`);
console.log("");
console.log("## Practical Takeaways");
console.log("");
for (const sentence of selected.slice(1, 6)) {
  console.log(`- ${sentence}`);
}
if (selected.length < 2) {
  console.log("- Review the video directly; automatic captions were limited or unavailable.");
}
console.log("");
console.log("## Implementation Ideas");
console.log("");
const ideas = [];
if (video.interests.includes("coding agents")) ideas.push("Extract patterns for agent planning, review loops, codebase context, and verification gates.");
if (video.interests.includes("context engineering")) ideas.push("Look for reusable context packets, skill files, memory rules, and workflow prompts.");
if (video.interests.includes("evals and reliability")) ideas.push("Turn claims into regression tests, eval rubrics, or monitoring dashboards.");
if (video.interests.includes("voice and multimodal")) ideas.push("Map product ideas to realtime UX, latency budgets, and fallback behavior.");
if (video.interests.includes("infra and deployment")) ideas.push("Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.");
if (!ideas.length) ideas.push("Use this as background signal unless the title/speaker is directly relevant to an active project.");
for (const idea of ideas) console.log(`- ${idea}`);

