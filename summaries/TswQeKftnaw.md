# AI powered entomology: Lessons from millions of AI code reviews

**Speaker:** Tomas Reimers, Graphite
**Source:** https://www.youtube.com/watch?v=TswQeKftnaw
**Duration:** 10:21
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, Graphite, for those of you that don't know, builds a product called Diamond.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (10:21).

## Practical Takeaways

- And what we need to do is we need to find a way to better address these bugs in general.
- Here's an example that came up on Twitter this week from our bot that found that um in certain instances there would be math being done around border radiuses that would lead to a division by a negative number and would then go ahead and crash the front end.
- And so we started with the most basic division of well there's probably stuff that LM are good at catching and things that they're not good at catching.
- You should extract this logic out into a function or you should make sure this code has tests.
- on the left side where LM definitely can catch it but humans don't want to receive are those things I showed you earlier code cleanliness and best practice examples of these that we've found are uh comment this function add test extract this type out into a different type extract this logic out into a function while this is always correct to say I think it's really hard to know when to apply to an LLM I think as a human you're applying some kind of barometer of well in this codebase this logic is particularly tricky and I think someone's going to get tripped up so we should extract it out versus well in this codebase it's actually fine but what a bot can pretty much always leave this comment I'd actually make the argument a human can pretty much always leave this comment and it be technically correct the question is whether it's welcome in the codebase and one thing I'm going to say sort of like outside of all of this is as you add more this area seems to become larger of what people are comfortable with but for now given the context that we have given the code base the past history the uh your style guide and rules we are what we have we have what we have and so we end up with this idea of well it turns out that these are basically the classes of comments that we think that human that LLM can both create and humans want to receive.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
