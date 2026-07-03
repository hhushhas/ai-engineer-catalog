# Skill Issue: How We Used AI to Make Agents Actually Good at Supabase

**Speaker:** Pedro Rodrigues, Supabase
**Source:** https://www.youtube.com/watch?v=GmAQKINjv1E
**Duration:** 1:18:41
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

Skills are basically folders with instructions and files for you to to run workflows, repeated workflows, or give custom um essentially custom information to your agents or provides a new set of of tools, let's say, in form of scripts.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:18:41).

## Practical Takeaways

- Progressive disclosure is basically when the agent or the all the information about a subject is not loaded straight to context.
- So, the front matter will be loaded at first to the to the context of the agent, not the content of the the file.
- But when the the skills were released back in I think it was November or October last year, they basically started this debate about well it's should we use them instead of MCP because if if I can run if I can provide more information more context to the to the agent without actually loading every tool to to the context like the like the MCP and I can also have screen so I can have actions just like I have on MCP tools should we use them.
- Skills actually just provide more context to to agent, right?
- So, uh for those of you haven't heard about evaluations, or evals for short, um they essentially um are a more um a non-deterministic way of testing the output or the behavior of an agent or a model.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
