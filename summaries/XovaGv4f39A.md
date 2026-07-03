# When All Context Matters: Extended Cache Augmented Generation

**Speaker:** Luis Romero-Sevilla, Orbis
**Source:** https://www.youtube.com/watch?v=XovaGv4f39A
**Duration:** 5:52
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

[music] >> Hi, I'm Luis Romero Sevilla and I'm the VP of AI at the Orbifold operation.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (5:52).

## Practical Takeaways

- An embedding model takes the documents and turns them into a learned numerical representation, a vector.
- This approach would look something like "cache augmented generation" (CAG), where we use a model with a large context window, load the documents into the context, and cache the context by storing the model's KB matrix.
- The problem here is that the context window is limited, and if you fill the context window too much, the quality of the answer gets degraded, too.
- The solution: what if we use more CAGs in parallel and distribute the documents across different context buckets.
- So, for this, we can use a smarter model to interrogate each bucket and eventually synthesize an answer.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
