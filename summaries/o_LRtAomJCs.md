# Human seeded Evals

**Speaker:** Samuel Colvin, Pydantic
**Source:** https://www.youtube.com/watch?v=o_LRtAomJCs
**Duration:** 12:02
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

I think generally the accepted definition of an agent.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (12:02).

## Practical Takeaways

- Well, probably not tens of megabytes necessarily in context, but like definitely, you know, enormous documents and and the schema is very simple, but this could be an incredibly complex nested schema models are still able to do it.
- But there are definitely cases where models, even the smartest models, don't uh pass validation.
- So you'll see our agent run we had two uh two calls to the model in this case Gemini flash.
- And so if you register tools with this agent they you can have type safe dependencies to tools which I will show you in a moment.
- So if I open this example here, we have this is an example of memory, long-term memory in particular where we're using a tool to record memories and then uh another tool to be able to retrieve memories.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
