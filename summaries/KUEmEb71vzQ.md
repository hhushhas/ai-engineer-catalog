# Function Calling is All You Need — Full Workshop, with Ilan Bigio of OpenAI

**Source:** https://www.youtube.com/watch?v=KUEmEb71vzQ
**Duration:** 1:42:54
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um, but then finally, uh, in June of 2023, uh, OpenAI launched just general function calling where we essentially like pre-trained it to be able to use these tools or actually post-trained it to be able to use, uh, tools.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:42:54).

## Practical Takeaways

- Reading APIs, retrieval, memory, or taking action, any APIs you can use to write, managing application state, which is actually pretty overloaded.
- And then workflow actions, which is um any like multi-step processes or even like meta actions like switching its own prompt or like loading in different tools or like handing off a conversation, right?
- Um, specify the tools, call the model, get the message, print it out, handle the tool calls, append it, and once we have no more tool calls, break.
- We can uh if we want do a little bit like smart querying uh where instead of just like loading in all of the memory, um we can like do a little bit of like retrieval uh to load in the right ones.
- I'm actually going to leave the memory and we're just going to keep building in this on this on this agent.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
