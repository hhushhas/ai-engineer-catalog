# Let LLMs Wander: Engineering RL Environments

**Speaker:** Stefano Fiorucci
**Source:** https://www.youtube.com/watch?v=71V3fTaUp2Q
**Duration:** 40:35
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Today, I'm going to talk about reinforcement learning environments for language models evaluation and training.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (40:35).

## Practical Takeaways

- They are natural gyms for LLM agents that can use tools, run code, and solve multi-step tasks.
- The underlying idea is more general, and it does where the outcome can be verified automatically, like a correct answer, a won game, a successful tool call can serve as a training signal.
- Language models can now be given tools, from a weather API to a terminal, and this makes environments for training and evaluation more complex and critical.
- The library provides base classes for several setups, single-turn environments with just one interaction between the model and the end, multi-turn environments, tool environments where the model is equipped with tools, and several others.
- Reverse text is a a simple environment to evaluate or train language models on their ability to reverse a string of text.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
