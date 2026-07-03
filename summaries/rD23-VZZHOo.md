# Serving Voice AI at $1/hr: Open-source, LoRAs, Latency, Load Balancing

**Speaker:** Neil Dwyer, Gabber
**Source:** https://www.youtube.com/watch?v=rD23-VZZHOo
**Duration:** 16:09
**Recommendation:** Skim
**Hasan-fit themes:** voice and multimodal, infra and deployment

## Gist

Um so you know we have some core building blocks like voice memory um video inputs coming soon tool calling kind of like the usual suspects I guess but our focus is really on the consumer apps um you know we we see the like the replacing human use cases pretty often um like the call center use cases customer support AI SDR that that kind of stuff um but our interest is really in the the consumer space we think um these kind of like real-time synchronous AI experiences are going to be as ubiquous us as as websites and apps in the next kind of like two to five years.

## Why Hasan Should Care

This session maps to voice and multimodal, infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:09).

## Practical Takeaways

- Um, so we knew that uh and at the time we were not hosting any any voice models.
- Um so at the time open source there weren't a lot of good open source voice models.
- Uh it's a voice model, but it it started as a llama three billion.
- Um it was trained on uh pre-trained on like a 100,000 hours of uh voice uh data and text data as well to make sure it kepts its understanding of kind of like language.
- Um, other thing that's really important obviously for all voice use cases, not just um not just consumer, is latency.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
