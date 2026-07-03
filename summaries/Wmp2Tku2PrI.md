# Vibe Engineering Effect Apps

**Speaker:** Michael Arnaldi, Effectful
**Source:** https://www.youtube.com/watch?v=Wmp2Tku2PrI
**Duration:** 1:43:04
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

For example, coding agents are generic models that have been reinforced that they have had passes of reinforcement learning to operate on code bases.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:43:04).

## Practical Takeaways

- The whole post-raining phase of a of a large language model dedicated to coding is letting the model rip through code bases and having evaluations that tells the training phase how is the model performing.
- One could argue the model already has access to library code by having it in npm in node modules but coding agents have been trained to focus on your own code not on the code that is on node modules.
- For example, we have been experimenting with a coding agent that has a single tool call which is called execute and it can execute arbitrary TypeScript code including calling Bosch through TypeScript.
- So what I'm doing now is like most of what I do when I operate a coding agent at scale in a codebase even if the codebase has no concept of AI like if I start in a project that is brownfield codebase existing from five to 10 years no context set it up the first thing I do is let the model explore the code clone the main libraries that are used if you're using a framework like tanstack or so on and so forth clone the code of tanstack router if you're using zvel clone the code basel ask the model to generate best practice files and so on and so forth once you have all of it the model is going to be much more uh efficient so now that we have a little bit of context on http apis we can start implementing one uh I do want to check something quickly because I'm using bun and I'm using vest uh there's a best run does vest run actually uses bun as the runtime or does it use note because if I recall there was a tag that I had to pass to V test to let it use bun and I don't want our test setup to defer from our uh what is it doing?
- >> I feel like generally it's a good idea but there are some caveats to that for example even the agents.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
