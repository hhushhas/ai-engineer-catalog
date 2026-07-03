# Realtime Conversational Video with Pipecat and Tavus — Chad Bailey and Brian Johnson, Daily & Tavus

**Source:** https://www.youtube.com/watch?v=ujt0da9Z29Q
**Duration:** 18:46
**Recommendation:** Optional
**Hasan-fit themes:** voice and multimodal

## Gist

I come from a little bit more of a traditional, it's funny to say that voice AI world where the traditional pipeline people talk about is speech to text, so transcription, right?

## Why Hasan Should Care

This session maps to voice and multimodal. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:46).

## Practical Takeaways

- Sure enough, people are nowadays are using some voicetovoice models.
- So, it's using a voice-tovoice model, but there's still so much other stuff you have to do to go from voicetovoice demo bot on the web to like like in your browser or on the web to an actual like shipping production app that even Google themselves, even the Gemini documentation says you can go use our own like tools and our, you know, like our our browser tools and things to experiment with Gemini Multimodal Live, but when you want to take it to production, you do need something like Pipcat to actually orchestrate what's happening in your entire app.
- And they even they're doing some interesting things that we'll talk about with inputting your user's video and allowing a Tavis replica to respond to not only what it's hearing in the voice, but what it's seeing in the video coming from the user.
- Um in the case of like Gemini multimodal live for voice or a Tavis replica, they there there is a way that you use Tavis inside a Pipcat bot where you can basically let Tavis kind of do everything for you.
- In a typical voicebot, that is, you know, that is uh text to speech that is being played out as audio.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
