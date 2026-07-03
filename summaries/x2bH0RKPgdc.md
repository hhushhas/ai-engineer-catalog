# What Breaks When You Build AI Under Sovereignty Constraints

**Speaker:** Bilge Yücel, deepset GmbH
**Source:** https://www.youtube.com/watch?v=x2bH0RKPgdc
**Duration:** 19:09
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, we have our rag pipeline ingestion, we have agents, uh these the tools for the agents, and they all run somewhere.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:09).

## Practical Takeaways

- Uh operational sovereignty is about monitoring how these systems behave in production, including model inputs and outputs.
- And agent here is basically an LLM with a system prompt and lots of different tools.
- And as I said, in Haystack, everything like every input coming to a component and every output, but as well as the traces in the agent is easily visible, so you can just connect those spans to your LLM observability tool.
- So, you connect your MCP server that you host locally with uh with MCP tool set, and you give the names of the tools that you want to pick from that MCP server.
- You can add just like you can start defining tools from a Python function or you can connect other components in Haystack like agent component into a tool or maybe there's some functionality that you define like data ingestion or rack pipeline and you can also convert those workflows into tools as well.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
