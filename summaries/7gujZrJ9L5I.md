# How Google DeepMind Runs Agents at Scale

**Speaker:** KP Sawhney & Ian Ballantyne, Google DeepMind
**Source:** https://www.youtube.com/watch?v=7gujZrJ9L5I
**Duration:** 25:13
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

We're going to do an agentic panel today to talk a little bit about how DeepMind thinks about agentic software, how we build kind of our own stacks.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (25:13).

## Practical Takeaways

- So in terms of like the workflow, this is kind of I guess pretty common to like a lot of different agent harnesses at the moment.
- Um, and then, you know, using the more advanced uh, models for for specific uh, components of the agentic system.
- Um, particularly with these really complicated uh, workflows, how how do you actually evaluate that it was successful?
- So, looking into things like mock TPUs so that, you know, you can test the harness itself and and the agentic flow, but not necessarily using up a ton of uh, TPU hours.
- Because these these agentic systems are so token hungry and the subscription model doesn't really work for that.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
