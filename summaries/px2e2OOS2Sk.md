# Agents, Access, and the Future of Machine Identity

**Speaker:** Nick Nisi (WorkOS) + Lizzie Siegle (Cloudflare)
**Source:** https://www.youtube.com/watch?v=px2e2OOS2Sk
**Duration:** 14:17
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, I've been having fun making agents and MCP servers that act on behalf of me.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (14:17).

## Practical Takeaways

- uh which is really awesome but it's very like developer centric obviously it's GitHub but MCPs in general like you have to go and edit this like JSON file and do that and it's really tough to to like I have to give it a pat and you know that's that's an advanced use case for non-developers uh and so we really need a way to let these tools act on our behalf uh but in a more traditional way that's easy for for end users to be able to set that up and um so yeah that that's what We do work OS.
- We have a vector database, a SQL database, durable objects which is what we use in our agents framework to maintain memory.
- Bindings let you interact from your web app, from your website, from your agent as well because our agents and MCB servers are kind of similar in that you can use bindings to interact with other Cloudflare products.
- So, it's running and it recognized that it has tools available now from MCP shop.
- And that ran a tool uh in the MCP server itself that is uh just going in and on the uh context that's associated with this worker object, it's just changing the mode to band.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
