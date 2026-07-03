# MCP = Mega Context Problem

**Speaker:** Matt Carey
**Source:** https://www.youtube.com/watch?v=YBYUvGOuotE
**Duration:** 22:42
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

And the you probably This is like all like recent history, so everyone's probably aware of this, but before MCP we had like uh people would bundle all their tools in their agents and then they would keep them bundled in their agents and then if I was like trying to interact with Gmail or something, I would make loads of tools for Gmail, bundle them with my agents, and that would be it.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:42).

## Practical Takeaways

- And the service providers were like, "Oh, we can we can like uh give everyone MCP tools and then everyone can use the same standardized tools and we just make it once and we provide it as another surface for people to consume our API.
- You put all of the the You try and make naive tools that have every single API endpoint and you fully explode a context window.
- So, like for instance like uh one of our one of our product suites, we might have like six tools in our MCP server, but the total API maybe has like 30 endpoints.
- We just shouldn't be dumping loads of tools into context.
- They have a uh search tool which loads the tools that they need when they need them into context.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
