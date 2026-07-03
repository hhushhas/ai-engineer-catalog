# Efficient Reinforcement Learning

**Speaker:** Rhythm Garg & Linden Li, Applied Compute
**Source:** https://www.youtube.com/watch?v=o15AaYl7Wu0
**Duration:** 20:19
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

RL mechanically is the is the tool that we use in order to bring these out of distribution data sets in distribution for the models today.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:19).

## Practical Takeaways

- Then we'll take an open source model, say one of the GPOSS models or one of the llama models, and we have the model attempt each of those four problems 100 times.
- We need our runs to be fast so that we can train a model and deliver it to a customer very quickly on the order of days.
- And importantly, and this is a point that I think um you know it's it's easy to miss, we need our estimates for how long these training jobs will be to be very low variance because we don't want to just be generally fast.
- So as you increase how much stale you tolerate, you have less idle GPUs in general.
- So in GPU memory, we have the model weights, the activations, and some runtime state called the KV cache in memory.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
