# Stop AI Agent Hallucinations: 5 Techniques + Production Patterns

**Speaker:** Elizabeth Fuentes, AWS
**Source:** https://www.youtube.com/watch?v=vJukHCIv7Ck
**Duration:** 55:19
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

Flights, hotels, payments, weather, cancellations, all all our dummy tools are not like a travel agent for real, but every time that user sends a message, all the 29 tools description go into the context windows.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (55:19).

## Practical Takeaways

- And if your agent has memory, the rows to every conversation adds more context that gets sent with every single message.
- If our travel agent [snorts] has 29 tools, that adds up to somewhere around 3,000 tokens per call, just for the tool description.
- By creating a tool database, we can filter the tools that the agent may need before the agent the symbol.
- I have the A strands agent and because I'm using open AI as a model invocation, I'm using the API from open AI.
- You can use open AI strands agent with all our my god, almost all the model provider.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
