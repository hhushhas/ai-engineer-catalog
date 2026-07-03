# Dream Machine: Scaling to 1m users in 4 days

**Speaker:** Keegan McCallum, Luma AI
**Source:** https://www.youtube.com/watch?v=EY4O9M6AsWI
**Duration:** 19:03
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We're expecting significant traffic for the launch of Dream Machine, Luma's first video model, and we were woefully unprepared for what came next.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:03).

## Practical Takeaways

- We're a foundation model lab and we're aiming to build general multimodal intelligence that can, you know, generate, understand, and operate in the physical world just like a human can.
- And uh to give you some sense of kind of what our models can do and where we're at today, um this is a feature we dropped yesterday, a demo video for it.
- So we we reached for Triton inference server um which is kind of a classic um generalpurpose model serving uh server but there there were some issues with it.
- Um, worse though with these video models, you're needing to uh run these on multiple GPUs and actually multiple nodes in a lot of cases to get to the latency you need.
- Um you may need to optimize certain optim uh operations uh depending on your model to make things fast, but it's relatively easy to uh to get started.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
