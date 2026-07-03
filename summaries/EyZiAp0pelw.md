# Letting AI Interface with your App with MCP

**Speaker:** Kent C Dodds
**Source:** https://www.youtube.com/watch?v=EyZiAp0pelw
**Duration:** 19:54
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

Today I want to talk with you about how user interaction is changing, how model context protocol and things like it are helping make that change possible and what your role in this is as a product developer or as somebody who's trying to reach users where they want to be and where they want to be is inside of AI assistance.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:54).

## Practical Takeaways

- My talk is letting AI inter interface with your app with MCPS or model context protocol services.
- And that is what model context protocol enables for us is a standard mechanism whereby our AI assistants can communicate with these uh various uh tools and services.
- So let's talk a little bit about the history and architecture of MCP model context protocol and and just like tool calling and that sort of thing in general.
- it could answer questions but like couldn't do anything and managing context ourselves was kind of a pain.
- They don't want to have to load up your uh LLM wrapper with the context necessary and then grab that context and put it into the next tool and whatever.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
