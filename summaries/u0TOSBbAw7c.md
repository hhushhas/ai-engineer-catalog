# Cognitive Exhaust Fumes, or: Read-Only AI Is Underrated

**Speaker:** Šimon Podhajský, Head of AI, Waypoint
**Source:** https://www.youtube.com/watch?v=u0TOSBbAw7c
**Duration:** 11:31
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Today, I'll talk about a personal AI system that knows you, but won't do anything instead of you or on your behalf, and won't blow up your life.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (11:31).

## Practical Takeaways

- Four data sources, none of which were designed to talk to each other, combined into an insight you'd never get from any single tool.
- Once again, this is a Claude skill, >> [sighs] >> but in this case, I've hidden most of the guts of the Claude skill into the cross-origin query, and ask for the specific question uh in plain language.
- The Clay MCP takes forever to run, but it searches my CRM, or my friend relationship system, I suppose, so FRM, for people who might be interested in articles of on these topics.
- Now, as you might notice, this takes up a lot of tokens in the context window, so you probably don't want to do this in a session that is not clean, but it's not a problem if it messes up a little bit of the 1 million context window for 4.
- The argument I'm making here is that read-only isn't a stepping stone to {quote} real agents.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
