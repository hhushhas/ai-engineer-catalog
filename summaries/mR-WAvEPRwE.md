# Anthropic Workshop: Build Agents That Run for Hours

**Speaker:** Ash Prabaker & Andrew Wilson
**Source:** https://www.youtube.com/watch?v=mR-WAvEPRwE
**Duration:** 1:15:40
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, there's the core agent loop itself where you have Claude model that's determining what to do, what tools to run, uh maybe it's pulling in some tools from MCP servers.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:15:40).

## Practical Takeaways

- Uh but then also we shipped computer use so it could start clicking around taking screenshots um testing its own code as well as MCP spec uh which enabled it to sort of use tools.
- And just in general um these tools got much better at sort of managing their own contacts and getting to task completion uh without reward hacking or anything like that.
- This was when the model just generally started getting better again at handling its own context.
- And that's because we realized it's much more general purpose than actually just for coding.
- Um we also, as kind of mentioned, big fan of just using a file system for shared state um instead of kind of leaning on context windows for very long-running agents in general.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
