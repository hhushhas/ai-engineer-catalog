# Any-to-Any: Building Native Multimodal Agents

**Speaker:** Patrick Löber, Google DeepMind
**Source:** https://www.youtube.com/watch?v=GIRpQEfYf3U
**Duration:** 16:21
**Recommendation:** Optional
**Hasan-fit themes:** voice and multimodal

## Gist

And today I want to talk about any-to-any building native multimodal agents.

## Why Hasan Should Care

This session maps to voice and multimodal. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:21).

## Practical Takeaways

- So, I want to focus on on four things, four models, the multimodal understanding with Gemini, native image generation, native speech generation, and then also if we still have time a little bit about the live API.
- Here we are having a reasoning model that can decide what to create, and then it's hooked up via tool calls or function calls, and then calls the other specialized models.
- This is where we have the agentic loop where we use Gemini as the reasoning model, and it can then call different tools, and these will then generate different modalities for us.
- You can just yeah hook up your agent with the Gemini skill, and then tell it um to create this, and then it should know how to work with the Gemini models.
- And then if you set up your model call client models generate content you you configure the tools.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
