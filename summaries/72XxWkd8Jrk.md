# Effective agent design patterns in production — Laurie Voss, LlamaIndex

**Source:** https://www.youtube.com/watch?v=72XxWkd8Jrk
**Duration:** 15:38
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

and llama parse will uh demonstrabably improve the quality of the agents you build by making the data easier for an LLM to understand than if you just try and uh feed these things in through an open source parser or something like that.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:38).

## Practical Takeaways

- So, if you are building an agent, you can just plug in an existing agent tool without having to build one yourself.
- Uh but what I mean when I say an agent is it is a bit of semi-autonomous software that can use tools to achieve a goal without you having to explicitly specify what steps it's going to take to achieve that goal.
- it's always going to be uh you're always going to get more answers better answers if the context that you have given your LLM is uh more specific uh so agents can use rag as one of their tools but also uh um agents so agents need rag uh but rag also needs agents rag by itself naive topk rag where you just you know throw in a query and retrieve the uh retrieve the most relevant context and feed that to the LLM that's not going to work very well for a variety of situations.
- But what we've found through lots of production use cases is that layering an agent on top of your rag uh will produce significantly higher quality results.
- Um, and the way that you use your tool function is you just give it to an agent and the agent will figure out that it is a tool function and start using it.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
