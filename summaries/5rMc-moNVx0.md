# Stateful environments for vertical agents

**Speaker:** Josh Purtell, Synth Labs
**Source:** https://www.youtube.com/watch?v=5rMc-moNVx0
**Duration:** 6:51
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, I like to call these stateful environments because they're environments that capture state for the agent.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (6:51).

## Practical Takeaways

- Then OpenAI back when OpenAI was an RL company and and not really a language model company came out with the OpenAI gym.
- As models got better and people wanted them to use more effective tools, they moved to API based tool use.
- Um, and it wasn't really until models got a lot better with Sonnet 35 that people started uh kind of thinking about a work a a product or an artifact that the AI works on, iterates on, improves step over step over a long horizon.
- Um, and I think when claude artifacts came out is probably when a lot of people started thinking about having some abstractions to help agents like claude work on product um and artifacts like cloud artifacts in the web app.
- Um, if you containerize the logic of your vertical app into code that never changes, it's a lot easier to completely revamp your agent when the new model comes out.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
