# How Deep Research Works

**Speaker:** Mukund Sridhar & Aarush Selvan, Google DeepMind
**Source:** https://www.youtube.com/watch?v=eJOjdjO45Sc
**Duration:** 15:15
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um, so uh I don't know if people have had a chance to uh try deep research on Gemini um or are familiar with the product, but you can try it if you go to Gemini advanced and if you scroll past 2.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:15).

## Practical Takeaways

- Um and if you have the chance to use it and you pay the 20 bucks uh you will see that it's a personal research agent that can browse the web for you to to build the reports on your behalf.
- And so our motivation and what we want to talk about today is kind of why we built it, some of the product challenges we overcame and some of the technical challenges you'll face of building a web research agent.
- But when you bring like really hard questions uh to chat bots in general, what we were finding is that it would often give you a blueprint for an answer rather than actually give you the answer itself.
- So we said, what if you remove the constraints of compute and latency at inference time, let Gemini take as long as it wants, browse the web as much as it needs, and see if we can trade that off for a much comprehensive answer for the user.
- Um and so you wanted to we needed to figure out how do you sort of build asynchronous experiences in in an inherently synchronous product.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
