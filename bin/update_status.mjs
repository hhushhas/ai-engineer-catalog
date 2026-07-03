#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const videosPath = path.join(root, "data", "videos.json");
const videos = JSON.parse(fs.readFileSync(videosPath, "utf8"));

for (const video of videos) {
  const textPath = path.join(root, "transcripts", "text", `${video.id}.txt`);
  const missingPath = path.join(root, "transcripts", "text", `${video.id}.missing`);
  const summaryPath = path.join(root, "summaries", `${video.id}.md`);
  video.transcriptStatus = fs.existsSync(textPath) && fs.statSync(textPath).size > 50
    ? "ready"
    : fs.existsSync(missingPath)
      ? "missing"
      : "pending";
  video.summaryStatus = fs.existsSync(summaryPath) && fs.statSync(summaryPath).size > 50 ? "ready" : "pending";
}

fs.writeFileSync(videosPath, `${JSON.stringify(videos, null, 2)}\n`);

const counts = videos.reduce((acc, video) => {
  acc[`transcript:${video.transcriptStatus}`] = (acc[`transcript:${video.transcriptStatus}`] || 0) + 1;
  acc[`summary:${video.summaryStatus}`] = (acc[`summary:${video.summaryStatus}`] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify(counts, null, 2));

