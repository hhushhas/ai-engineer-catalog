# AI Frontiers in Trust and Safety  Combatting Multifaceted Harm on Tinder at Scale: Vibhor Kumar

**Source:** https://www.youtube.com/watch?v=kwnCvA9l-TY
**Duration:** 14:36
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Next we'll dive specifically into how to actually use LLMs for detecting trust and safety violations in text, covering the end-end stack from training to fine-tuning to productionization, and an overview of how we're doing this at Tinder.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:36).

## Practical Takeaways

- It's easier than ever to do fine-tuning with the low-level details being abstracted away, and there's libraries built for every stage of model development and productionization.
- The cost of doing this is inversely proportional to the true prevalence of the harm, um but that cost is still pretty negligible, um and it provides a metric that alone is actually really helpful to track for T&S operations teams anyways.
- Tinder has a huge real-time volume of profile interactions, and hitting OpenAI APIs that often doesn't scale in terms of cost, latency, and throughput.
- By fine-tuning our own models, we have full control over the model weights and can fine-tune when production performance inevitably degrades, um without needing to worry about changes in the underlying base model.
- Um in production, we use LoRAX, which is an open-source framework that allows users to efficiently serve thousands of fine-tuned models on a single GPU.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
