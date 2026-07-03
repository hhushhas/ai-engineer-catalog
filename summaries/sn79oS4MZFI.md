# Case Study + Deep Dive: Telemedicine Support Agents with LangGraph/MCP

**Speaker:** Dan Mason
**Source:** https://www.youtube.com/watch?v=sn79oS4MZFI
**Duration:** 1:56:13
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

This is almost all just tool calling and MCP and you know other things that are are pretty portable across most of the models.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:56:13).

## Practical Takeaways

- Um, you know, that it was worth spending the money to just have sort of the best available context of the model at any given point.
- And this is going to be a little weird out of context, but hopefully this will give you a sense of of what we were trying to solve for.
- When you mention about the system state, I I heard before the L has a context or some state object.
- Um and it is where we're going to be moving I think a lot of that context, right?
- Um, but in the context of that one from when the patient responded, you know, to when I actually come up with my response to them, that whole thing is going to be in its memory at one moment.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
