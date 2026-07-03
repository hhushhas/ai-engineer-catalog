# The Unreasonable Effectiveness of Prompt Learning

**Speaker:** Aparna Dhinakaran, Arize
**Source:** https://www.youtube.com/watch?v=pP_dSNz_EdQ
**Duration:** 10:56
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

uh if any of you guys um are spending a lot of time thinking about the frontier coding models, I think there's so much attention on on them.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (10:56).

## Practical Takeaways

- But just what's not so obvious is how much time is actually spent uh on the system prompts uh for those building these coding agents.
- And it's such an important piece of context that actually goes into making these coding agents the most successful agents out there.
- And what we wanted to do was show you guys a little bit of how that works and then put that to test on two of the most popular coding agents uh Claude and Klein today.
- Um we ran unit tests and then um we then passed that through to some kind of um model that was doing the LLM as a judge evals.
- Then whatever the unit test came back with whether it was right or wrong, we then passed this into an LLM as a judge eval.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
