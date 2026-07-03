# Frontier results, on device

**Speaker:** RL Nabors, Arize
**Source:** https://www.youtube.com/watch?v=fWXJM-J0ZB8
**Duration:** 30:52
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Have you ever had your CTO ruin your agentic workflow with a slight change of prompt or an LLM migration?

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (30:52).

## Practical Takeaways

- Well, you probably need Arize's observability platform for models and the agents who love them.
- Every time you reach for foundation models like GPT-5 or Claude, it's costing you, your users, and the environment.
- Now, token costs have been falling as of late, but total inference spend has been rising because agent can reasoning workloads consume tokens way faster than prices are dropping.
- Most small language models uh for mobile and web are deployed with quantization, that is to say, 8-bit, 4-bit, and that can have a quarter disk and memory requirements.
- You see on the left you've got Claude, but on the right you have Goose, which is an open an open agent harness that has a a really nice interface for chatting with models.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
