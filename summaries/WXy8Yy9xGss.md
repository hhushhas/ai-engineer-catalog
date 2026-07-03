# CI in the Era of AI: From Unit Tests to Stochastic Evals

**Speaker:** Nathan Sobo, Zed
**Source:** https://www.youtube.com/watch?v=WXy8Yy9xGss
**Duration:** 14:50
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

And recently I recorded a video because time is short and I this is obviously sped up massively but we launched Agentic Editing in Zed and I wanted to talk about the approach that we took to test this uh and be empirical and deliver a reliable product that does this effectively.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:50).

## Practical Takeaways

- But in the programmatic software world, an eval is more like a test that passes or fails.
- like we come from this very different perspective of automated testing and so right away you know we had this traditional datadriven eval and then backing that you know in the same program we al uh that runs all these eval basically compiles a headless copy of zed checks out a repo runs the agent tries to make it do things um we right away got into like making the eval more programmatic you can see here the conversation is literally a function and then our ability to sort of come in here and write code that performs assertions about what the agent did.
- And so when we wrote this eval, we were able to drive out uh one really simple failure mode, which is when we run the GP tool, this is what our original like dumb implementation of the GP tool looked like.
- So you can see in this case we're saying we want to add uh a window argument to this tool run trait method in this particular file name right but if this is what the model sees then we're in trouble right and so what we ended up you know driving from this stochastic test here is a more deterministic test right where I'm going to go ahead and set up the project uh perform this search for fn run and Then uh we use tree sitter which is um Max's parsing uh parser generator framework to actually expand out the match to the syntactic boundaries.
- Um, and so this I I think this motion of sort of starting with the zoomed out eval then zooming into a sort of stochastic unit test that's still random and interacting with the model but is more focused in on a particular aspect of the experience and then finally that driving that even further to an actual good oldfashioned test.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
