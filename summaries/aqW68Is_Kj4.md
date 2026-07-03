# Katelyn Lesse

**Speaker:** Evolving Claude APIs for Agents, Anthropic
**Source:** https://www.youtube.com/watch?v=aqW68Is_Kj4
**Duration:** 13:25
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Cloud code has many, many, many tools and it's calling them all the time to do things like read files, search for files, write to files, um, and do stuff like rerun tests and otherwise.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (13:25).

## Practical Takeaways

- We introduced this a year ago and it's been really cool to see the community swarm around adopting um MCP as a standardized way for agents to interact with external systems.
- there are plenty of places kind of outside of the agent's context where there might be additional information or tools or otherwise that you want your agent to be able to interact with or the cloud code agent to be able to interact with.
- So, if you can use tools like MCP to get context into your window, we introduced a memory tool to help you actually keep context outside of the window that Claude knows how to pull back into the window only when it actually needs it.
- And so um we found that if we combined our memory tool with context editing, we saw a 39% bump in performance over o over the benchmark on our own internal evals.
- So we recently released agent skills which you can use in combination with our code execution tool.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
