# Building an Agentic Platform

**Speaker:** Ben Kus, CTO Box
**Source:** https://www.youtube.com/watch?v=12v5S1n1eOY
**Duration:** 19:06
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

I'm CTO Box and I'm going to talk today about our journey of uh through AI and in particular our AI agentic journey.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (19:06).

## Practical Takeaways

- But uh what we learned and what I'll tell you about is how you the concepts of agentic uh uh capabilities applies well beyond just sort of a end user interactions.
- also we're not quite sure this is right and and then our enterprise customers would kind of be like well that's helpful to know but like I want it to work right not just you tell me it doesn't work right and so this became this kind of set of challenges that that that um we we we focused on and so customers were looking for speed they're looking for affordability they're making this work they're saying if AI is this future awesome thing then like you know show it to me and so and on these more complex documents so at this point we kind of hit our our despair moment um our we thought LLM's resolution everything we thought that like we could have these AI models that worked but um and we actually struggled like what do you do now how do you fix this and I know let's just wait until uh the next Gemini model or uh you know OpenAI seems to be on top of this so like wait till the next one which is part of it right the models do get better but um the fragility of the architecture was one that was uh we weren't really going to be able to solve on our own so um naturally uh one of the answers uh that we were came up with was um bringing agentic approaches to everything that we do.
- And when I say agentic, I mean an AI agent that does something like this instructions, objectives with the model background tools, we can make have secure access.
- And this was for us um it was controversial like it was like our engineers like what are you talking about like let's just make the OCR better like uh like let's just add another step somewhere like let's just add a post-processing uh regular regular expression checks and then and then of course everybody always like I have a way to do this um based on the old way of doing this why don't we make train ML model like why don't we fine-tune and then and and then and then and then and then and then and then and then and then and then and then and then and and so suddenly all of the genericness of it would be get lost in this process so um we came up with a mechanism which was a uh so this is uh think like kind of langraph style they have agentic capabilities and um so we still we went uh we still had the same inputs and outputs in document with fields out answers however the approach was an agentic approach and so um you know we played with all the models uh reflecting uh back and forth and criticism uh being able to uh uh separate in multiple tasks uh to be able to have different multi page systems work on this and we ended up with something like this where you have a step where you prepare the fields you go through you group the fields we learned quickly that like if if there's like a set of fields that are like customers uh from a contract and then or like like parties and then somewhere else there's like the address of the parties like you need the AI to handle those together otherwise it's like you have three parties and two sets of addresses which don't match match so we we so we had to break up intelligently the set of fields we had to go through and we had to um uh like uh uh do multiple queries on a document Then after we got that, we would then use a set of tools to check and to double check the results.
- It is it is very um once you start to think this way it is very natural to think I'm going to run an intelligent workflow intelligent directed graph powered by a models are every step to be able to accomplish a task not everything but sometimes that's a great that's a great approach and this and this is independent of some of a highcale set of of sort of distributed system design and and in both are important like at some point you have to deal with you know 100 million documents that day at the same other point you have to deal with that one and so being able to separate these two systems into like somebody who thinks about the agentic framework and somebody who thinks about the the how to scale a generic process is this is this is very helpful to keep these distinct.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
