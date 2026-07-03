# How we solved Context Management in Agents — Sally-Ann Delucia

**Source:** https://www.youtube.com/watch?v=esY99nYXxR4
**Duration:** 16:17
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

I'm here to talk a little bit about context windows and I'm really excited because I get to talk about something that my team and I have been building for honestly close to a year now, which is our AI agent Alex.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:17).

## Practical Takeaways

- So I know the pain of building these products firsthand and it is not easy to build a successful agent.
- We have advanced planning, 40-plus skills built into it, core workflows across prompt engineering like prompt optimization, data gen, data augmentation, annotations, etc.
- I think very early on everybody was really really focused on the prompts, but we started to realize that the context is what really made an agent fail or succeed.
- So, my little perspective is the best context strategy is one that lets your agents remember what it needs to um, and forget what it doesn't.
- So, I think a lot of folks think um, like context management is just like what fits in the window, but context engineering is really choosing strategically what the model sees.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
