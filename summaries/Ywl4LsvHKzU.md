# RAG Evaluation Is Broken! Here's Why (And How to Fix It)

**Speaker:** Yuval Belfer and Niv Granot
**Source:** https://www.youtube.com/watch?v=Ywl4LsvHKzU
**Duration:** 10:58
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

It seems that rag is so 2023 and everywhere you go you see my first rag and rag pipelines and everything is rag related as if it's already solved but actually not really well I'm Ival with me is Niv we both work at A21 labs and today we're going to talk about why rag evaluation is broken and how to fix it and the reason that rag evaluation is broken comes from a lot of things but mostly because how easy it is to build benchmarks the way humans are regular to think.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (10:58).

## Practical Takeaways

- Most of the benchmarks are either retrieval only benchmark, meaning that we try to retrieve the best segments or the best chunks for our database and we assume that again the answer is in one or two or several of them.
- or it's generation only benchmarks which is essentially just grounding benchmark right just to see that we can answer a question based on the context that are already in the prompt.
- But then when we actually give it to users or we test it on customer data, we see that they struggle.
- Uh so so you may imagine how rag systems uh currently do on such questions because they are so limited and they just grab the top k chunks that they get and try to compile an answer by that.
- Uh we split it in two uh similarly to how a regular rag flow is done and where you invest the compute in the ingestion and you try to do things quickly in the inference.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
