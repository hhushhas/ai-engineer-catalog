# Your Agent Failed in Prod. Good Luck Reproducing It.

**Speaker:** Tisha Chawla & Susheem Koul, Microsoft
**Source:** https://www.youtube.com/watch?v=Lc8zRh9muoY
**Duration:** 14:10
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

This whole talk is going to be about that one thing you lose the second an agent goes haywire in production, which is being able to reproduce it.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:10).

## Practical Takeaways

- For sure, not at the network layer because half your agent will never touch the network, the local retrieval, the in-process tools, the memory, and the parts that do not shred under streaming and async.
- >> So, we've established that replayability is a core tenant of productionizing any AI agent.
- On top of that, you can define parameters like your model version or the version of the code that is running so that the entire state during which the agent run happened gets frozen and saved as a trace.
- We've been talking about this stock selling agent which went haywire in production.
- It can use the place order tool to do the actual selling and buying of the stocks, and then finally it delegates to the finalize agent which generates a succinct response for the end user.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
