# OpenThoughts: Data Recipes for Reasoning Models — Ryan Marten, Bespoke Labs

**Source:** https://www.youtube.com/watch?v=liG97YXaTSA
**Duration:** 19:59
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

So I like this graph from JSON which shows this incredible performance that's happened in the last several months where models are getting much much much better on certain benchmarks.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:59).

## Practical Takeaways

- And it seems that certain tasks like Amy, which are competitive math problems, really respond to models when they're able to think step by step and do these long chain of thoughts.
- And then compared to the Neimatron nano model which is trained on a different base model um we are also outperforming on some benchmarks and similarly competitive on some others.
- The other surprising thing that we found was that a better model in terms of its own performance on evaluation benchmarks does not necessarily mean it's a better teacher model.
- We also have this open source library on GitHub called Evalchemy uh which takes a care takes care of this and also takes care of the um sharding and parallelism.
- If you if you only have a handful of questions, you should run your model on those evaluation sets many times in average.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
