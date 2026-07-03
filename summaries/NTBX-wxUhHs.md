# Context Platform Engineering to Reduce Token Anxiety — Val Bercovici, WEKA

**Source:** https://www.youtube.com/watch?v=NTBX-wxUhHs
**Duration:** 23:52
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

This is Valberkichi, Weta's chief AI officer, and I am joined by >> Kellen Fox, head out of the product management team here at WA >> and we're both thrilled to present context platform engineering to you at the AI.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (23:52).

## Practical Takeaways

- And this toolkit features a really cool load generator that Kalen wrote that lets you configure agent swarms uh and agent subtasks with very specific SLOs's being able to cycle through deterministic and random prompt cycles and engineer context platforms with all sorts of model parallelism options, disagregated or aggregated pre-fill and decode options and some really important memory tiering options we're going to be discussing here.
- So moving on, one of the key requirements for context platform engineering really relates to the contact engineering uh insight that our friends at Manis shared with us earlier this summer in their pretty infamous now context engineering blog and they highlighted the fact that KV cache hit rate is the single most important metric for production grade AI agents.
- The reason context platform engineering is so important is shared by the context engineering blog from Manis earlier this summer where they particularly emphasize KV cache hit rates are the single most important metrics for production grade AI agents and context platform engineering quite simply maximizes KV cache hit rates in a very straightforward manner.
- This is a really common example you get where basically you start off you consume context all the way up until you hit a um a high a high watermark set by either the model maximum length or by the inference provider itself.
- So when you look at agentic data especially agentic coding the actual user input is only a really small part of it and you can kind of see it here just visually that if you just scan across the the lighter whiter colors are the um the system prompt and the user text itself and the rest of it is tool use and tool responses.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
