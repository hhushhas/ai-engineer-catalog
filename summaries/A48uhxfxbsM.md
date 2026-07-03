# Agent Optimization with Pydantic AI: GEPA, Evals, Feedback Loops

**Speaker:** Samuel Colvin, Pydantic
**Source:** https://www.youtube.com/watch?v=A48uhxfxbsM
**Duration:** 1:20:40
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

So, if you're if you're using the the production version, you can see requests that your team are making or that your agents are making.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:20:40).

## Practical Takeaways

- And they switched from basically just giving the entire website to GPT-5 and saying what is this to using an agent and using a Quen model and Jeppa to optimize the prompt.
- There is a slightly annoying characteristic where Jeppa is sync, not async, and so if you try and run each time it runs the proposer agent, it runs it in a new um async context.
- So, you can see that we um evaluate um the the agent and then we call the proposer agent here.
- Um and then the input, which is basically Jeopardy's description of the context for the proposer agent to enable it to come up with a new prompt.
- So, we have Is that the agent process, the prompt that is in user prompt of the agent, how how many batches it's running, how many So, I think you can see it here where it's running the evals.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
