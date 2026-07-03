# Why Your Agent’s Brain Needs a Playbook: Practical Wins from Using Ontologies

**Speaker:** Jesús Barrasa, Neo4j
**Source:** https://www.youtube.com/watch?v=CbiR9xS2skQ
**Duration:** 13:54
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

So your your AI application will get a prompt from the user and instead of passing it on to the LLM directly, what it will do is we'll go out to a retrieval to a control curated trusted uh sort of knowledge base to retrieve potentially relevant information that will be passed to the LLM in the context window so that the response or the task is accomplished based on on more grounded uh information rather than purely generated.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (13:54).

## Practical Takeaways

- So now the the interesting thing of course is that uh by using a knowledge graph what you get is a much richer collection of retrieval strategies and we're going to see that uh you have not only the vector semantic search over a vector index you can also uh contextualize results because a graph captures the connections between data points so you're going to be able we're going to go deeper in in into how that happens is it also possible to to generate structured queries so there's a rich collection of retrieval strategies like I was saying that augments what you traditionally have with you restrict yourself to only vector search and and the result is that you get uh better quality results uh more completeness better completeness more relevance better precision more faithfulness a lot of metrics that I'm sure have been mentioned over the last couple of days and I won't spend too much time but um but what does the graph look like again uh especially for those of you who have not familiar with this but the we implements the property graph model which has two main primitives is nodes and relationships.
- So you define your graph model, you map to your data sources, you map the you connect the dots and and you get a graph generated behind of course is an API base and you can do the same thing programmatically.
- So you will find a definition of a class which actually matches very well what a what a graph model looks like.
- And we're going to see that in the retrieval phase because if you have a good description of your graph, your text to structured query is going to generate better and more accurate queries, but also when we use the the vector plus contextualization, that's going to pay off as well.
- Now on the retrieval side of things, let me spend a minute explaining how this magic happens because I said that you have a better retrieval strategies, richer ones and um and what's happening there.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
