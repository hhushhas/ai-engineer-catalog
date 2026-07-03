# Building Generative Image & Video models at Scale

**Speaker:** Sander Dieleman, Google DeepMind
**Source:** https://www.youtube.com/watch?v=xOP1PM8fwnk
**Duration:** 40:46
**Recommendation:** Skim
**Hasan-fit themes:** voice and multimodal, infra and deployment

## Gist

And I want to This talk is kind of a bit of a behind-the-scenes perspective on like everything that goes into training these models at scale.

## Why Hasan Should Care

This session maps to voice and multimodal, infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (40:46).

## Practical Takeaways

- So, I have more to say about the modeling and the and the sampling side of things, for example.
- Modeling is going to be sort of about the core mechanism behind diffusion models.
- I just like to explain that in an intuitive way, and I think that's that's kind of useful to understand why these models are able to work as well as they do for for audio-visual data generation.
- I'll talk a bit more about sampling as well because uh diffusion models have sort of a very flexible um uh sampling regime.
- Uh I'll talk about distillation, which in the context of diffusion is uh not so much about making the model smaller, but more about reducing the number of steps that you need to get a good sample.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
