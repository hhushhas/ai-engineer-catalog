# When Vectors Break Down: Graph-Based RAG for Dense Enterprise Knowledge

**Speaker:** Sam Julien, Writer
**Source:** https://www.youtube.com/watch?v=XlAIgmi_Vow
**Duration:** 15:47
**Recommendation:** Skim
**Hasan-fit themes:** product and startups, rag and data

## Gist

Uh, welcome to When Vectors Breakdown, graph-based rag for dense enterprise knowledge.

## Why Hasan Should Care

This session maps to product and startups, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:47).

## Practical Takeaways

- And I think in addition to all of the agentic uh promise of graph-based rag, we're also seeing that the market is starting to catch up that vector search is just not enough for rag at scale.
- And if you're not familiar with writer, we're this end-to-end agentic platform for enterprises where we build our own models, we build our own graph-based rag system and have this suite of software tools on top of that for enterprises to be able to build agents and AI applications.
- And I'm just going to put a blanket caveat on here that please consider this a sketch and not a blueprint of what is currently in production.
- So they went back to the original rag paper and if you go back to the original rag paper it doesn't actually ever talk about using prompt context and questions which is super interesting right that's sort of like the deacto way of doing rag now but the the original rag paper actually proposed this whole like two uh component architecture with a retriever and a generator with pre- pre-trained sequence to sequence model never actually talks about prompt and context in questions and so that's where they came across fusion and decoder which I kind of think of as like an alternate timeline for rag like if we if we didn't go down the road of uh prompt and context and questions and so fusion and decoder is this technique that kind of builds upon the original proposal of the original rag paper where it processes the passages independently in the encoder to get linear scaling instead of quadratic scaling but then jointly in the decoder for better evidence aggregation.
- Benchmarks are really cool but what's even cooler is like what it unlocks for our customers which are various features in the product.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
