# The State of MCP observability: Observable.tools

**Speaker:** Alex Volkov and Benjamin Eckel, W&B and Dylibso
**Source:** https://www.youtube.com/watch?v=Lcqat4iP_lE
**Duration:** 16:56
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, evals and reliability

## Gist

Somebody who worked at Data Dog before and somebody who runs multiple MCP servers and uh clients on production.

## Why Hasan Should Care

This session maps to context engineering, evals and reliability. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:56).

## Practical Takeaways

- Uh something that happened advice that happened something in my agent uh in production the other day.
- As AI agents become more uh prevalent, the problem can compound with more and more tools via MCPS.
- Yeah, it's it's really important to me because enterprise engineering teams don't ship something to production unless they know for sure that they're going to be able to identify security and reliability problems before their customers do.
- So going back to our checkout endpoint, if the uh fraud service sends its span to the same sync, then we can stitch back the together the traces and show the whole context.
- So with distributed tracing and context propagation, we can have the remote fetch server send its spans to the same sync as the client and the sync will just stitch together the missing uh parts of the trace back for us.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
- Turn claims into regression tests, eval rubrics, or monitoring dashboards.
