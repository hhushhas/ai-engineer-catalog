# Bending a Public MCP Server Without Breaking It

**Speaker:** Nimrod Hauser, Baz
**Source:** https://www.youtube.com/watch?v=U00AOI1eJUE
**Duration:** 40:50
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

And through today's best practices, hopefully, we can see how we can make the implementation of third-party tools in our Agentech workflows much, much better.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (40:50).

## Practical Takeaways

- One is more in the realm of context engineering, the other deterministic guardrails.
- Um so, this means our context window already has less tools in it.
- But when we take screenshots uh in the context of evidence at the end of the flow, we felt that maybe having a separate tool for that was uh was in order.
- The agent will know to differentiate when to use this one or whether to use the other one, specifically in the context of evidence taking.
- And when it chooses that tool in the context of evidence taking, it will This will cause it to have different considerations when choosing the image name, for example.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
