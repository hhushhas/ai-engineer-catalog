# Skill issue: Lessons from skilling up coding agents to use Langfuse

**Speaker:** Marc Klingen, Clickhouse
**Source:** https://www.youtube.com/watch?v=vNCY9kXXyDQ
**Duration:** 24:09
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

And what I want to talk about today is how what the lessons we made from scaling up coding agents actually adding LangFuse to an application because like back in the days when you had like observability or evals, you needed to read like hundreds of pages of docs, like figure out your own mental model.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (24:09).

## Practical Takeaways

- " And I think Mars this morning had like a good note where like the surface area of deploying agents is so broad that like for some you don't need like a coding agent even if it's like the best way you can build agents at the frontier today.
- Then historically you would have built like a workflow that's very reliable of like you have a router that routes to like an agent that can only do password resets and that agent has like the context to do password resets well.
- " And I think what's very exciting now is that an agent can just like progressively get the context needed to then solve like a problem that's multi-domain.
- However, it has always been hard to kind of like how to how to build an agent, what kind of use cases even exist because you have like this open-ended text input box often or like open-world context.
- Um and uh interestingly, uh when we first got into model pretraining context as a project, and you can just ask an agent how to add LangFuse, and it'll spit out like LangFuse SDK logic.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
