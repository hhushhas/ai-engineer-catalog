# AI Red Teaming Agent: Azure AI Foundry

**Speaker:** Nagkumar Arkalgud & Keiji Kanazawa, Microsoft
**Source:** https://www.youtube.com/watch?v=JhJKgRAmfIU
**Duration:** 19:31
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

I'm sure you're learning about you know all kinds of stuff reinforcement learning agents agents eval.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:31).

## Practical Takeaways

- And there are also other tricks like um on the right hand side says Naba tow which is how to lud a bang spelled backwards right right to left and actually it turns out that's one of the patterns that an AI uh AI model can be tricked into giving you uh the answer and so and so you know when and especially like and we touched on it this morning also but like of course it's all agents agents agents 2025 is the year of agents um and there are a lot of concerns like if you talk to businesses about how in this world of agents AI can be, you know, tricked into into different kind of uh risks and stuff and different malfunctions.
- So in this piece here's the logs for everything but um what we are trying to showcase is something called the semantic kernel uh agent which here's some code for it.
- It has all the functions that are needed uh for for an agent to tool call call into a red team agent to help someone with their red team process and then it's simple chat completions agent afterwards.
- Uh so in this agent mode what would usually happen I can scroll up to like a previous previous output.
- Um so these were the strategies which were available and then uh use one of the I asked them to like hey figure out uh get me a harmful prompt in the violence category and then it gives you gives me some sort of prompt and then I'm like hey send it to my target and then this is what the target responds with and then there is some details about some sort of ski goggles and products that are supposed to be answered uh from our database And then I try to be like hey convert the prompt using B 64 and the agent converts it and then be like hey now send it to my target and then the target responds with something else.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
