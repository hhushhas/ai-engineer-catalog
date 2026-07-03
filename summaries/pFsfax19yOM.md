# Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser

**Source:** https://www.youtube.com/watch?v=pFsfax19yOM
**Duration:** 1:21:03
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

Every single time you start talking to it you need to reload all of that context first and say this is what I care about.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:21:03).

## Practical Takeaways

- Uh you need your team members to remember to pull updates to that specific project skill if if they want the context.
- Without a skill, if you're just talking to any generic agent with no specific context injected, you're going to get, "Okay, looks pretty good.
- The first one is do you do any like formal skill evaluations like a skill benchmark so that as you model drops, which skills are relevant?
- And the the number one thing that I think is think of like when I think of what when to run a sub agent versus a skill is do I want it to have its own standalone context so that it can go do like a bunch of work on on something and then that's not eating the context window of like the main task job that that we're doing.
- Sub agents is a great way to extend those skills without bloating the context and having it kind of do one-off things and then and then exiting.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
