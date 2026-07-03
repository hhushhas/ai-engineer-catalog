# SWE-Marathon: Evaluating Coding Agents at Billion-Token Scale

**Speaker:** Rishi Desai, Abundant AI
**Source:** https://www.youtube.com/watch?v=Rx8f05JI_WA
**Duration:** 12:58
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

What happens when coding agents move from fixing bugs to owning entire projects end to end?

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (12:58).

## Practical Takeaways

- The pattern is that coding agents are being pointed at whole projects, not just GitHub issues or linear tickets.
- SWE-bench was a big jump to real GitHub issues, where agents had to inspect a repository, make a patch, and patch some unit tests.
- We have hidden tests, reference parity checks, computer use agent checks for the product clone tasks, and anti-cheating tests.
- You You have noticed that there are basically no full stack product clone tasks in any long horizon three benchmark out there.
- Unit test can pass, but the product is probably still unusable and the front end looks terrible.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
