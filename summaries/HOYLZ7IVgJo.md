# Shipping an Enterprise Voice AI Agent in 100 Days

**Speaker:** Peter Bar, Intercom Fin
**Source:** https://www.youtube.com/watch?v=HOYLZ7IVgJo
**Duration:** 17:10
**Recommendation:** Watch
**Hasan-fit themes:** agent systems, product and startups, voice and multimodal

## Gist

So it's not just that the agent but also tooling for analyzing conversations, training the behavior of the agent and also testing and deploying changes.

## Why Hasan Should Care

This session maps to agent systems, product and startups, voice and multimodal. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (17:10).

## Practical Takeaways

- And with voice AI agents, it can be at least five times cheaper.
- Finn over chat has been handling those kind of conversations for years and our customers have constantly told us that they seeing the same type of issues over the over the phone as they see on chat and we also validated this through extra analysis of of call transcripts and this confirmed that a very large percentage of all the queries could be solved with the with the knowledge base with the help articles content rather than say with the API integrations and we're also thinking about the initial wedge use case so like the what's the lowest possible risk way for companies to integrate voice agents and we looked at the in office hours and outside of office hours use cases.
- Uh so there's the main uh chained loop for uh for the voice agent ST lm tts uh so speech to text converting uh speech into text lm for uh actually dating the response and text to speech for converting text back into audio uh but there's also another approach with the voicetovoice models where uh everything is processed directly in audio while skipping the text layer entirely.
- Um uh so actually being able to put the agent on the phone lines and we had a bit of a head start because our agent on chat already had the rack set up and we already had a native phone support product.
- So latency um on chat it's actually I think okay to wait for a few seconds for response at least from the user perspective that there's a lot of tolerance but obviously it doesn't really work on voice if the agent goes silence for for a second or two or maybe longer uh the user might assume that something has gone wrong.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
