# (possible dupe but better sound) What does Enterprise Ready MCP mean?

**Speaker:** Tobin South, WorkOS
**Source:** https://www.youtube.com/watch?v=0MqYA52iWQU
**Duration:** 13:53
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, product and startups

## Gist

We already have some kind of not concept of enterprise ready tooling and building tools for the enterprise and production.

## Why Hasan Should Care

This session maps to context engineering, product and startups. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (13:53).

## Practical Takeaways

- So for a long time from you know several years now we've had the model of you are a user you talk to an AI talk to a chatbot it does stuff the AIS had tool calling now they have MCP this is the MCP logo which is just a way of interfacing between the AI and an external resource of some kind to do something right can just be a database access it can be performing some complicated computation can be pulling in a prompt there's lots of stuff in the MCP spec that frankly you should go and read there's more there than most people realize We're also seeing workloads like this where an IT admin spins up an asynchronous workflow which is we're going to call an AI agent which automates some process that is you know kind of headless and is going and doing a thing we're trying to manage that that is then going to use MCP to access external tools that might be secured might be internal enterprise tools which introduce some fun problems.
- I also for the sake of this kind of diagram of what is the future going to look like want to introduce this line here just to throw some some spanners in the works of users in a company using their chatbot which makes a call to an MCP server which then goes and queries an AI workload an AI agent that's existing in the cloud performing some operation and so with this kind of diagram of what could happen I want us to figure out what we need to fix to make this really useful and production Okay, why am I why am I talking to you?
- A lot of things go wrong, which is why the model context protocol got invented.
- One, there is this really robust ecosystem of tools and providers, security tooling that lets you interface between the model and the resource to make things safe and reliable.
- It also runs a stateful connection which means you can do you know better security better management better context management in the way you're passing in to an AM model and maybe you're doing it just because everyone's doing it and why not have some fun right it is genuinely quite fun to build an MCP server you can make cool things out of it so what do we do we make our local server right hopefully at some point everyone's had a little play with this uh you tweet out check out my local host um you know try and get your friends to play with it it's great it's hacky it's not particularly useful to anyone except yourself.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
