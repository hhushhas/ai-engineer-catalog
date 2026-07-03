# Building safe Payment Infrastructure for the autonomous economy — Steve Kaliski, Stripe

**Source:** https://www.youtube.com/watch?v=KLSuFPj2ld0
**Duration:** 18:46
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

So we're going to talk about agents as economic actors, all the bad things that can happen, the solutions that that Stripe and our partners have worked together on to fix those, and then a little bit of what's next.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:46).

## Practical Takeaways

- So, um we probably we're going to zoom through this cuz all we talked about today is agents, I imagine.
- Um again, we all know this, but uh crudely, an agent is just calling LM and calling tools.
- Um, but, you know, as as here, there are other different payment methods that are hard or if not impossible for an agent to relay.
- So, back to that original point around tool calls, um well, tool calls are just sort of HP requests that agents can make.
- So, similar to the last thing we showed where the seller kind of conveys the need to pay, we establish a back and forth between agent, a seller, and their PSP, where every single time the agent wants to create a checkout or update the quantity or pick a shipping amount, the seller can relay sort of like a tool called relay back the latest state, respond to that request, and ultimately result in payment.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
