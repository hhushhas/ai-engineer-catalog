# Optimizing inference for voice models in production

**Speaker:** Philip Kiely, Baseten
**Source:** https://www.youtube.com/watch?v=gmTHs5T_YAE
**Duration:** 15:13
**Recommendation:** Skim
**Hasan-fit themes:** voice and multimodal, infra and deployment

## Gist

Um I'm going to be talking about optimizing inference for voice models in production.

## Why Hasan Should Care

This session maps to voice and multimodal, infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (15:13).

## Practical Takeaways

- Um and uh one of my favorite voice models is Orpheus TTS.
- And then finally, what can we do on the infrastructure and client code to not shoot ourselves in the foot after doing a ton of runtime work and then just adding all that latency back by not doing our client code correctly.
- So our goal in general if all of these very nice and definitely not AI generated people are all the different like voices that our that our model is capable of creating these are all the voice agents that we're running.
- Um, and finally, I wanted to leave you on the thought that these uh, you know, these models are only one part of a voice agent pipeline.
- So like we can spend a lot more than 15 minutes actually talking about like the very detailed uh implementation mechanics of making your voice model faster of you know we we haven't even touched on stuff like fine-tuning the model um you know custom voices zeroot voice cloning um being able to you know remove static and popping at the end of messages there's there's there's a lot of work to do just on the voice part but it really only is onethird of the problem when I think about voice agents.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
