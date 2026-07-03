# Layering every technique in RAG, one query at a time

**Speaker:** David Karam, Pi Labs (fmr. Google Search)
**Source:** https://www.youtube.com/watch?v=w9u11ioHGA0
**Duration:** 20:22
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

Uh I think one thing that I personally uh sometimes struggle with is there's a lot of talk about things sometimes like too much in the buzzed like oh specific techniques and you can do RL this way and you can tune the model this way and it's like doesn't help me orient in the space like what are all these things and how do I like hang on them uh or you have the complete opposite which is like a whole bunch of buzzwords and hype and such and like rag is dead no rag is not dead is like agents like wait what like uh so just you know I think a lot of what I'll do today is just uh what I call like plain English uh just trying to like set up a framework right like very centered around like okay if you are trying to show up the quality of your system how do you do that and then where do all the things you hear about like day in day out like fit uh and then just how to approach that and give a lot of examples I think one thing that I always love and we always did in Google we always do in pyabs uh is just like look at things look at cases look at queries see what's working see what's not working and that's really the essence of like quality engineering as we used to call it at Google if you do want the slides there's like 50 slides and I said my a challenge for myself to go through 50 slides in 19 minutes.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:22).

## Practical Takeaways

- you have a certain quality bar you want to reach and there were a very interesting talk this this week about like you know benchmarks aren't really helpful and absolutely eval are helpful you're trying to launch a CRM agent and you sort of have a launch bar like a place where you feel comfortable that you can actually put it out into the world uh and techniques fit somewhere here you have that like kind of end metric and you're trying to like come up with different ways to shore up the quality and those ways are like sort of the techniques there and you know this is sort of your own personal benchmark you start with some of the easy the easy the easy bars you want to hit and then there's like medium benchmarks and hard benchmarks.
- All right queries examples let's stuff let's first technique in memory retrieval uh easiest thing bring all your documents shove them all to the LLM.
- Uh this is the whole like is rag dead is rag not dead context windows.
- Uh especially now when you have agents uh and you're telling them to use a certain tool.
- Like I always like just search more like this is similar to when we talked like about dynamic content like the in-memory uh retrieval just like just give more things.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
