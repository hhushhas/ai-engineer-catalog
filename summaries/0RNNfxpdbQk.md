# Medic for Apache Spark - First Aid for Failing Jobs

**Speaker:** Drasko Profirovic, Pinterest
**Source:** https://www.youtube.com/watch?v=0RNNfxpdbQk
**Duration:** 11:21
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Today, I'll cover Medic for Apache Spark, which is our agentic diagnostics tool built to troubleshoot Spark failures.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (11:21).

## Practical Takeaways

- The agent would also need to provide suggested fixes that are grounded in the context of the job.
- We started by exposing our data resources by way of the model context protocol as a way to connect them to the LLMs.
- At this point, we could start an LLM conversation with the MCP tools enabled and ask the model to reason about our Spark job.
- As an example, large tool outputs from logs would click quickly consume tokens and brought a halt to the agent's reasoning.
- Lastly, our end-to-end testing strategy up to this point relied on manual tests from production.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
