# Judge the Judge: Building LLM Evaluators That Actually Work with GEPA — Mahmoud Mabrouk, Agenta AI

**Source:** https://www.youtube.com/watch?v=X4dEHRzBLmc
**Duration:** 40:51
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Hello everyone and welcome to my talk slashworkshop judge the judge and today we're going to talk about LLM as a judge quite sure you know this scenario you have an agent in production and someone from the team says we need to monitor the reliability so you go to one of the libraries and maybe use the hallucination LM as a judge you put it in production within your observability platform and things looks fine But customers are actually saying that the agent is not working and you look at the traces, it's not working.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (40:51).

## Practical Takeaways

- Obviously the slowest possible evaluation is having human annotator really look at your whole test set and annotate it manually.
- If you have an online eval and you want to see basically in production if things are improving or not improving same thing if you have LLM as a jobs that are calibrated with your business goals then you can quickly see whether changes that you've made are improving not improvement whether um there is some change in the distribution of the data how people are interacting uh with with your agent or model and basically react rapidly and finally and I would All this is the holy grail of AI engineering is really to build this data flywheel where you optimize your harness, observe some traces and then add new a valves based on these traces the edge cases and do it again and again and again here if if you have a way to kind of add new evaluations quickly obviously automatic evaluations um from the traces from kind of the annotations and data you can go through this loop faster and faster to to the moment or to the point that you can think of it as an automatic loop, right?
- Uh basically providing you all the tools from observability, prompt management, evaluation covering the whole life cycle of building reliable agents.
- It's a customer support agent that we want to evaluate and we are going to build an LLM as a judge that is calibrated with the annotations basically human annotations for that customer support.
- TBench is a benchmark in a large data set built by Sierra uh customer support um scaleup I think and they have like multiple benchmark for real world scenarios for customer support agents.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
