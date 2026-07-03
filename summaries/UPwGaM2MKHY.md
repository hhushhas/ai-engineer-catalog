# The Log Is The Agent

**Speaker:** Ishaan Sehgal, Omnara
**Source:** https://www.youtube.com/watch?v=UPwGaM2MKHY
**Duration:** 15:11
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

The basic idea of the talk is simple and that is most people think of an agent as the model or the execution environment that it's running in and I think that that's the wrong abstraction.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:11).

## Practical Takeaways

- They'll say that the agent is the model or they'll say that it's the runtime and again as I mentioned earlier, those things matter but they're not the agent.
- It's every user input, every model output, every tool called, tool result, permission, failure and the idea is that every state transition that the agent takes is written to the log.
- This is important because it means that the identity of the agent isn't tied to the runtime or the model or the tools.
- Today, agents are treated as again, these complicated systems that are opaque and they're filled with models and prompts and tool calls, but for the durable session, the log should be primary.
- A teammate can open the session, they can see what happened, a manager can observe without taking over, and even another agent could consume the same session as context.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
