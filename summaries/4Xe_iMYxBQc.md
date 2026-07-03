# Information Retrieval from the Ground Up

**Speaker:** Philipp Krenn, Elastic
**Source:** https://www.youtube.com/watch?v=4Xe_iMYxBQc
**Duration:** 1:48:07
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

So, I guess we're not over rag yet, but uh rag is a thing and we'll focus on the R in rag, the retrieval augmented generation.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:48:07).

## Practical Takeaways

- Um B, it creates a lot of storage on disk because you extract so many different tokens.
- It's not quite as easy because you say say like these five characters match these other five characters here, um but you need to trust or evaluate that you have the right model to figure out how these things connect.
- Yeah, I feel like rag has been very heavily abused that it's or like the mental model I think started off as like you do retrieval and then you do the generation, but you could do the generation earlier on as well that you do the query rewriting and expanded query.
- So, here I've broken up my long text field into multiple chunks and there are multiple strategies to do that by page, by paragraph, by sentence.
- And then we have this machine learning, the learned side, or the semantic search, uh where you have a model behind the scenes, uh split into the dense vector um embeddings and the sparse vector embeddings um for vector search or learned sparse retrieval.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
