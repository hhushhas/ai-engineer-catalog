# $1 AI Guardrails: The Unreasonable Effectiveness of Finetuned ModernBERTs – Diego Carpentero

**Source:** https://www.youtube.com/watch?v=YZHPEkfy2kc
**Duration:** 43:53
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Our presentation of the attack vectors surface today comprises not only the natural language interface of LLMs, so the prompt, it comprises also the context, the use of retrieval augmented generation and NCPs, the agents, and even the model internals.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (43:53).

## Practical Takeaways

- So, the model context protocol vector is basically an asymmetry exploited between the tool summary and the tool description.
- And there is also follow-up where the researchers exfiltrated WhatsApp chat histories from a using this model context protocol.
- But ideally, we should also add safety checks for all components interacting with our systems like retrieval augmentation NCPs and also within our context memory and agentic plans.
- But there are other attack vectors that they require understanding of longer context like in creative writing generation or checking the MCP tool descriptions or also checking the agentic plants.
- And then they have this off-chip memory which is in general 10 times slower than the on-chip memory.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
