# Strategies for LLM Evals (GuideLLM, lm-eval-harness, OpenAI Evals Workshop)

**Speaker:** Taylor Jordan Smith
**Source:** https://www.youtube.com/watch?v=89NuzmKokIk
**Duration:** 32:28
**Recommendation:** Skim
**Hasan-fit themes:** evals and reliability

## Gist

But to kind of overview what we're going to do today, I'm going to talk a little bit about kind of the issues of setting up a large language model in production and the reason why you need evaluations and benchmarks and all of these things and why that is so critical.

## Why Hasan Should Care

This session maps to evals and reliability. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (32:28).

## Practical Takeaways

- And then I do have some hands-on activities that we'll get to do to use some evaluation um methods and benchmark tools to kind of get a sense of what is out there to use, how we can use those tools, what that might look like to put it all together for an actual production system.
- how much these genai models cost to run at scale in production and the performance throughput latency etc that we need to account for when we have these production system set up and then the knowledge cut off as well is another limitation you know these large frontier models have a knowledge cut off because they're not consistently trained so you might be working with a model that was cut off a year ago so it's not going to have that up-to-date information which is why they you know implement rag systems and agent systems to look out into the internet for more up-to-date info.
- This would be an area where you would need to use those kind of accuracy evals to mitigate again and identify that this is occurring.
- We'll look at both custom evals that aren't benchmarking and also some benchmarks in their hands-on.
- These are just some examples of what is typically considered a model evaluation versus a benchmarking specific test just to kind of get a little bit of a sense.

## Implementation Ideas

- Turn claims into regression tests, eval rubrics, or monitoring dashboards.
