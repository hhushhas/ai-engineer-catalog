# How Claude Code Works

**Speaker:** Jared Zoneraich, PromptLayer
**Source:** https://www.youtube.com/watch?v=RFKCzGlAU6Q
**Duration:** 1:05:43
**Recommendation:** Skim
**Hasan-fit themes:** coding agents

## Gist

And kind of the highle goal that I'll go into is me personally, I I'm a big user of all the coding agents, as is everyone here.

## Why Hasan Should Care

This session maps to coding agents. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:05:43).

## Practical Takeaways

- and they kind of exploded recently and as a developer I was curious what changed what made it finally what made coding agents finally be good.
- And a lot of the insights in this talk come from just conversations we have with our customers on how to build coding agents and stuff like that.
- Everything in cloud code and and all the coding agents today, codeex and and and the new cursor and AMP and all that, it's just one while loop with tool calls just running the master while loop calling the tools and going back to the master while loop.
- uh their vision is how do we build not just the best agent but how do we build the agent that works with the most agentfriendly environments and actually factory gave a talk similar to this as well but how do how do you build a hermetically sealed uh a like coding repo that the agent can run tests on how do you build the feedback loop because that's kind of the holy grail that's how we build an autonomous agent and how do we uh I'd love to see the front-end version of this how do let it look at its own design and make it better and go back and forth and this is kind of their guiding philosophy and you could boil it down to the agent perspective as I've been calling it.
- Um I think you could this is a picture they put on their blog and you could see what their perspective is on coding agents here just based on the fact that they show you the three models they're running.

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
