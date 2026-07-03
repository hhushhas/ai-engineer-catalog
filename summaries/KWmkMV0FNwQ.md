# Building Alice’s Brain: an AI Sales Rep that Learns Like a Human

**Speaker:** Sherwood & Satwik, 11x
**Source:** https://www.youtube.com/watch?v=KWmkMV0FNwQ
**Duration:** 22:18
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We have Alice who is our AI SDR and then we also have Julian who is our voice agent and we have more workers on the way.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:18).

## Practical Takeaways

- So in our in the old version of our product, the seller would be responsible for pushing context about her uh about their business to Alice.
- Um and we do have multimodal models that are one solution to this, but there are lots of restrictions on multimodal models that make it u that make parsing still relevant.
- The last thing that we didn't really consider was cost uh to be honest and this was because we were this system was pre-production.
- We started off with just traditional rag which is kind of a play on you're pulling information and then enriching your system prompt for an LLM API call right and then eventually that turned into an agentic rag form where now you have all these tools for getting information retrieval and then you attach those tools to whatever agentic flow that you have and then it calls the tool as a part of its larger flow.
- Right now something we we're seeing emerge in the last couple of months is deep research rack where now you have these deep research agents which are coming up with a plan and then they execute them and the plan may contain one or many steps of retrieval.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
