# Building Reliable Support Agents Using the Effect Typescript Library

**Speaker:** Michael Fester
**Source:** https://www.youtube.com/watch?v=sXXl3YMU7ZI
**Duration:** 7:22
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Our systems interact directly with end users, rely on LLMs in production, and have to operate reliably under uncertain conditions.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (7:22).

## Practical Takeaways

- The TypeScript language itself gives us a great foundation, but it starts to fall short when we're dealing with unreliable APIs, complex dependencies between systems, non-deterministic model outputs, or longunning workflows.
- Effect gives us the tools to handle such situations confidently as our platform evolves.
- Agent workflows are written in a custom DSL built on effect, allowing us to mix deterministic and nondeterministic behavior.
- They take input from the user, come up with a plan, choose the right action, workflow or sub agent, executes them and repeats until the task is complete.
- Finally, sub agents group together related actions and workflows into larger domain specific modules like a building agent or a log retrieval agent.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
