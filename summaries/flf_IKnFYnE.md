# From Stateless Nightmares to Durable Agents

**Speaker:** Samuel Colvin, Pydantic
**Source:** https://www.youtube.com/watch?v=flf_IKnFYnE
**Duration:** 22:13
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, and then we have the um questioner agent or the player agent has a bit more context on what it's going to go and do.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:13).

## Practical Takeaways

- Um, and the way that the questioner agent gets to ask its questions is by calling a tool, ask a question.
- Inside that tool, we run the other agent, the answer agent to basically decide the answer to this question, and then we respond.
- The point is that this temporal agent takes care of turning all of the IO that you need to do to call an LLM into activities in the background, including tool calls.
- We can basically run our workflow code that's generally very fast because it's no IO.
- Then you have the search agent which has access in this case to search tool or I'll show using tavilli in the other case um which is using a a faster model gemini flash uh in this case and then you're using in this case I'm using claude son 4.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
