# Building Cursor Composer

**Speaker:** Lee Robinson, Cursor
**Source:** https://www.youtube.com/watch?v=fL1iJHtl51Q
**Duration:** 15:36
**Recommendation:** Skim
**Hasan-fit themes:** coding agents

## Gist

and we wanted to take that same approach for a very low latency model and apply it to coding with agents.

## Why Hasan Should Care

This session maps to coding agents. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:36).

## Practical Takeaways

- Uh having working with coding agents for a little bit of time now versus kind of firing off an agent and waiting, let's call it 20 minutes for it to complete where you can kind of context switch away.
- One thing that's nice about having both the coding agent, the IDE, as well as what we're doing with the model research and training our own models is we can kind of co-design these things together.
- So we started about kind of the same performance as the best open model and then as we trained and kind of threw more compute at it the performance continued to increase and to a point today where we're close to the frontier in terms of kind of the best coding agents that are available and personally I think this is a great sign just for being able to take and scale RL and apply it to these very hard specialized tasks like in our example coding but it could be applied to other domains as well.
- I think from my perspective using this model and using coding agents for some time.
- And I think for some of us who adopted coding agents very early, it kind of feels like airplane Wi-Fi sometimes cuz if it's taking 10 or 20 minutes, you're in this weird I think Swiss called it semi async valley of death where you either want something that's really fast or you want the most powerful most intelligent model that can run for you know a significantly long amount of time maybe in the background maybe you know 30 minutes days and I think when you're stuck in the middle that's that's very very painful.

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
