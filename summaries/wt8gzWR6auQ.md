# Continuous Profiling for GPUs

**Speaker:** Matthias Loibl, Polar Signals
**Source:** https://www.youtube.com/watch?v=wt8gzWR6auQ
**Duration:** 11:31
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um, I'm going to talk about maximizing GPU efficiency with continuous profiling for GPUs.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (11:31).

## Practical Takeaways

- I think some IBM folks were were trying to figure out what was happening on their computers back then.
- So um yeah, a lot of different approaches to profiling, but um yeah, it's generally speaking super super important to to performance engineering.
- But um obviously that's great for like getting like the best uh possible uh view onto the system, but it's like pretty high cost um and generates a lot of data.
- So like 100 times per second isn't that much for a CPU and that's why you get like less than like a percent overhead on on the CPU and like only like four megabytes of overhead for the memory profiling.
- So, it is pretty important to be able to do this in production and actually see what's happening uh out there in the real world and do it with uh low overhead.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
