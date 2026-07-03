# Build & deploy AI-powered apps

**Speaker:** Paige Bailey, Google DeepMind
**Source:** https://www.youtube.com/watch?v=G_bHFmEAarM
**Duration:** 1:03:20
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Um, so respectively our largest and smaller model, um, that are uh, performant, efficient, able to do a lot of things um, very, very quickly and at low cost profiles.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:03:20).

## Practical Takeaways

- So, just automatically incorporate that as a tool, um grounding with Google Maps, uh and also even things like URL context, which gives you kind of like poor man's retrieval.
- Um uh you can have a list of URLs, and then incorporate that into the model's context window, so it can use that um to ground some of its outputs.
- If you want it to be able to answer questions that happened after that date, um you're going to have to give it access to tools either through search or through retrieval in order to do that work.
- So so strongly strongly recommend experimenting with the the smaller weight models especially turning on these tools to help them do their work more effectively.
- And so you can use publicly available information and then there are also tools within Vertex that allow you to do retrieval on custom custom documents that are internal only without necessarily having to set up a vector database for for retrieval.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
