# Don't Build Agents, Build Skills Instead

**Speaker:** Barry Zhang & Mahesh Murag, Anthropic
**Source:** https://www.youtube.com/watch?v=CEvIs9y1uog
**Duration:** 16:22
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

At this point skills can contain a lot of information and we want to protect the context window so that we can fit in hundreds of skills and make them truly composable.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:22).

## Practical Takeaways

- Developers are using and building skills that orchestrate workflows of multiple MCP tools stitched together to do more complex things with external data and connectivity.
- The first is this agent loop that helps manage the the model's internal context and manages what tokens are going in and out.
- And now we can give the same agent a library of hundreds or thousands of skills that it can decide to pull into context only at runtime when it's deciding to work on a particular task.
- And this emerging pattern of an agent with an MCP server and a set of skills is something that's already helping us at Enthropic deploy Claude to new verticals.
- This means exploring testing and evaluation, better tooling to make sure that these agents are loading and triggering skills at the right time and for the right task, and tooling to help measure the output quality of an agent equipped with the skill to make sure that's on par with what the agent is supposed to be doing.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
