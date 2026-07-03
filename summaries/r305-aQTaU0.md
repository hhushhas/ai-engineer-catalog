# Text Diffusion

**Speaker:** Brendan O’Donoghue, Google DeepMind
**Source:** https://www.youtube.com/watch?v=r305-aQTaU0
**Duration:** 28:03
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So in in the standard vanilla Gemini Gemma you know, GPT whatever um generation of text you do this you know, you have some context that comes in and you want to generate some response to that and the model does it one token at a time.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (28:03).

## Practical Takeaways

- And like like the fusion models in general, you can do things like in-place editing where you say like fix the last tokens and give me the prefix that corresponds to those tokens and stuff.
- All right, so So, when we're serving uh an auto regressive model, these these chips are memory bound.
- So, if you can do, say, 24 passes to generate 256 tokens, you'll be doing 10 times fewer memory transfers than an autoregressive model.
- So, that's that's the real reason, that's the hardware reason why uh text-to-image models are much lower latency than autoregressive models.
- So, diffusion models in general have this very nice property where you can so, take an image like in this example, you know, cut something out of it or whatever or give it a little prompt, and it'll fill it in, and you can use the context uh that that you haven't cut out to fill in the the piece you've cut out correctly.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
