# Task Fidelity Scaling Laws

**Speaker:** Kobie Crawdord, Snorkel
**Source:** https://www.youtube.com/watch?v=YYH0DMQr30A
**Duration:** 20:40
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We're talking specifically in the context of uh Agentic uh terminal bench style tasks.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:40).

## Practical Takeaways

- Um we want to show that when you're looking at how uh you look at the tasks themselves and how they're built that that what what we do in the Agentic context uh is still also governed by the same data quality premise.
- Um if you've worked with these kinds of environments, the Harbor framework, uh Open Env, uh when you built tasks for Agentic purposes, what we're talking about in the context of evaluation, benchmarking RL, is that we are creating an environment in which that is going to run.
- Um the general tendency that we are taking away from this is that the accepted tasks are producing cleaner failures.
- These are failures due to the task itself being more difficult, truly more difficult that that the steps that it needs to to accomplish are are more difficult and that that means that this is a test that would be actually very useful for the model to be able to hill climb on, provide some data samples that could help it actually be able to be improved in terms of those performance patterns versus something where it's just like a failure that's not super meaningful in terms of like it's just a tactical thing that's happening inside of the context that's not working.
- Um but um one of the things that we saw in surveying and and working with for example working with the terminal bench team um and looking at the tasks that were in terminal bench one versus what we did for terminal terminal bench two and in some other contexts around some of this we bench um some of the variants of this we bench we've been some doing some analysis internally to compare the various public benchmarks that are out there and looking at what what we see across those things and when we look at that um you certainly see that the uh the the the failure rates and like which you know where the where the model models have been improving over time um whether they're getting to saturation faster or the the benchmarks themselves are getting to saturation faster.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
