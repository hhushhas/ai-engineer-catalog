# Five hard earned lessons about Evals

**Speaker:** Ankur Goyal, Braintrust
**Source:** https://www.youtube.com/watch?v=a4BV0gGmXgA
**Duration:** 19:46
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um so the first thing is I think it's super important for you to uh understand and define um whether evals are actually providing value uh for your organization or not.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:46).

## Practical Takeaways

- Uh so the first is um if a new model comes out uh you should be prepared um uh via your evals to be able to launch an update to your product within 24 hours that incorporates the new model.
- And I think one of the most important things we've learned uh together with some customers is that um you can't just take tools as a reflection of your APIs or your product as it exists today.
- Um, but uh we we've had an eval for a while that tells us how well this feature might work and we run it every few months and you can see you know it wasn't uh that long ago that GPT40 was the best model out there.
- Um so that means uh thinking holistically about your um AI system as the data that you use for your evals, the task which is you know the prompt, the agentic system, tools etc and the scoring functions and and every time you think about making um you know your your app better you need to think about improving this overall system.
- So the the the the point that we're trying to make here is that um I think in modern agentic systems uh tools actually like very very significantly dominate the token budget of the LLM.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
