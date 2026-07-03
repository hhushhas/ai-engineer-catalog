# Prompt Engineering is Dead

**Speaker:** Nir Gazit, Traceloop
**Source:** https://www.youtube.com/watch?v=jvKf6zXrNO4
**Duration:** 14:19
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

have a open AI and some simple prompts that you know take a question find relevant documents in the chroma database and just output an answer uh so you'll see I'm just this super simple one I just ask it a question how do I get started with trace loop and then it runs takes a couple of seconds and then we're going to see an answer and we're going to see the trace just so you if you never if you've never seen a rag pipeline and I'm guessing you also a rag pipeline And you know this is how it looks like right couple of calls to OpenAI Chrome database and then you know at final stage we get like a all the context into OpenAI and we get the final answer uh to the user was great and we have a couple of prompts here we probably want to optimize this is not what I want to do uh great okay now let's go to the next step my evaluator so what do we need for evaluations this is not a talk about evaluators I'm I'm sure you've heard a lot of talks about evaluators in this conference but I'm going to tell you what what kind of evaluator did I choose to use h so first you know you need a data set of questions and and you know a way to evaluate these questions and then the evaluator is going to kind of invoke the the rag pipeline and then get answer from the rag pipeline and then going to kind of evaluate and get a score maybe a reason if why the score is low or high and then this is kind of what we're going to for the agent will be the last step that can auto improve uh the prompt.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:19).

## Practical Takeaways

- But they can also they can also uh try to assess an answer just based on like the question and the context without any any ground truth.
- So a rag pipeline is basically two steps right we get the data from the vector database and we run the called open AI with some context from the vector database.
- I can take the input the question and take the answer the final answer that I'm getting from the from the rag pipeline and just evaluate how well the answer is given that question and I can also dive deeper into everything that's happening in the internals look at the context look at the question look at the answer and everything all together try to evaluate given the given the context and given the question how well is the answer performing so again I'm going to do a simple LM as a judge And I'm going to take 20 examples of questions that I've created.
- And then we're going to feed it back to the evaluator, run it again, get a new score, and then run it again with the agent.
- We can actually see h the agent you know thinking and then calling the evaluator and then the evaluator will run and get the responses and get the score and I hope yeah I hope I can yeah that's why it's running the evaluators.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
