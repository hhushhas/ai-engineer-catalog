# Your Agent Is Wasting Tokens and You Don't Know It

**Speaker:** Erik Hanchett, AWS
**Source:** https://www.youtube.com/watch?v=uiP88SpCi1Q
**Duration:** 5:55
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

Now, I'm going to show you five ways that you can reduce your token costs while using and creating agents.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (5:55).

## Practical Takeaways

- And what that'll do is on the first call of your agent, it will send the full system prompt over and then on every subsequent call, it will have a much reduced system prompt being sent over.
- So that way when it's being called over and over again, the tool result isn't added into the context every time every time the tool loops or every time the agent loops.
- So when you're dealing with the agent loop and it decides to do a tool call, I've had this happen often where it calls the tool over and over and over again.
- A good thing you can do before you deploy your agent is to run some observability tools and take a look at the tool call use for every single tool and then see how long each one of them is running and how many times they're looping.
- So if we're using a multi-turn agent and we are talking back and forth, you will find at times that the conversation history will get very large on every single call, that whole conversation history will be sent back to the large language model.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
