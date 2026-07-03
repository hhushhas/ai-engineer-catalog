# Your Insecure MCP Server Won't Survive Production

**Speaker:** Tun Shwe, Lenses
**Source:** https://www.youtube.com/watch?v=BurJvbqFr4c
**Duration:** 24:34
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

Lenses is a data operating fabric that sits between your agents and Lenses is the de facto streaming data layer for providing trusted real-time context to agentic AI.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (24:34).

## Practical Takeaways

- An agent has to load all the context in before it can make a decision.
- It makes it suitable for finding specific things, but it comes at the cost of latency and context bloat.
- Curate the MCP tools available to the agent and aim to expose the smallest amount of information.
- Tool poisoning is number three on the OWASP MCP guide and it works by embedding malicious instructions in tool descriptions that are invisible in the UI, but executed by the model.
- Oversharing data in tool responses is number 10 in OWASP's MCP guide and it turns the agent's context window into a liability.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
