# How We Built Zeta2: Training an Edit Prediction Model in Production

**Speaker:** Ben Kunkle, Zed
**Source:** https://www.youtube.com/watch?v=phchDt63qAA
**Duration:** 10:50
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, I'm going to try and leave enough time for questions at the end, but it's if you're not familiar with training models, uh, it's going to be a bit of a whirlwind tour.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (10:50).

## Practical Takeaways

- So, if you're not familiar with edit prediction, it's essentially giving the model a region of code around the cursor, asking them to predict the next edit that you're going to make.
- In order to do that, we use a process called distillation where we take a frontier model, we give it all of that input, and we say, "What prediction would you make?
- Um, we're generally doing 100,000 examples to train a model.
- We generally don't train off of the actual settled state just because it's still noisy, but we can train off of, you know, what was closest to the settled state.
- Um, just making sure we're not training the model on the same stuff we're testing it on.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
