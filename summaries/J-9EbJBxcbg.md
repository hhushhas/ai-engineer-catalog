# Intro to GraphRAG

**Speaker:** Zach Blumenfeld
**Source:** https://www.youtube.com/watch?v=J-9EbJBxcbg
**Duration:** 1:18:35
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We'll build a very simple agent that will use some retrieval tools and you'll get to see how some of that works and we'll wrap up after that with some resources.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:18:35).

## Practical Takeaways

- Um so while everyone gets set up here I'll talk a little bit about just what graph rag is in general to kind of motivate what we're doing here.
- It's generalized and basically the idea is that you have your agent over there.
- Like we have agents, we can have tools, and we can go pick stuff from data sources.
- And by making that schema available to the agent and making tools available to the agent, um, you're going to be able to have a lot more control over how data is retrieved more accurately, explain the retrieval logic better.
- I think in general for a lot of what we're seeing with agents I find it's helpful to have a smaller data model if possible um especially if you're doing different types of dynamic query generation um so to keep that in mind but as things are getting better we can pull back the graph schema and and offer it to agents and I'm we're noticing that as agents sort of keep iter or as language models really keep iterating they're starting to get better and better at interpreting so whenever you want to do traversals in a low latency a between two data points.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
