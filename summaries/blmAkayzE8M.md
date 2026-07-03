# How to Secure Agents using OAuth

**Speaker:** Jared Hanson (Keycard, Passport.js)
**Source:** https://www.youtube.com/watch?v=blmAkayzE8M
**Duration:** 18:59
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Uh we can give agents broad-based access and accept security risks or we can limit their capabilities and sacrifice business value.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:59).

## Practical Takeaways

- Now, if we continue this pattern for hundreds or thousands of agents, we've got a pretty big security problem on our hand.
- I was like, "Hey, I recommend we model MCP servers as as resource servers from an OOTH perspective.
- Uh but there's a whole bunch of other flows in OOTH uh that are relevant in particular client credentials and this applies when we want agents to communicate with other agents or other MCP servers on their own behalf not on behalf of a user.
- This obviously won't apply well to uh MCP which is trying to be a standard pro protocol and you want to bring tools and agents together that that may not be aware of each other.
- uh and this is a technique we could apply but it has limited uh capabilities when we look at like edge deployed agents such as on the desktop or mobile devices where we don't really control their software environment.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
