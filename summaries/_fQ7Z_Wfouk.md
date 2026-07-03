# Why building eval platforms is hard — Phil Hetzel, Braintrust

**Source:** https://www.youtube.com/watch?v=_fQ7Z_Wfouk
**Duration:** 25:39
**Recommendation:** Skim
**Hasan-fit themes:** evals and reliability

## Gist

So I'm fortunate because throughout all of our customers I I see what the state of the art is in in both evals and and agent observability.

## Why Hasan Should Care

This session maps to evals and reliability. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (25:39).

## Practical Takeaways

- The way that we can get to agent quality two main pillars through evals and through observability.
- Evals, that's what you're doing with your agent before it gets to production, as you're experimenting, so that you can become confident in your agent.
- And I'm running evals across those two different agent runs so that I can bubble up scores.
- This is where the rubber starts meeting the road because the best way to perform evals is to um really think about the failure modes that your agent can fall into um and build scoring functions around those failure modes.
- Again, the benefit of that is that you got you're starting to get far higher signal from how users are interacting with uh with your agents and you can use those real interactions uh so you can um almost think about evals almost like you're rerunning production in a safe environment.

## Implementation Ideas

- Turn claims into regression tests, eval rubrics, or monitoring dashboards.
