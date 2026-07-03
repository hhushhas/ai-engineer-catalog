# Engineering Better Evals: Scalable LLM Evaluation Pipelines That Work

**Speaker:** Dat Ngo, Aman Khan, Arize
**Source:** https://www.youtube.com/watch?v=spvXj9tnWAQ
**Duration:** 24:46
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

these these LM teams s team uh sit on the like the outer side of the business so like a hub and spoke they work for the business side so these are like uh the people building the applications to help the business so um if anyone here comes from like the the ML or or data science space it's actually not far from that um and so different teams care about different metrics uh so maybe if you're an AIPM sitting on the business side you care about evals if you care about you know the platform maybe you care about costs latency things like that but TLDDR uh observability oops uh observability um represents what's happening and now evals are really important in this space because the reality of the fact is if you've ever seen a trace or something like that um you're not going to inspect every single trace manually right it is not scalable for you an AI engineer or you the AIPM to look through these things so what is eval used for it's actually just a really clever word for signal you're just trying to understand what's going well and what's not going well.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (24:46).

## Practical Takeaways

- But if you think eval or LM as a judge only, uh there's actually a lot of other tools that you're missing.
- So the reality of it is you have this kind of uh large toolbox in your kind of uh eval set.
- you change the model because it's it's it wasn't good enough or you update the agent orchestration.
- If you have components in your AI agents that have control flow in them, uh it actually makes way more sense to eval your control flow first and you have conditional evals.
- Um and so this helps you understand okay if my agent hits component one then two then three uh my evals look great but for some reason when we hit component four then two then three our evals are dropping.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
