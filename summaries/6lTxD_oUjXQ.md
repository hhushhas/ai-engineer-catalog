# Effective AI Agents Need Data Flywheels, Not The Next Biggest LLM

**Speaker:** Sylendran Arunagiri, NVIDIA
**Source:** https://www.youtube.com/watch?v=6lTxD_oUjXQ
**Duration:** 16:41
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

They exist as customer service agent, software security agents, research agents and etc etc.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:41).

## Practical Takeaways

- And if you're looking to deploy large language models, bigger, chunkier models to support the underlying use case, you also see that your inference cost is going to go high.
- So as AI agents run in production environments, this data flywheel cycle triggers a continuous cycle of data curation of ground truth using inference data, business intelligence, user feedback to continuously experiment and evaluate existing and newer models to surface efficient smaller models that provide at par accuracy expectations as that of larger language models but which offer lower latency, faster inference and effectively lower cost to uh ownership, total cost of ownership or inference cost.
- It's a customer service or an employee support chatbot agent can help answer queries across a variety of domains from HR benefits, financial earnings, IT help, product documentation or anything everything that an internal employee needs access to.
- Nemo customizer and evaluator are used to constantly evaluate multiple models to promote the most effective model as a nymph to power this router agent.
- So we figured out and set up a ground trth data point data set of 8 68 85 data points and we split them into 6040 to train or fine-tune smaller models and 40 to test and evaluate uh the accuracy.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
