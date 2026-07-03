# Deterministic Infra for Non-Deterministic AI Agents

**Speaker:** Nishant Gupta, Meta Superintelligence Labs
**Source:** https://www.youtube.com/watch?v=APh1Vx0oLmQ
**Duration:** 7:14
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

I'm a software engineering tech lead at Meta, working on building the training and inference infrastructure.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (7:14).

## Practical Takeaways

- And today, we're going to be talking about building deterministic infrastructure for non-deterministic AI agents.
- At Meta and across the industry, we are seeing agents move beyond answering questions and beginning to plan, call tool calls, coordinate workflows, and make decisions that affect production systems.
- We're trying to run autonomous systems on infrastructure that was designed for deterministic workflows.
- The majority of the engineering effort moves below the model layer into orchestration, monitoring, safety evaluation, and recovery systems.
- What we see instead are infrastructure failures, recursive reasoning loops, workflow dead locks, retry amplification, context corruption, memory poisoning, cost explosions.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
