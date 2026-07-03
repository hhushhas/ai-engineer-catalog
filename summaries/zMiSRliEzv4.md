# Self Driving Products: Product Signals to Pull Requests — Joshua Snyder, PostHog

**Source:** https://www.youtube.com/watch?v=zMiSRliEzv4
**Duration:** 15:39
**Recommendation:** Optional
**Hasan-fit themes:** product and startups

## Gist

So, if you connect PostHog to your product, we're collecting a huge amount of data from various different sources that we then show to you so that you can explore that data yourself.

## Why Hasan Should Care

This session maps to product and startups. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:39).

## Practical Takeaways

- But right now how observability is working in PostHog, you're you're collecting all this data for your product and then you're going to a PostHog dashboard to figure out what's going on.
- So, what we want to do tomorrow, what we're working on right now, is that a product signal happens, and instead of waiting to see that in your dashboard, we want we want to run a background agent to figure out what's going wrong.
- So, if you think of an error tracking issue, and then a session recording, those are two completely different things, but they might be representing the same problem in your product.
- Uh, if it needs human input, it might be because it's a product-related decision that the agent can't really make a good call on.
- Um so, you really need to know what's going on in production, and if you're not testing on representative data, it your you're basically just fumbling in the dark, right?

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
