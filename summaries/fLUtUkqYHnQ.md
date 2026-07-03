# Everything I Learned Training Frontier Small Models

**Speaker:** Maxime Labonne, Liquid AI
**Source:** https://www.youtube.com/watch?v=fLUtUkqYHnQ
**Duration:** 20:13
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So first of all, the small models they're memory bound um because the hardware is is what it is, right?

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:13).

## Practical Takeaways

- And so that means that they are usually not general purpose chatbots like ChatGPT.
- You can see that the cost ratio is really in favor of short conv which is great because we said that this is very latency sensitive.
- Um All these models don't have necessarily the same size but it gives you a rough picture and you can see that the short conv really allow LFM 2 architecture to be a lot faster and also use less memory.
- 5 model is significantly better than the the previous version LFM 2 350M on a lot of different benchmarks.
- So what we wanted to do is we wanted the model to be very very good at data extraction and at tool use.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
