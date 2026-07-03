# Remote MCPs: What we learned from shipping

**Speaker:** John Welsh, Anthropic
**Source:** https://www.youtube.com/watch?v=0NHCyq8bBcM
**Duration:** 15:12
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

I'm currently a member of technical staff here at Anthropic and I've spent the past few months um focusing on tool calling and integration and implementing MCP support for all of our internal like external integrations within the or so looking at tool integration with models we've kind of hit this timeline where uh models only really got good at calling tools uh like kind of late midl last year and suddenly Everyone got very excited because like your model could go and call your Google Drive and then it could call your maps and then it could send a text message to people.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:12).

## Practical Takeaways

- there's a lot of like services popping up with like slashcall tool and slash like get context and then people um start to realize there's additional needs some authentication a b a bunch of stuff there and this kind of led to some integration chaos where you're duplicating a bunch of functionality around your org nothing really works the same you have an integration that works really well in service A but then you want to use it in service B but you can't because it's going to take you three weeks to rewrite it to talk to the new interface And so we're in this kind of spot and the place that we came to at Anthropic is realizing that over time all of these endpoints started to look a lot like MCP.
- It's like a standard way of sending messages and communicating back and forth between uh providers of context for your models and the code that's interacting with the models.
- Um and so we started asking ourselves like can we just MCP for everything and we said yes with the caveat that yes is for everything involved in presiding model context to models.
- You're just calling a connect to MCP and you have a a set of uh a set of tools and methods that you can call.
- So I think the standardizing on MCP internally for this type of context is a is a good bet.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
