# Agents vs Workflows: Why Not Both? — Sam Bhagwat, Mastra.ai

**Source:** https://www.youtube.com/watch?v=8SUJEqQNClw
**Duration:** 15:37
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So whatever they say carries a lot of weight um similar to like the the fang companies in in like you know webdev and and and in general.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:37).

## Practical Takeaways

- I do not think you should need to learn graph theory to write workflows to build production applications.
- you can just see it by like when you sort of like step when you're reading the code your your eyes can go from the top to the bottom and okay I I see what's going on here great I get it right it's readable code it's it's it's like a readable way of doing things um I think when if we have to use nodes and edges and connect things we lose that readability of code which is really important when we're building we all build software in teams right generally um uh uh so to is I mentioned this earlier right like you and your colleagues should be able to use a workflow framework or whatever without learning graph theory um again like I said it's a reverse reverse mullet like party in the front hot tick in the front like business in the back um okay so so like now that we've kind of like talked about like we we've sort of like opined on the discourse of the day um let's get down to business okay um design patterns for agents and workflows and when I say design patterns like this phrase has kind of a storied history.
- Like I take a turn, then the agent takes a turn, then I take a turn, then the agent takes a turn, and then the agent takes another turn, maybe makes like a tool call or something, right?
- Um coming to that right so here's just some thoughts right agents and workflow composition so agents have tools and you know they they can call tools you know workflows have steps an agent can be a step a workflow can be a tool an agent can be a tool a workflow can be a step and like most primitives the magic happens when you combine these things together um the agent supervisor model you have an agent that is calling other agents as tools, right?
- These are like these these are all like MRA um sort of like MRA code is just more of like an example of like you know but but I think like it's illustrative not the particular lines of code and what they are but like these examples are sort of simple enough to fit in the you know slightly smaller version of the right panel of my slide right and that then that's sort of the interesting thing we can use these terms and the implementation is not too long it's grockable in a slide um and and so again like that's kind of what gives us power is that like the primitives are simple but the combinations are also like once we get a hang around once we get the hang of them we can you know run pretty fast you know you could have workflows as tools um so um I think it you know it's like hey like you want to plan location you want to like check the weather then you want to plan a trip maybe these are like more more complex workflows pass that to an agent let it sort of like iterate and decide um workflows is doing agent handoffs.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
