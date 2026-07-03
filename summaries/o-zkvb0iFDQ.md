# MCP UI: Extending the frontier

**Speaker:** Liad Yosef and Ido Salomon, MCP Apps
**Source:** https://www.youtube.com/watch?v=o-zkvb0iFDQ
**Duration:** 22:21
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

I work with Eda on MCPUI, co-created the MCP app spec with Eda and I'm also co-founder of Ergo Labs which is like human agentic interfaces a company.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:21).

## Practical Takeaways

- You might not even realize it but the interactive applications you see today in ChatGPT, Claude and others are actually based on MCP and the MCP app spec.
- We used to text, we used to MCP tools sending text to our chat agents.
- Um so in the old world of a few months back when we wanted to do whatever let's say we wanted to create the best playlist ever we would type something into the chat and it would send out a tool call to our MCP server.
- In this case it decides to actually call the server tool but the control is in the hands of the host and everything stays in context.
- So, when the user interacts with the model, the model the app can actually expose tools for the model to interact with it, thus closing this loop.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
