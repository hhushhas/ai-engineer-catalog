# Teaching Gemini to Speak YouTube: Adapting LLMs for Video Recommendations to 2B+DAU

**Speaker:** Devansh Tandon
**Source:** https://www.youtube.com/watch?v=LxQsQ3vZDqo
**Duration:** 22:51
**Recommendation:** Optional
**Hasan-fit themes:** voice and multimodal

## Gist

Um, so in terms of my talk, I just want to introduce the problem of YouTube recommendations and then talk about how we've built large recommener models.

## Why Hasan Should Care

This session maps to voice and multimodal. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:51).

## Practical Takeaways

- Then we can align it for different recommendation related tasks like retrieval and ranking um and basically make a small custom version of this model for all of the major recommendation surfaces.
- Um and so this is a model that we have launched in production at YouTube for a while in terms of the retrieval system and we're experimenting a lot on the ranking side.
- So I want to start with just kind of explaining how we built this YouTube and Gemini model and then we'll talk about how we use it for retrieval.
- Uh the ideal product we wanted to make was we want to give this model an input of a number of video tokens and then just get video tokens out that would be good recommendations.
- And you can just construct a prompt like we have on the right with this user demographic information, the context video, and have the model decode some video recommendations as SIDs.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
