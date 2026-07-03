# Scaling Enterprise-Grade RAG: Lessons from Legal Frontier

**Speaker:** Calvin Qi (Harvey), Chang She (Lance)
**Source:** https://www.youtube.com/watch?v=W1MiZChnkfA
**Duration:** 16:40
**Recommendation:** Watch
**Hasan-fit themes:** product and startups, rag and data, security and governance

## Gist

So we'll start roughly with like sort of how Harvey tackles retrieval, the types of problems there are and then the challenges that come up with that all with like retrieval quality, scaling, uh security, all that good stuff and then how we end up sort of creating a system with good infrastructure to support that.

## Why Hasan Should Care

This session maps to product and startups, rag and data, security and governance. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:40).

## Practical Takeaways

- So, we sell our sort of AI product to a bunch of law firms to help them do all kinds of legal tasks like draft, analyze documents, um sort of go through legal workflows and a big part of that is processing data.
- Um the sort of different scales of that are we have an assistant product that's like on demand uploads, the same way you might like on demand upload to any AI assistant tool.
- So uh this is just on the query side of like this is maybe the average complexity of a query someone might issue in our product.
- Um, we also want smooth sort of onboarding and scaling where, you know, we definitely want our ML and data teams to be able to focus more on the sort of the business logic and the quality um, and spinning up new applications and products for customers and, you know, not too much about like the nitty-gritty details of the database or tuning that or manually scaling.
- Um like I mentioned with some uh storage needing to be like segregated depending on the customer depending on the use case sort of retention policies on some docs that we might only be allowed to store for certain amounts of time for legal reasons.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
