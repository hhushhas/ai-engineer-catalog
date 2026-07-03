# Why, and how you need to sandbox AI-Generated Code?

**Speaker:** Harshil Agrawal, Cloudflare
**Source:** https://www.youtube.com/watch?v=AHtGAgQ0Q_Q
**Duration:** 38:27
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

We have coding assistants that suggest the next line for the code, the tool calling where the model picks which function to execute.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (38:27).

## Practical Takeaways

- The model is doing its best, but wrong code running in production is still disastrous.
- Now, over here, I am asking my agent to write a skill that would fetch top stories from Hacker News.
- It is then making a tool call to generate that skill, and once it is ready, it is trying to it will execute that skill for us.
- This is fundamentally different security model than trying to intercept and block dangerous operations.
- For the use case we are talking about, quick functions, tool calls, plugins, skills, data transformation, code interpreters for AI agents, these constraints are actually features.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
