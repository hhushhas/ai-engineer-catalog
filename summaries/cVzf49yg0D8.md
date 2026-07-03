# Building Conversational Agents

**Speaker:** Thor Schaeff and Philipp Schmid, Google DeepMind
**Source:** https://www.youtube.com/watch?v=cVzf49yg0D8
**Duration:** 1:47:34
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um Yes, this one it should be the set up your coding agent with Gemini MCP and skills, I think.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:47:34).

## Practical Takeaways

- The importance when creating skills is it should be either something the model cannot do reliably or if you have some personal preferences on like how to do a certain workflow or I don't know, you always need to run tests using bun or something like this.
- And what we did with our skill is we made sure that the agent is aware of which Gemini models are available.
- So, all of the agents now have like web fetch tools, so they can query the information based on the skill and then like we only need to maintain like the documentation, which is mostly up-to-date.
- So, then as we can see, the model in this case or the agent as a first step, read our skill, analyzed our main file, is implementing the skill.
- And we want to build some kind of a coding agent, so our first tools are we are going to add is a read and write file tool, and we just continue in our main agent thread.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
