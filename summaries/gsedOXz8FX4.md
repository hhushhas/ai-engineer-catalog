# Memory Masterclass: Make Your AI Agents Remember What They Do!

**Speaker:** Mark Bain, AIUS
**Source:** https://www.youtube.com/watch?v=gsedOXz8FX4
**Duration:** 51:25
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

So uh you know if in case you're just curious about memory I'm building a memory tool on top of the graph and vector databases.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (51:25).

## Practical Takeaways

- So what you can see here on the side is effectively the agentic logic that is reading, writing, analyzing and using all of these uh let's say preconfigured set of weights and benchmarks to to analyze any person here.
- Um primarily we're going to take a look at semantic memory in this um MCP server but we are currently developing it and we're going to add additional memory types as well um which we'll discuss uh probably later on in the presentation.
- And this is really the core piece of why using a uh graph database as sort of the context layer here is so important because we can we can identify how these um entities are actually related to each other.
- And so we can read the entire knowledge graph back as context.
- Um, I was testing MCPS of Neo4j, Graffiti, Cogni, Mezier just before the workshop and I'm a strong believer that this is our future.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
