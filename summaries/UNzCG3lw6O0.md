# Building Great Agent Skills: The Missing Manual

**Source:** https://www.youtube.com/watch?v=UNzCG3lw6O0
**Duration:** 20:43
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, agent systems

## Gist

So the description of the skill always ends up in the agent's context and the agent can look in that and go okay based on that description I'm going to invoke the skill and I end up reading the skill.

## Why Hasan Should Care

This session maps to context engineering, agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:43).

## Practical Takeaways

- It sits in the agents context pointing to another file where the agent can go if it wants more context for that context pointer.
- It has a description that ends up in the agents context window.
- But every time you add a model invoked skill into your agent's environment, it increases what I'm going to call the context load on that agent, it adds a new description, which is costing you tokens on every request, but also adding a different thing for the agent to think about.
- So if you have a 100 model invoked skills, that's going to be 100 descriptions inside the context for your agent.
- That means I get to keep the context load on the agent as small as possible, but it does impose more of a cognitive load on me.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
