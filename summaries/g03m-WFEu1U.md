# How to Improve your Vibe Coding

**Speaker:** Ian Butler
**Source:** https://www.youtube.com/watch?v=g03m-WFEu1U
**Duration:** 7:30
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um we've been working on evals for how good agents are at finding and fixing bugs for the last several months.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (7:30).

## Practical Takeaways

- Um, this is an issue when you're vibe coding because these agents can quickly overrun your codebase with unintended bugs that they're not able to actually find and then later then fix.
- uh three out of six agents on our benchmark had a 10% or less true positive rate out of 900 plus reports.
- Um, when you're creating your rules files, try to feed some specific security information like the OAS top 10 to the model.
- Right now we find when you don't actually supply models with security or bug related information, their performance is significantly lower than otherwise.
- So you always want to tell the model, hey, you have to write and get tests to pass before this is coming into the codebase.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
