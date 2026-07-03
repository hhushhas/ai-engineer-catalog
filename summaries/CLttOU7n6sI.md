# Respect The Process

**Speaker:** Andrew Dumit, Watershed Technology Inc.
**Source:** https://www.youtube.com/watch?v=CLttOU7n6sI
**Duration:** 16:43
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Sustainability, the vertical that Watershed is in, is one with a ton of expert judgment calls spread throughout it and this has made building and deploying agents both exciting and challenging.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:43).

## Practical Takeaways

- In this talk, I'll go deep on one of the tasks within sustainability that we spend quite a bit of time working on and share learnings from our work deploying coding agents on that task and why do do I doing so has required that we respect the process.
- It did have some problems, but we gave our React agent highly specified tools for exploring and interacting with the graph via function calls.
- Um it lacked consistency where it could struggle to explore sufficiently, and those tool calls on a single graph took a lot of context as it read deeply across these nodes with lots of metadata.
- And it also worsened the context problem because these tool calls really gobbled up context both on the edit side where it actually needed to like make some changes, and on the exploration side where it needed to figure out what changes to make.
- And worse, the agent then really started to hallucinate different parts of the schema as those contexts got eaten, and despite those specialized tools, this led to retries and ultimately errors.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
