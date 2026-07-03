# From Mixture of Experts to Mixture of Agents with Super Fast Inference

**Speaker:** Daniel Kim & Daria Soboleva
**Source:** https://www.youtube.com/watch?v=tzRvcTEapzo
**Duration:** 53:15
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

So how do we actually um improve the models and thus like serve the large models because as you increase the number of parameters you have to come up with a like a way to scale it to scale your inference infrastructure and make it more efficient.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (53:15).

## Practical Takeaways

- So the basically how it works is that you send inputs to multiple LLMs with custom system prompts like agents and then each model gives its own response and then basically a final model combines all of the answers from all the individual models into a single answer and this has shown that it outperforms even frontier models on certain uh benchmarks um as benchmarked by together AI which who's the ones that kind of came up with this idea and this term.
- Um, so I want to show you an example of a startup that's actually building in production with Cerebras in this mixture of agents model.
- So this type of system allows you to take advantage of non-frontier models, even open source models that may not perform as well on benchmarks, and turn them into performing better than frontier models.
- And you here you can adjust things like the temperature, the model as well as the specific prompt that you want to put in the agent and also rename it, you know, to something fun.
- It's a solid B with literally just by changing the model model like the the model that it uses for the main agent.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
