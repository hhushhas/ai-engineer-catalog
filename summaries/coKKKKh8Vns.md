# How to run Evals at Scale: Thinking beyond Accuracy or Similarity

**Speaker:** Muktesh Mishra, Adobe
**Source:** https://www.youtube.com/watch?v=coKKKKh8Vns
**Duration:** 9:25
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Um I have also co-authored um CI/CD design patterns book um and also involved in a lot of open source work uh across the communities.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (9:25).

## Practical Takeaways

- So the one of the most important trends in AI application development is EVs because without Ewells we can't uh we can't craft any AI application then um how many of you are developing an AI application be it a rag chatbot agents anything so if you are working on that you often have come across these kind of questions like how do I test applications when outputs are nondeterministic and require subjective judgment because we all know in LLM world uh you can have the different output for the same set of input.
- LLMs are nondeterministic or how many times you wondering like if I am changing a prompt what is going to break or how am I going to test that and then most importantly when you are developing an application in order to uh measure the performance or accuracy you need to find out what tools to use what metrics to uh use or what models are best because models are getting capable day by day and the answer is Ewells.
- So, Ewells is the fundamental approach where you are writing sort of test cases to measure your AI applications.
- This is one of the aspects um uh which is very important because whenever you are developing something for a customer uh you need to make sure uh they trust your application whatever output is being generated.
- So one of the important aspect for evaluating agents is trajectory evaluation because agents can take a different path and often times you need to define which path they are taking in order to execute a flow.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
