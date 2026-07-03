# We Cut 94% of AI Coding Tokens With a Local Code Index

**Speaker:** Rajkumar Sakthivel, Tesco
**Source:** https://www.youtube.com/watch?v=dRmWYHuIJxM
**Duration:** 10:43
**Recommendation:** Skim
**Hasan-fit themes:** coding agents

## Gist

It was sending 45,000 tokens of context, but the part of actually mattered is about 5,000 only.

## Why Hasan Should Care

This session maps to coding agents. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (10:43).

## Practical Takeaways

- It's It's like ordering a pizza and paying for extra nine pizzas you don't eat every time.
- The model already got 45,000 tokens before it read the prompt.
- Second, we change the model setting like a max token temperature.
- Step one, we read the code and break into small pieces, functions, classes, methods.
- We tested an open-source real project, FastAPI, 53 files, 20 real questions a developer would ask.

## Implementation Ideas

- Extract patterns for agent planning, review loops, codebase context, and verification gates.
