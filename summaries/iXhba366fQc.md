# Building voice agents with OpenAI — Dominik Kundel, OpenAI

**Source:** https://www.youtube.com/watch?v=iXhba366fQc
**Duration:** 1:25:35
**Recommendation:** Optional
**Hasan-fit themes:** voice and multimodal

## Gist

I work on developer experience at OpenAI and I'm excited to spend the next two hours to talk to you all about voice agents.

## Why Hasan Should Care

This session maps to voice and multimodal. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:25:35).

## Practical Takeaways

- There's just a few fields you can't pass in, but they can be used in what is a what's called a real-time session because with voice agents, there's a lot more things to deal with than just executing tools in a loop.
- Um the other part is the traces part is automatically going to be stored on the open AAI uh platform as long as you both enable that tracing you can disable it um by default in the agent SDK is enabled and then um the other aspect of that is if you are a ZDR customer so a zero data retention customer of open AAI you don't have access to that traces feature um about the conversation Um, so the question was how much of the like voice context, how much of the previous conversation is being used.
- kind of actually say you okay if I do this or not to do that and then do voice extra voice so the the basically this is happening so the question is does it automatically do this like the what we're doing and the reason why this is separate is the model is asking for this tool to be executed but we're intercepting this um basically before we're ever generating or executing the response this is intentional so that like you don't have to deal with like we want you to think through why should this tool need approval as opposed to doing that somewhere halfway through your tool execution and you have to like deal with the consequence of rolling back every decision that you've made for example and so by default if this is just needs true it cannot get past that until the execution was approved at which point it stores it in the context that is stored locally and then bypasses that security.
- And like it also means that you can like for example take all of the like more reasoning heavy workloads and take it out out of the voice agent model.
- Um you can it's it's tool called so like I think you like you would have two options right like you could do par like parallel tool calling or you could um like have one tool that then triggers running multiple agents right so like my recommendation would be that part potentially uh so that you're not relying on the model making the right decision of calling multiple tools at the same time like you want to make the decision making for the voice agent always as easy as possible.

## Implementation Ideas

- Map product ideas to realtime UX, latency budgets, and fallback behavior.
