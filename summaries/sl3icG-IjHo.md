# How to Build Planning Agents without losing control

**Speaker:** Yogendra Miraje, Factset
**Source:** https://www.youtube.com/watch?v=sl3icG-IjHo
**Duration:** 15:58
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

There are many reasons why agents don't behave but probably one reason that strikes out is it misses the right context and in case of enterprises often it means that it does not have knowledge of enterprise specific workflows but before that we will see some common context and just like agents human also need a common context so let's start with some key definitions So as you know LLMs are limited by their knowledge at the time of training.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:58).

## Practical Takeaways

- With agentic workflows we can plan and execute the workflows based on the goal, context and feedback.
- So before diving deep I would like to say that even though I'm speaking in terms of enterprise context here the concepts are generally applicable.
- So for building agent workflows you need tools, memory and reflection.
- So how does it look in in the blueprint is you have two tools and then you are first step as summarizing the NVIDIA's previous earning call and the next step is retrieval gathering some of the financial data from uh for NVDI and then your reasoning suggesting some questions for the earning call and finally reporting uh generate a comprehensive report from the all the information and there are corresponding function calls and as you can see context is being fed from uh task A a concrete uh example of the response is before you implement agentic workflow the response is pretty much vanilla but after this it can easily capture your workflow and give a very structured response.
- If your workflow cannot be really captured, uh you cannot really capture use case in workflows, agentic workflows are probably not worth and if deterministic outcome is paramount in cases of strict compliance and safety critical context, uh you should probably should not go with agentic workflow and in case of low latency and cost environment also uh you should probably try to avoid agentic workflow.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
