# The RAG Stack We Landed On After 37 Fails

**Speaker:** Jonathan Fernandes
**Source:** https://www.youtube.com/watch?v=2CXn-CByNoo
**Duration:** 18:52
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

Now if you are new to rag I'll give you a bit of an introduction but this is my objective is for this to be the most ROI rag guide per minute on the internet.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:52).

## Practical Takeaways

- uh it helps you to know uh you know where the majority of the time is for example in terms of the uh language model and other components and so the two solutions here are langu Phoenix uh for my prototype and in production I'll often just use Arise Phoenix uh because I can just very easily use that in a docker container in terms of re-ranking and improving the accuracy of your rag solution uh again my my go-to choice is a closed model such as uh the one from cohhere or I might use an open solution uh such as the one from Nvidia and again in the Docker solution I'd use the open solution from Nvidia and then finally it's really important to be able to evaluate how good your rag solution is doing uh and I'll use the raggas uh framework there now in our time together I'll be looking at just a single knowledge base and if you want to get the most of your time in terms of understanding rag I suggest you just use the next 3 to 5 minutes pause this video and take a look at this knowledge base uh because we'll be answering a very simple question which is where can I get help in London and so this knowledge base is for a train or a railway company operating in London and this is the information in terms of HTML files where you can go to each of the links and you'll be able to get uh information for that train operator.
- So, rag is uh retrieval augmented generation and so you might have the initial user query which might be something like where can I get help in London and the first and most important step is the retrieval step.
- The next piece is the augmented piece of rag and this is where the original query is combined with the information that's been picked up from the vector database and this is provided as context to the language model.
- What you'll want to do when uh when working with a rag solution is to have a rag eval evaluation framework that will allow you to test on a whole load more documents.
- um I'll use the closed coher solution for prototyping but in production I'll probably use the Nvidia um solution that allows you to to do re-ranking and finally rag evaluation.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
