# TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM

**Speaker:** Cormac Brick, Google
**Source:** https://www.youtube.com/watch?v=BKWpYIWvAo4
**Duration:** 1:20:58
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Um but yeah, happy to share like both where we're up to and also give a kind of overview of like as part of that we can also kind of cover the story of like where is um where is mobile mobile AI up to today right like what's the state of the art what are the different patterns we see for model deployment so the two things I want to focus on in this talk are uh tiny LLMs and agent skills um so tiny LLMs are very very small models um agent skills are now possible on device with larger models uh are needed to make those kind of work fluently on device.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:20:58).

## Practical Takeaways

- Um then looking at agent skills which we built on top of the latest generation of uh Gemma models um uh that can run on both Android and iOS as well as many other platforms.
- like we um do some uh yeah uh there's people use AI within like messaging apps for example and people like their messages just to stay on their phone encrypted fully private so that's a good kind of example of where we're seeing LLM's getting deployed is assisting in some of those types of use cases okay where privacy is really important um offline use yeah that's kind of obvious and then savings um yeah like we see this being increasing ly relevant for laptop users where you see a trend towards folks at least experimenting with um uh experimenting with um small language models to do some types of tokens they may do with the desktop agentic workflow they have going on.
- So then yeah some some of the things we're seeing for LLMs on device is kind of privacycentric stuff uh voice agents and local agents uh with uh tool calling is a very popular workflow and then yeah within our stack we lighter TLM is the uh thing that we'll look at a bit later that helps us run tiny LLMs on device crossplatform and it's fast because we support all of the different hardware accelerators.
- Um so a good example here is we launched function Gemma um in December and that's a was a 270 million parameter model that was dedicated for function calling and we're able to show that uh doing uh like 10 diff doing voiceto function calling for 10 different uh functions that were relevant to kind of Android developers and our internal evals we did an internal eval set that kind of reached over um it's like 85 to 90% uh kind of reliability just using that very small model which was widely deployable to iOS and Android devices and that's actually something you can play with in a a sample app that that we have that we'll look more at a bit later.
- So instead of like in an MCP workflow where you need to describe everything about all of the functions that you need, the way we've structured the skills is there's a kind of oneline description, the oneline descriptions of the skills is what the agent sees and then if it thinks that sounds interesting, then it asks for more.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
