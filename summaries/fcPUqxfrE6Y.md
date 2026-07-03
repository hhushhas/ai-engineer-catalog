# Why the Best AI Agents Are Built Without Frameworks (Primitives over Frameworks) — Ahmad Awais, CHAI

**Source:** https://www.youtube.com/watch?v=fcPUqxfrE6Y
**Duration:** 27:06
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

One of the most common AI agents that we've seen in production is there's some data and there's a chatbot as an agent and you're trying to chat with that data because well, all of these LLMs are self attention algorithms anyway, right?

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (27:06).

## Practical Takeaways

- I have also built uh hundreds of open source packages mostly automation CLIs with NodeJS and created a shades of purple code theme all of which are downloaded like 40 50 million times uh you know a year and I've gone up to you know as uh as technical as you can imagine I've contributed to NASA helicopter mission and in the past I have been a VP of developer tools VP of engineering Google developers advisory board member all I'm trying to say is I am deeply technical I've gone through this phase of working with in building frameworks and now why do you think I am talking about primitives I think primitives have this native ability of working really really well in production like Amazon S3 is a a really good uh example here Amazon S3 is a primitive where you can upload data and download data and they scale it uh massively they're not building a framework for object storage it's a very simple thing it's a lowle level primitive you can use to build lots of things right and that is what we are uh talking about here today my journey in LLM actually started with in 2020 when Greg Brockman himself gave me access to GP3 GP3 was just like what uh maybe a month old model and I I had already started building uh you know something like GitHub copilot which uh launched in 2021 a year later right even now you know we've been building it uh things and agents for like I don't know 5 years building and deploying and scaling AI agent remains to be the biggest pain there is and I think everybody has a different definition of AI agents but this is my take at it I think AI agents are just a new way of writing code everything we know of how we used to build code how you used to build coding projects uh or SAS all of that is changing because of AI and because of agents and it's it's just big enough.
- You know, every agent needs to store some sort of context or history of conversation.
- We want to become the fastest possible way for you to build a production ready AI agent.
- I think if you are building on top of predefined really good highly scalable AI primitives especially composible primitives that come with a piece of cloud in it like uh you know memory memory is an AI primitive which is like you know like memory which has a vector store in it you can throw in I don't know terabytes of data inside of memory and it will automatically scale so if you build an AI agent with that memory or with that parsing chunking or threads or tools infrastructure what you get is a serverless AI agent that automatically can do the heavy lifting for you.
- And in this step, we are basically going to create an AI agent that is going to use that context to answer the questions you have.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
