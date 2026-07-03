# Agentic GraphRAG: Simplifying Retrieval Across Structured & Unstructured Data

**Speaker:** Zach Blumenfeld
**Source:** https://www.youtube.com/watch?v=CzM3cW6FdBs
**Duration:** 15:25
**Recommendation:** Skim
**Hasan-fit themes:** agent systems, rag and data

## Gist

And I could talk about accuracy and explanability, but I think what's really valuable to talk about is kind of what this means going forward with agents and how it's valuable for agentic workflows.

## Why Hasan Should Care

This session maps to agent systems, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:25).

## Practical Takeaways

- And as we think about some of what agents can do with reasoning and decomposing questions, a lot of the retrieval that we're seeing is not so much just a straight shot vector search anymore.
- And the great thing about having a knowledge graph is that you can express a very simple data model to get started to your agent which can help it do that decomposition, pull information accurately, and then as you sort of expand, you can keep adding more and more data.
- And basically what I'm going to do is I'm just going to create an agent inside of ADK, so Google's framework.
- And so basically what you're going to see here and I don't have time unfortunately to walk through all of the code but basically if you look at this agent that's been constructed right I have my agent I have some instructions to pull data and then I give it one tool which is a tool to go search documents right and so I'm going to ask it a question how many Python developers do I have you can imagine right this is probably not going to work out very well if all I have is just documents because basically it's going to tell me I five Python developers and that's because I set K equal to five right when I went to go pull my document.
- So the question is now well how do I think about basically explaining my data to my agent and then also making sure right that I have a data model that makes sense.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
