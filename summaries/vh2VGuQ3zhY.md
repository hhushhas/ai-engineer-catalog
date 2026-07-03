# The 100-Tool Agent Is a Trap

**Speaker:** Sohail Shaikh & Ankush Rastogi, Prosodica
**Source:** https://www.youtube.com/watch?v=vh2VGuQ3zhY
**Duration:** 28:27
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

Giving which is basically giving an AI agent every tool access it might ever need all at once.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (28:27).

## Practical Takeaways

- So, when you look at the accuracy curve with the 10 tools, fat agent will get the tools right almost 78% of the times.
- With fat agent approach, time to first token grows as the tool catalog grows because the model has to process a larger prompt before it can answer the user question.
- So, say for example, if you have 500 tools in your agent, the fat agent path can push first token latency past 5 seconds.
- The agent also becomes one large monolithic, which makes it hard to test, risky to update, and even painful to debug.
- But, in the case of semantic routing design, the agent does not start with every tool.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
