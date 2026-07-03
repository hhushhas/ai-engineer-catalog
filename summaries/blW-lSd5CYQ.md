# The rise of the agentic economy on the shoulders of MCP

**Speaker:** Jan Curn, Apify
**Source:** https://www.youtube.com/watch?v=blW-lSd5CYQ
**Duration:** 18:08
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, agent systems

## Gist

So how does intelligence emerge emerge in the markets right people always talk about markets like well market thinks that market uh reacted to this and so on and in some way uh markets are more intelligent uh than like individual like participants of the market right and it's there are mutual uh interaction of these individual members of the market basically who pursue their own interest and communicate and establish new interactions with others uh where some some sort of like collective intelligence which is like bigger than the sum of different parts emerges right so how does intelligence emerges uh emerge in companies well this one is provocative through slack right where people interact and pursue their own interest uh in the company and over like altogether the company well sometimes becomes more intelligent than the individual employees of the company and uh so this leads to my final question so how or how will the general intelligence emerge in computing systems right and there is a lot of talk about AGI and like you know like ever larger models uh exhibiting like super intelligent behavior but in my opinion the like general intelligence will actually emerge through interaction of multiple entities can call them agents basically like multiple models uh pursuing their own goals interacting with each other and uh altogether exhibiting something which we can call general intelligence and thanks to uh MCP we finally have this uh missing part that allows the the agents to communicate with with each other and really like create a fabric or agentic mesh where they can talk together.

## Why Hasan Should Care

This session maps to context engineering, agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:08).

## Practical Takeaways

- I'm the founder of API and uh I'm going to talk about the race of the agentic economy on the shoulders of MCP basically economy where agents uh can you know find counterparts uh to interact with and purchase services from other from businesses or tools or other agents right so like B2A and B2B uh sorry and A2A all right so before I start um let me just introduce quickly API aify is is a marketplace of 5,000 tools called actors and uh historically we come from the web scraping industry right so most of these actors are data extraction tools that allow you you know to get data from social media from search engines uh data for AI for building rack pipelines you know uh data from web uh for lead generation and so on but also there are other tools like data processing tools and so on so altogether there's about 5,000 of them and some of them are built by API some are built by our community of creators uh who actually make money on it, right?
- But obviously now uh we also have MCP integration which makes it possible to call actors from AI agents or you know AI workflows.
- And the way it works actually is uh the agent just needs a API key or you know o workflow on an an account on aifi and then through our MCP server basically it can interact or call any of those 5,000 actors on our marketplace right and actually this only became possible thanks to uh I would say the killer feature of MCP which is the tool discovery right actually um not many clients didn't support this yet.
- And let's say we have like 5,000 tools on our our store and there is simply no way we could publish all these tools through open API because you know the context would be just too large and like the more tools you have the you know riskier the result is right so we really want like provide the tools only like uh as needed and that is only possible through tool discovery which I think is really the main thing that will actually make MCP really uh the huge differentiator from from open API for example, right?
- So basically there is like you know so many different servers you can now use from the agents right so does it mean with like so many tools now support MCP so does it mean like the agents can discover and access any of them on their own right well not really because to use those services your agents still need uh to have like API tokens to those services right so even let's say if you use Zapier MCMCP that provides access to like 5,000 apps they have in their marketplace.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
