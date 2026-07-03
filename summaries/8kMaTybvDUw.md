# 12-Factor Agents: Patterns of reliable LLM applications — Dex Horthy, HumanLayer

**Source:** https://www.youtube.com/watch?v=8kMaTybvDUw
**Duration:** 17:06
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um, and what happened with me was, you know, I decided I want to build an agent.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (17:06).

## Practical Takeaways

- And so if you can put your agent behind a REST API or an MCP server, um, and manage that loop in such a way that normal request comes in and we load that context window to the LLM.
- So we can interrupt the workflow, serialize that context window straight into a database because we own the context window.
- I don't know how you want to build your prompt, but I know the more things you can try and the more knobs you can test and the more things you can evaluate, the more likely you are to find something really really good.
- So LMS are pure functions, token in, tokens out, and everything everything in making agents good is context engineering.
- But you could, um, when the model screws up and it calls an API wrong or it calls an API that's down, um, you could take the tool call that it made and grab the error that was associated with it, put that on the context window, and have it try again.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
