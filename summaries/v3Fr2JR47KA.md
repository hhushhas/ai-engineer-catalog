# The Future of MCP

**Speaker:** David Soria Parra, Anthropic
**Source:** https://www.youtube.com/watch?v=v3Fr2JR47KA
**Duration:** 18:46
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

That's an agent shipping its own interface not through like a plugin, not through an SDK, not rendered on the fly by the model on the client side, or hardcoded into the product.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:46).

## Practical Takeaways

- Um just a bit for context, uh React, one of the most successful um open source projects probably of the last decades, took roughly double the amount of time to reach that download volume.
- But if you don't have this, if you need rich semantics, when you need a UI that can display long-running tasks, when you can have when you need things like resources, when you need to build something that is full decoupled and needs platform independence, or you don't have a sandbox, when you need things like authorization, governance, policies, or short to say boring enter boring but important enterprise stuff, or if you want to have experiments like MCP applications or what comes soon, skills over MCP, then I think MCP is just like additional connective tissue that is just yet another tool in the toolbox for you to build an amazing agent.
- Most people when they think about like, "Oh, I MCP," they can't think about like context load.
- And what everybody so far has done because we're in this very early experimentation phase, is to simply put all the tools into the context window, and then be quite surprised that maybe the context window gets large.
- So you see a massive reduction in tool uh use uh tool context usage.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
