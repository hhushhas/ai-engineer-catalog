# Skills are the New SDKs

**Speaker:** Elvin Aghammadzada, DataRobot
**Source:** https://www.youtube.com/watch?v=LC3-P7v3yoI
**Duration:** 26:40
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

The first one is that beautiful lie that we've been told that the latest frontier models have infinite context windows.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (26:40).

## Practical Takeaways

- They typically promised that each one has 1 million, 5 million, and even latest models they promised us infinite context window, which incorrectly shapes our thinking perspectives about rag and MCP in a sense.
- So, I'm pretty sure it starts really well as day in the life, but as time goes and as the conversation grows, let's say there is 100 prompt input and output responses in your one shot, and added 200 shots, and then each one of them kind of calls MCPs or tools, each time out of them in the middle fails, and at the end of the day, the context is almost eating itself in a sense that the latest 100 model can perform like a really poor model.
- But models typically doesn't have those capabilities until you actually build a context engine around it.
- So, if you consider a typical agent whether it's cloud code or our own agent that we built for a customer it typically has system instructions cloud that I need couple built-in tools maybe also connection to MCP, right?
- And then even you haven't ever chatted to your agent yet now you've filled your 40% context window.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
