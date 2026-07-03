# Automating Large Scale Refactors with Parallel Agents

**Speaker:** Robert Brennan, OpenHands
**Source:** https://www.youtube.com/watch?v=rcsliSIy_YU
**Duration:** 1:16:21
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

um being able to like just write a couple sentences of English, give it to an agent and let it churn through the task until it's got something that's actually working, running, tests are passing.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:16:21).

## Practical Takeaways

- On the technology side, you have a limited amount of context uh that you can give to the agent.
- You're going to have to uh compact that context window to the point the agent might get lost.
- Uh if you just tell the agent break the model with microservices it's just going to take a shot in the dark.
- uh but for some select tasks like CDE remediation or codebased modernization you can get a massive massive lift you can do you know ending your years of work in a in a couple weeks I want to talk a little bit about what these workflows look like in practice so this loop probably looks pretty familiar if you're used to working with local agents um this is very typical loop that looks a lot like the inner loop of development for you know nonI coding as well but basically you know you give the agents a prompt uh it does some work in the background.
- Uh we might add some high level context to that branch using like an agent or an open hand the concept of a micro agent.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
