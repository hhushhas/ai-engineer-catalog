# How agents broke app-level infrastructure

**Speaker:** Evan Boyle
**Source:** https://www.youtube.com/watch?v=_-oIuRH4oGA
**Duration:** 13:32
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

That might mean chaining a couple of very specific tailored prompts together that we've written eval uh and more carefully controlling the context.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (13:32).

## Practical Takeaways

- And so that workflow that we built when working on a previous product took 3 to four minutes.
- So we built a lot to make this easy in our core product uh when we were working on you know agentic workflows uh and we ended up turning a lot of this into an open source library.
- uh it's it takes inspiration from React's component model and applies it to the back end because we know that abstraction is bad when building agents.
- So we have components that are reusable, item potent, independently testable steps and then workflows that are collections of components that run together.
- And so this all gets deployed to a serverless platform that we built that's tailor made for longunning workflows and building agentic UIs uh for processes that run in the background.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
