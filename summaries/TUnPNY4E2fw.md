# Road to 5 Million Tokens: Breaking Barriers in Long Context Training

**Speaker:** Max Ryabinin, Together AI
**Source:** https://www.youtube.com/watch?v=TUnPNY4E2fw
**Duration:** 15:50
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

And today, I'm going to tell you about our research project, which is called Road to 5 million sequence length, breaking memory barriers in context parallelism.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:50).

## Practical Takeaways

- Also, we are an inference provider, so if you have an app which is reliant on open-source model inference, uh you can uh work with us and we'll provide you with the fastest way to launch and use AI models with more than 200 models in our portfolio, uh options for deployment, which include serverless and dedicated inference, and a ton of advanced optimizations, which I will not be able to speak about today.
- Uh I think in the last few months or like at least a year or so, we're seeing a lot of interest in the community, uh both on the system side and on the research side, in training long context models.
- First of all, with the uh like explosion in popularity of agents, you can see a lot of different applications where you might want to put as many tokens as you want in your context, and you want the model to leverage that context effectively.
- Um to do that all effectively, you need to make sure that the models are able to process that context and work with it correctly at the training time.
- So, the problem here is that if you are taking a standard transformer-based language model and trying to extend its context, you can run into two bottlenecks.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
