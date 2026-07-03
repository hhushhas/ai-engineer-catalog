# Prompt to Pipeline: Building with Google's Gen Media Stack — Paige & Guillaume, Google DeepMind

**Source:** https://www.youtube.com/watch?v=ns9f1fjLD7Y
**Duration:** 1:54:35
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

Um, and then I left to go work at GitHub for about a year on VS Code, which is also open source, um, and early user experience testing for C-pilot, and then came back to work on our large models.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:54:35).

## Practical Takeaways

- Um so so one of my favorite examples of this is that um you know when the models were first released they had context windows of like 8,000 tokens 16,000 tokens and so everybody was sprinting to build a vector database um because they were like oh well we have to work around this constraint that the models have this very small context window um and then you know obviously that's expanded over time.
- We just want to the the book to be in the history and in the in the context so the models can ask uh can answer new questions and generate new prompts about the book.
- So that's it only has that those images in in its context instead of having all of the possible images that we did before.
- But if you are in a real book with like 40 characters, that that wouldn't be sustainable to uh to expect the models to actually manage all of the all of the context perfectly.
- And but that's also where you can add some uh some context and like equivalent of what would be a system instructions like read this in a scary way or the characters are very excited.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
