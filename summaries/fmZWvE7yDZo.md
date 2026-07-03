# UX Design Principles for Semi Autonomous Multi Agent Systems

**Speaker:** Victor Dibia, Microsoft
**Source:** https://www.youtube.com/watch?v=fmZWvE7yDZo
**Duration:** 20:28
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

And over the last few years, I've been sort of looking at scenarios where a human works in tandem with an AI agent to solve problems.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:28).

## Practical Takeaways

- And so if you sort of look at it, it actually is an agentic workflow um, and just just quite quite early in its time.
- The key fun fact there is that like um this sort of showed that these sort of applications were possible and today I think you see a lot of these sort of uh capabilities across many Microsoft products and products even beyond Microsoft and so fast forward after that um a few colleagues started to think about um how can we as opposed to building this handheld workflows how can we build multi- aent applications where you define agents and they sort of exchange messages and self-organize to sort of explore problem space and that's sort of where autogen sort of came about.
- So for example, you create a team, you drag in a set of agents into that team and then for each of those teams, you have primitives like models, tools, and you can sort of compose them together to sort of build multi- aent applications.
- So that's what you're sort of looking at and it's it's kind of deceptive because the tutorial takes about four hours but at the end of the day you need about 40 or 50 hours just to get through the whole thing and so you're trying to learn know where are things where things leave how do you use the tool and then you need to learn all of the concepts underneath and so one of the things I asked myself was can I build with all that I know about agents with all my experience building autogen can I create an agentic workflow that will help me take go from natural language to let's say something that looks like is the prototype is not at this level of quality but I think it can get there and so the next question is how do you express this as a multi- aent workflow and you have a couple of options as a multi- aent system so do you build a workflow and I'm sure if you've been at this conference you've seen people debate um all of the pros and cons between a fixed deterministic workflow so essentially know exactly what all the steps and this is great we sort of use a lot of that in production today you can build reliable systems take advantage of things like function calling, structured output and built really really valuable systems.
- for example something directly just create a blender object and do nothing else and then you might have um let's say general purpose kind of tool which is something to execute arbitrary code and so in this case you get your llm to generate code and you execute that and that's what drives all the capabilities on blender and one thing to note is your agent is always only as good as the tools you give it so spend a lot of time about 50% of your time on tools and you can test all of this in code this what that looks Next, you want to build an eval test bed.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
