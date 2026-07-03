# Breaking the Chain: Agent Continuations for Resumable AI Workflows

**Speaker:** Greg Benson
**Source:** https://www.youtube.com/watch?v=ZB7l4uxW3Yo
**Duration:** 27:02
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

I'm not going to go over all of those, but essentially the agent will get to a point where there's a designated tool or task that might be a high value or high risk task like transferring a lot of money or deleting an account.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (27:02).

## Practical Takeaways

- An agent is essentially a loop that involves calls to an LLM that specify potential tools for that LLM to use.
- And if the LLM determines that it needs to use those tools, it will come back to the agent loop, which will then call the tools on behalf of the LLM request and collect the tool results and send them back to the LLM.
- Now, it's also possible that a tool can be an agent itself and that's illustrated in the picture here.
- The mo main point of this is to to indicate that even simple agents have quite a bit of interaction with the LLM and with the tools.
- We want to be able to say at some point during agent execution, which again might be through multiple tool calls, multiple LLM calls, and maybe even calls to sub agents and their tool calls and LLM calls.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
