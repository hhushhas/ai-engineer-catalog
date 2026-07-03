#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const id = process.argv[2];
const videos = JSON.parse(fs.readFileSync(path.join(root, "data", "videos.json"), "utf8"));
const video = videos.find((item) => item.id === id);
if (!video) process.exit(1);

console.log(`Title: ${video.title}`);
console.log(`URL: ${video.url}`);
console.log(`Duration: ${video.duration}`);
console.log(`Interests: ${video.interests.join(", ")}`);

