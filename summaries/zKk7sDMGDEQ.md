# Benchmarking semantic code retrieval on Claude Code

**Speaker:** Kuba Rogut, Turbopuffer
**Source:** https://www.youtube.com/watch?v=zKk7sDMGDEQ
**Duration:** 16:08
**Recommendation:** Watch
**Hasan-fit themes:** coding agents, rag and data

## Gist

Welcome to benchmarking semantic search or semantic code retrieval on cloud code.

## Why Hasan Should Care

This session maps to coding agents, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:08).

## Practical Takeaways

- For those unfamiliar with Turbo Puffer, we are a serverless full text and vector search database built from first principles on top of object storage.
- We serve some of the fastest growing AI companies in the world and if you'd like to know more about the talk or any question about Turbo Puffer or anything, just find feel free to find me after.
- Cursor has their own internal context bench and there's this paper this public paper called context bench where essentially the benchmark is not really testing whether or not the coding agent solved or didn't solve a problem.
- Then I tested it with cloud code with a max of 50 line reads at a time and then the same thing with a windowed reads with the T Puffer search tool.
- Uh so like in summary, uh you know, we think long-term winners were like kind of provide these lightweight tools to find the right context in various different ways.

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
