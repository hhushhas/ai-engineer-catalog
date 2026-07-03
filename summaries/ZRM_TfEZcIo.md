# Turn 10,994 Notes Into Memory

**Speaker:** Paul Iusztin, Decoding AI & Louis-François Bouchard, Towards AI
**Source:** https://www.youtube.com/watch?v=ZRM_TfEZcIo
**Duration:** 39:32
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

But, the problem when doing that is that if you have a lot of following up question or it's a bigger project that you need to build on and have basically a very long context or tons of information to share, relying on ChatGPT isn't ideal.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (39:32).

## Practical Takeaways

- Meaning that with an agent, the context window becomes everything, the database, the file system, the memory, the reasoning space.
- You need a proper memory and context management, and ideally some personality with it, especially in my case when I do videos.
- But, as I said, it implements tons of features and state-of-the-art context management and memory management techniques that I believe AI engineers need to know.
- And during the query rounds, we basically used the very classic deep research algorithm where we had one main agent, the orchestrator, which created multiple questions based on the initial topic and the scraped context.
- And then [snorts] it passed all this information back to the agent to the main agent where the main agent basically aggregated all this information into a summarized way so it did not exploded the context.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
