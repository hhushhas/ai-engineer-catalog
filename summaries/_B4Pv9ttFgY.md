# Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents

**Speaker:** Michael Hablich, Google
**Source:** https://www.youtube.com/watch?v=_B4Pv9ttFgY
**Duration:** 22:38
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, agent systems

## Gist

Who in here is already using MCP servers or CLI tools on your uh agent Okay, everybody?

## Why Hasan Should Care

This session maps to context engineering, agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:38).

## Practical Takeaways

- Well, today I'm going to share four engineering lessons from the Chrome uh DevTools team on how we build Chrome DevTools for agents and how we deployed it for effect.
- What I wanted to tell you is like, yeah, this is going to work in any MCP client and uh agent harness that is MCP capable.
- We ship Chrome DevTools because we saw that coding agents were flying blind.
- And without surprise, this is too much data for an agent for a model to actually reason about, and it blew through the context window.
- And we have a skill that's called, uh, troubleshooting, and we see a lot of people have problems setting up the Chrome DevTools MCP server correctly, and that troubleshooting skill is then going to kick in and help the human and the agent to fix the setup issues.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
