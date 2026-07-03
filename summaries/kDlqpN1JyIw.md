# Vercel AI SDK Masterclass: From Fundamentals to Deep Research

**Source:** https://www.youtube.com/watch?v=kDlqpN1JyIw
**Duration:** 59:52
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Well, we could, and we'll look into later, add a tool, and that tool could call the web and return those results and pipe those into the context of the conversation, and then the language model can deduce from there.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (59:52).

## Practical Takeaways

- We give the model a prompt and then we also pass as part of the conversation context a list of tools that it has available to it.
- Each of these tools will be provided with the name of the tool as well as a description of what the tool does so the model knows when to use it.
- Let's say the model decides it needs to use one of the tools to solve the user's query.
- Meaning it would generate the the name of the tool it wants to use and any arguments or data that it can parse from the context of the conversation necessary to run those tools.
- This is what the tool does and this is really important because this is what the language model uses to decide whether it should invoke that tool.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
