# How we taught agents to use good retrieval

**Speaker:** Hanna Lichtenberg, Mixedbread AI
**Source:** https://www.youtube.com/watch?v=1IdzkRVmWAA
**Duration:** 14:28
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

Hey, today we're going to talk about how we taught agents to use good retrieval or how we call it internally closing the Oracle gap with knowledge agents.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:28).

## Practical Takeaways

- But, the retrieval tools are the main access pattern for this reasoning there to get the right knowledge and to be truly useful beyond code like in legal work, in finance work and so on and so forth.
- With giving the model better search tool we can recover most of the knowledge gap.
- And the reason why the models write these type of queries is they're mostly trained for coding task, like for coding agents, which are then optimized for code base exploration using tools like grep.
- So, right now, the agent guesses the keywords to actually increase the overlap between the query and documents and can't really use powerful search tools properly.
- Then when um the results of the tools are returned to the agent via deduplicating chunks, so that it's never seeing several chunks um several times to not fill up the context.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
