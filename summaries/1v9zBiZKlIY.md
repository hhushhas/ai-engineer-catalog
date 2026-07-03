# Why ChatGPT Keeps Interrupting You

**Speaker:** Dr. Tom Shapland, LiveKit
**Source:** https://www.youtube.com/watch?v=1v9zBiZKlIY
**Duration:** 27:03
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

what we can learn from the study of human conversation on how to handle how humans handle turn taking and then about some of the really neat and interesting new approaches out there for handling turn taking and interruptions in voice AI agents.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (27:03).

## Practical Takeaways

- Um voice excuse me interruptions are the biggest problem in voice AI agents right now.
- And in the the next slide I want to talk about for people who are not very familiar with how voice AI agent pipelines work.
- I'm going to provide like a simplified overview of how we handle handle turn taking and interruptions in voice AI agents currently.
- That chat completion is streamed out and that stream is passed to a texttospech model where it's converted into audio and that audio which is the audio of now of the voice AI agent is passed back to the user.
- Um and but I I would say one of the generally accepted models is what I'm going to walk through now of how turn taking works in the human minds.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
