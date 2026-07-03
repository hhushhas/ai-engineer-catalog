# How BlackRock Builds Custom Knowledge Apps at Scale — Vaibhav Page & Infant Vasanth, BlackRock

**Source:** https://www.youtube.com/watch?v=08mH36_NVos
**Duration:** 18:47
**Recommendation:** Skim
**Hasan-fit themes:** infra and deployment, rag and data

## Gist

Second has to do everything with like hey I kind of want to define a complex uh workflow or an automation.

## Why Hasan Should Care

This session maps to infra and deployment, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:47).

## Practical Takeaways

- So I could have a case where I kind of want to run through X number of steps and then integrate to my downstream systems and then you have the normal like Q&A type systems that you look at like this is your chat interfaces and finally like the the agentic systems right so in each of these domains what we see is u we have this like big opportunity to leverage your models and LLMs to either augment our existing systems uh or like kind of like supercharge those right so that that is like the domain we are speaking about.
- So, we kind of have to build this tool for the investment operations team, right?
- So building an app and then you're introducing new model providers, you're trying to put in like new strategies, the lot of challenges to get an single app out, right?
- One is we're spending a lot of time with our domain experts prompt engineering right so in the first phase where we have to extract these documents right they're very complex right your prompt itself in our simplest case like started with like a couple of sentences before you knew it you're trying to describe this financial instrument and it is like three paragraphs long right uh so there's this challenge of like hey I have to iterate over these prompts I have to version and compare these promps how do I manage it effectively and I think even the previous speaker had mentioned you kind of need to eval and have this data set how how good is your prompt performing so that's the first set of challenges in creating like AI apps itself like how are you going to manage this in what direction second set of challenges is around like LLM strategies right what I mean by this is like when you're building an AI app so to speak you have to choose what strategy am I going to use like a rag based approach right or am I going to use a chain of thought-based approach even for a simple task of like data extraction depending on what your instrument is this actually varies uh very highly right if you take like an investment corporate bond like the vanilla one is fairly simple I can do this with like in context positive model I'm able to get my stuff back if the document size is small right some documents are like thousands of pages long 10,000 pages long now suddenly you're like oh okay I don't know if I can pass more than a million tokens into say uh the open AI models what do I do then right then okay I need to choose a different strategy and often what we do is we have a choose choose different strategies and kind of mix them with your prompts to kind of build this iterative process where like I have to play around with my prompts, I have to play around with the different LM strategies and we kind of make want to make that process as quickly as possible.
- Then you have obviously the context limitations, model limitations, different vendors and you're trying and testing uh things uh uh for quite a while and this kind of goes into the month right then the biggest challenge is like okay fine I've kind of built this app now what how do I get this to deployment and it's this whole other set of challenges right you have your traditional challenges which is has to do with distribution access control how am I going to fedate the app to the users but then in the AI space it's like you have this new challenge of like what type of cluster am I going to deploy this to?

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
