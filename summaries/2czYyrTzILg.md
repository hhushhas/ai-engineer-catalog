# From Chaos to Choreography: Multi-Agent Orchestration Patterns That Actually Work

**Speaker:** Sandipan Bhaumik
**Source:** https://www.youtube.com/watch?v=2czYyrTzILg
**Duration:** 26:29
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

For the last 2 years, I've been deploying multi-agent AI systems in production.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (26:29).

## Practical Takeaways

- I'll share you a very basic production war story about race conditions and why complexity explodes when you go from one agent to five agents.
- Agent D just updated the shared state that Agent B was reading, and Agent E just crashed and took the down this entire workflow.
- The risk assessment agent, on the other hand, read from the database 500 milliseconds later and got a score of 680 for the same customer.
- You use choreography when your workflow is naturally event-driven, when agents need to operate independently, when you are adding agents frequently and don't want to update a central coordinator.
- The interesting quadrant is the top right, where you need complex workflow, but agents need autonomy.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
