# RFT, DPO, SFT: Fine-tuning with OpenAI

**Speaker:** Ilan Bigio, OpenAI
**Source:** https://www.youtube.com/watch?v=JfaLQqfXqPA
**Duration:** 1:46:15
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Uh I'm on the developer experience team at OpenAI and so I do a lot of very early testing on new products and new directions that we're taking the API.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:46:15).

## Practical Takeaways

- Now, how to optimize like prompt context, like prompt and context and tools and scaffolding.
- like rag um and other solutions like agentic retrieval are much much better if you want to teach the model new information um this is called uh I think low rank adaptation can anybody check me on that yeah I see some knots cool um and essentially for those who are interested you should look more into it's a really really clever way where you take the model weights and you decompose them into two matrices um and then that essentially gives you a much smaller set of weights that you need to update in order to affect the overall model behavior.
- Now uh one of our partners, one of our customers was working on a low latency function calling use case kind of assistant style based on like taking action, right?
- And so you would uh the user would say something um and the the model had to act um but it was in an extremely latency constrained uh scenario right so they wanted to use back then it was 3.
- I will say the models are pretty good at generalizing even if you do stuff that is slightly out of distribution because they have such a large set of weights in like a pre-existing world model.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
