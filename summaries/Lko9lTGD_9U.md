# From model weights to API endpoint with TensorRT LLM: Philip Kiely and Pankaj Gupta

**Source:** https://www.youtube.com/watch?v=Lko9lTGD_9U
**Duration:** 1:40:01
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We're going to talk about building a TensorRT engine, configuring a TensorRT engine automatically, benchmarking it so you can know if you actually did something worthwhile, and then deploying it to production.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:40:01).

## Practical Takeaways

- Basically, what that means is it's just a great set of tools for building high performance models.
- " And that's what ultimately TensorRT LLM is, um a very, very optimized way of executing these graphs using GPU resources, uh not only to get more efficiency, uh better better cost for your money, but also better latency, better time to first token, all the things that we care about when we're running these models.
- So, when you're running an a large language model, you generally have a batch of requests that you're running at the same time.
- So, TensorRT LLM is this toolbox for taking TensorRT and building large language model engines in TensorRT.
- So, the number one thing in my mind that makes it hard to build a general model uh to optimize a model with TensorRT LLM is you need a ton of specific information about the production environment you're going to run it All right.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
