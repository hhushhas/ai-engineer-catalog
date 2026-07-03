# Building Protected MCP Servers

**Speaker:** Den Delimarsky and Julia Kasper, MCP Steering Committee & Microsoft
**Source:** https://www.youtube.com/watch?v=PHBGhUKAM-w
**Duration:** 20:13
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

I'm a product engineer at Microsoft uh and member of the MCP steering committee.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:13).

## Practical Takeaways

- Now, um, if you're building MCP servers and remote MCP servers specifically, one of the things that you are connecting to are likely thirdparty APIs, whether it's your own or somebody else's, and that API requires user context.
- They're binaries that run within the context of whatever machine you have.
- So the draft spec that we worked with Enthropic and a bunch of security experts to refine actually does this clean separation between the server the MCP server which we call the resource server and the authorization server.
- But not everyone, we have some exceptions here um who do want to become security experts, you actually want to focus on building the remote MCP server, right?
- So in this case what happens your MCP client like let's say cloud desktop is going to request data from the MCP server the MCP server at that point because the MCP client doesn't have any user context yet is going to respond back with a standard HTTP 401 saying I have no idea who you are at my server is protected but here's a pointer to something that we call the PRM the protected resource metadata document that's embedded in one of the headers in dubdub authenticate that's going to say but you can go here and learn more about how to authorize against me the MCP server.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
