# Ship Real Agents: Hands-On Evals for Agentic Applications — Laurie Voss, Arize

**Source:** https://www.youtube.com/watch?v=Xfl50508LZM
**Duration:** 2:04:18
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

So, if you imagine uh asking an eval like if you have an eval that has Sorry, if you have an agent that has is making tool calls, you have to test whether the agent picked the right tool, whether it sent the right parameters to that tool, whether it correctly understood the output of that tool, and that's just adding one tool call, whereas an agent can run multiple tool calls in a single session.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (2:04:18).

## Practical Takeaways

- You don't want to write an eval that says, "I'm expecting it to call tool A and then tool B and then make decision C uh and then get the answer because the agent might find a way to be more clever than that.
- So, every LLM call, every tool call, every agent step with the inputs and outputs at each point, and it also captures and stores your stores your evals and gives you a UI for examining all of that.
- You have to read the traces when you are putting together your initial evals because that is how you know uh what the agent is actually producing and what you should actually be testing because it's so non-deterministic.
- Uh Anthropic, for instance, invested a whole bunch of time and money in tooling that makes it very, very easy for them to read their to read their agent evals.
- Uh a way that evals tend to fail is uh asking questions that are too broad or require context that use that your agent doesn't have.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
