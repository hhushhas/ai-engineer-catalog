# Fuzzing in the GenAI Era — Leonard Tang, Haize Labs

**Source:** https://www.youtube.com/watch?v=OMGPvW8TBHc
**Duration:** 19:12
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um I should point out that ostensively we're part of the AI security track although I would really consider us more of a QA company and eval company in some sense although there's a lot of shared similarities in how we approach the problem technically right we are essentially a property based testing company or fuss testing company or as I like to call it a hazing company.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:12).

## Practical Takeaways

- Our solution to doing this is basically, let's just run large scale optimization and simulation and search before deployment and try and figure out through a battery of tests whether or not your system will behave as expected before it actually goes into production.
- Long story short of how uh we think about tackling this eval problem is essentially through hazing right fuss testing in the AI era.
- Basically, we'll build agent frameworks, pipelines, workflows to do the judging task.
- TLDDR scaling judge time compute in this particular way uh through building agents as judges actually allows you to come up with extremely powerful judging systems that are also quite cheap and also uh low latency.
- So here's a plot of price uh and latency and cost uh and and accuracy uh of verdict systems visav uh some of the frontier models uh Frontier Labs reasoning models.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
