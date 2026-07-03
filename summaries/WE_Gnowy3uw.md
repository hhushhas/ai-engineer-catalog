# Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor

**Source:** https://www.youtube.com/watch?v=WE_Gnowy3uw
**Duration:** 19:22
**Recommendation:** Watch
**Hasan-fit themes:** coding agents, context engineering

## Gist

Um we had to write all the code for creating work trees, managing these work trees, feeding them into the agent as context.

## Why Hasan Should Care

This session maps to coding agents, context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:22).

## Practical Takeaways

- Um and what we're doing here is we're instructing the parent agent to go and create sub agents for each model, and then spin up a work tree for each uh so after each sub agent create its own work tree and work inside that work tree.
- Uh a little note is that these are not actually skills in Cursor, they're actually commands, but the way these commands work in Cursor is extremely similar to how skills work in that they're the prompts only get loaded into the context if the user chooses to load them.
- And you what you will see is that the parent agent starts by spinning up five sub agents on the five different models that I specified, and each one is going to have its own word tree, each each one has its own context.
- Another advantage of the new skill implementation is that the judging experience at the end of knowing what model did which for best of N is far superior.
- The parent now has a lot more context over what each of the sub-agents did, and the user can even ask the agent to stitch together a little different pieces pieces and bits from the different implementations, which was not possible before.

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
- Look for reusable context packets, skill files, memory rules, and workflow prompts.
