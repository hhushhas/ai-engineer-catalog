# What We Learned from Using LLMs in Pinterest

**Speaker:** Mukuntha Narayanan, Han Wang, Pinterest
**Source:** https://www.youtube.com/watch?v=XdAWgO11zuk
**Duration:** 18:13
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

It has query understanding retrieval ranking and the blending stage and finally produced um relevant and engagement search feeds.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:13).

## Practical Takeaways

- And um in today's SC talk we'll be focusing on the sematic relevance modeling that happened at the reanking stage and share about how we use LN to improve um the search relevance on the search.
- So um here's our search relevance model which um is essentially a classification model.
- Given a search query and a ping, the model will predict how much the ping is relevant to this search query.
- Um next I will hand over to Makunta to talk about how we use knowledge distillation to productionize this model.
- Um and this is the production served relevant student model that we distilled from the teacher model using semi-supervised learning.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
