# Real AI Agents Need Planning, Not Just Prompting

**Speaker:** Yuval Belfer
**Source:** https://www.youtube.com/watch?v=Th5e4h-oVmc
**Duration:** 7:58
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

OpenAI just released instruct GPT which is the first model who can take instructions and actually follow them really do what you wanted to do.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (7:58).

## Practical Takeaways

- Just taking all the information, all the context, all the constraints, all the requirements, just put everything in one prompt and hope for the better.
- I work at AI21 Labs where we developed our own language models and also an agentic framework.
- Hey, some people call LLM as a router an agent where we have some sort of a routing model that just takes any query and directs it into a specialized LLM.
- where essentially we're providing the LLM a list of external tools that it can use and let it interact with other APIs with the world Google search where this is something that now a lot of people talk about MCP where it standardized this and everything MCP related is an agent again doesn't matter as long as it works and there's a lot of information about MCP right now so we will not get into it and maybe the most popular agent of it all is react act to reason in an action where this is a framework that can be done with any language model in the framework of thought then act upon that thought and observe and so on and so on every time the model wants to do some sort of a step towards uh the solution but this is something that happens each step at a time and there is no look ahead to the entire plan this is kind of like part of a plan I know the situation right now I know what the next step I want to go to and so on and so on.
- And what is planning that we're talking about that every AI agent essentially needs to do.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
