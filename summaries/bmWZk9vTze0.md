# MCP is all you need

**Speaker:** Samuel Colvin, Pydantic
**Source:** https://www.youtube.com/watch?v=bmWZk9vTze0
**Duration:** 15:24
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

What what if the uh remote agent that's operating as a tool could effectively piggyback off the uh the model that the original agent has access to.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:24).

## Practical Takeaways

- And what we're the other thing we're doing throughout this you'll see here is we have this context.
- So you'll see here when we defined depths type we said that that was going to be an instance of this MCP uh context which is what we get when you call the MCP server.
- So what we're doing here is we're having a we're providing a type- safe way within in this case um the agent validator but it could be in a tool call if you wanted it to be to access that context.
- So we can see here that we know at um in the type int uh uh that the the type is uh MCP context.
- MCP also has a context concept of progress which I'm not using here but you can imagine that also being valuable if you knew how far through the query you were.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
