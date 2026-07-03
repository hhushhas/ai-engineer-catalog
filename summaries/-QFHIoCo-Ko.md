# Full Walkthrough: Workflow for AI Coding

**Speaker:** Matt Pocock
**Source:** https://www.youtube.com/watch?v=-QFHIoCo-Ko
**Duration:** 1:36:30
**Recommendation:** Watch
**Hasan-fit themes:** coding agents, agent systems

## Gist

This blue sort of where the coding agent is going out and exploring the code base.

## Why Hasan Should Care

This session maps to coding agents, agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:36:30).

## Practical Takeaways

- Which is that this this sub agents thing here, this explore sub agent it has essentially gone and called another LLM which has an isolated context window.
- We're just going to run one coding agent at a time.
- If we delegate all of our coding to agents, you notice that the implementation here is really the only AFK bit.
- And so my experiences with trying to plug AI into um let's say agent browser or Playwright MCP to give it You can give it tools to allow it to look through a front end and sort of look at images, but in my experience the um it's not very good at that yet and it can't create a nice front end in a mature code base.
- Um we had this question before, actually, which was like uh how do you uh enforce your coding standards on the agents, essentially?

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
