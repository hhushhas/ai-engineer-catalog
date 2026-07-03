# Stateful Agents — Full Workshop with Charles Packer of Letta and MemGPT

**Source:** https://www.youtube.com/watch?v=E0k9Ppq6yXY
**Duration:** 1:19:34
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Hey, you are an LM and you have a context window of like 128k tokens and I will let you know when you reach 100k tokens and you're going to have to like manage memory with these tools.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:19:34).

## Practical Takeaways

- Um in many cases, you kind of want to like cap the context window to be really short, like 4K, but then you also want the agent to like not have any perceived loss of memory.
- The agent is just its system prompt, its tools, and then in let us specifically we have a concept of like three tiers or two tiers of memory.
- So by default because you know Mamgbt agents they have like memory management built in they need tools to manage their memory.
- Do they do we just have a flat list of like other tools that agents can use and memory tools would that affect the agent tool?
- And that's a way to kind of like move all the tools that aren't for act like general API actions out of the main agent.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
