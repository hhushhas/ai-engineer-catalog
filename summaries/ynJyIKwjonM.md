# Agentic Search for Context Engineering

**Speaker:** Leonie Monigatti, Elastic
**Source:** https://www.youtube.com/watch?v=ynJyIKwjonM
**Duration:** 1:03:13
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, agent systems, rag and data

## Gist

We are going to be talking about agentic search for context engineering today.

## Why Hasan Should Care

This session maps to context engineering, agent systems, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:03:13).

## Practical Takeaways

- I like to say that context engineering is about 80% agentic search because it's this little box right here.
- So when you think about your coding agent, you probably have your um coding project in or code files laying around in your local file system, maybe you're using um some kind of working memory like a scratch pad.
- Um, the retrieval tool gives you the tool response and then your agent uh responds to you with the correct answer.
- Um you have access to different context retrieval tools and before answering a question oops decide whether or not you need to retrieve additional context to help the agent a little bit I have some information about how the data is um structured in elastic search.
- So only the uh if you write it in in markdown it's the I think the front meta right that gets injected into the system prompt and then when you need it um more information on the agent skill is loaded into the context window right so it's called something like progressive disclosure where you kind of add more information about the skill as you as needed so in this case I have some minimal instructions like here's the basic um structure of an ESQL query.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
