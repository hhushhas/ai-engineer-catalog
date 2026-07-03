# The Multi-Agent Architecture That Actually Ships

**Speaker:** Luke Alvoeiro, Factory
**Source:** https://www.youtube.com/watch?v=ow1we5PzK-o
**Duration:** 18:31
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

Goose is now one of the leading coding agents is open source and it's recently was was donated to the AI agentic AI Foundation.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:31).

## Practical Takeaways

- You have you know sub agents and coding tools are the most common example.
- A fresh agent with fresh context is way more likely to find issues and this is why we do code review as humans as well.
- So when you've worked with coding agents before you've probably seen this pattern where an agent builds a feature.
- It runs the test suite, type checking, lints and critically it spawns dedicated code review agents for each completed feature within the milestone.
- But for a system that runs for many days you also need to make sure that context isn't lost between the agents.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
