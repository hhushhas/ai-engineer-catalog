# Infra that fixes itself, thanks to coding agents — Mahmoud Abdelwahab, Railway

**Source:** https://www.youtube.com/watch?v=Q5IVm_CxN2w
**Duration:** 18:08
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

So the thing is when you deploy your app to production maybe some you know bugs or issues make their way to production things happen and kind of like the typical way of dealing with these things is maybe you set up a bunch of thresholds and when these thresholds are met for let's say CPU or memoryization maybe uh you want to have a threshold for the request error rate it shouldn't exceed a certain amount well what will happen is You're going to get alerted and you'll be aware that there is an issue, but you still have to do the investigation yourself.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:08).

## Practical Takeaways

- Now, what I'm proposing is you should have a coding agent that monitors the state of your project and your application's infrastructure.
- So at a high level I want to have a series of workflows that will kick in that will help me go from issue detected in on railway my deployment provider to a pull request being open in my GitHub repo.
- Well, that's kind of how you can know and then the coding agent will be able to maybe tell you like, hey, you should just like wait out this issue.
- You can think of it as an alternative to something like cloud code, but the main difference is open code is fully open source and you can choose any LLM provider or uh you know model that you like, which is pretty nice.
- uh because now we can run open code on a server in this case would be on railway and we can just have this server have all the tools that the agent would need.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
