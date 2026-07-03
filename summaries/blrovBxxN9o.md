# Turning Fails into Features: Zapier’s Hard-Won Eval Lessons

**Speaker:** Rafal Willinski, Vitor Balocco, Zapier
**Source:** https://www.youtube.com/watch?v=blrovBxxN9o
**Duration:** 16:15
**Recommendation:** Skim
**Hasan-fit themes:** evals and reliability

## Gist

And we realized over time that there are different types of evals and the types of evals that we want to build can be placed into this hierarchy that resembles the testing pyramid for those of you that know that.

## Why Hasan Should Care

This session maps to evals and reliability. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:15).

## Practical Takeaways

- Um so with unit test like evals at the base end to end evals or trajectory evals how we like to call them in the middle and the ultimate way of evaluating using AB testing with stage rolls at rollouts at the top.
- It helps you build that muscle of looking at your data, spotting problems, creating evals that reproduce them, and then just focusing on fixing them, right?
- uh we realized we had overindexed on unit test evos when the new models were coming out that were objectively stronger models but we were they were still performing worse in our internal benchmarks which was weird um and because the majority of our evals were so fine grain this made it really hard to see the forest for the trees when benchmarking new new models there was always a lot of noise when we try comparing runs like when you're looking at a single trace it's it's easy to kind of go through the trace and understand what's happening but when you need to kind of look at it from I don't know how to play it again when you want to look at it uh through an aggregation of many traces then it starts getting difficult to understand what's happening why are so many of these passing and some of these are regressing yeah so we realized that uh maybe machine can help us it turns out in that previous previous video when I was investigating uh one experiment inside brain trust there's a lot of looking at that screen trying to figure out what went wrong and we were like hey maybe we can like just give this old data to once again a reasoning LLM and compare the models For us, it turns out that with brain trust MCP and reasoning model, you can just ask it to, hey, look at this run, look at this run and tell me what's actually different about the new model that we are going to deploy.
- It also surfaces a problem with unit test evals a lot which is um different models have different ways of trying to achieve the same goal and unit test evals are penalizing different paths.
- They're like hardcoded to only follow follow one path and yeah our unit test evals were overfitting to our existing models or actually data collecting using that model.

## Implementation Ideas

- Turn claims into regression tests, eval rubrics, or monitoring dashboards.
