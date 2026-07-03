# How fast are LLM inference engines anyway?

**Speaker:** Charles Frye, Modal
**Source:** https://www.youtube.com/watch?v=DeFF3J8T5Pk
**Duration:** 16:07
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Um, yeah, I wanted to talk about some work I've done recently on trying to figure out uh just how fast these inference engines are when you run open models on them.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:07).

## Practical Takeaways

- Um, but for me as somebody coming from like having trained my own models a lot, it was like, oh man, I want I want to I want to touch the weights.
- They want to run it on um more generic infrastructure like what we have at Modal.
- Uh so we ran a giant benchmark over um like 10 or so different models on VLM suang and your TLM on about 10 different context lengths um and put that all up on the internet.
- So to start we've got our benchmarking results benchmarking methodology in detail the open source code for it and a little executive summary.
- Reach for context instead because it's going to be cheaper and you're going to get better perform like you're you're going to find it easier to hit your latency SLAs's.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
