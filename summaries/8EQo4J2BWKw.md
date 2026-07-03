# Thinking Deeper in Gemini

**Speaker:** Jack Rae, Google DeepMind
**Source:** https://www.youtube.com/watch?v=8EQo4J2BWKw
**Duration:** 18:13
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

But their bottleneck was actually uh with these systems was that these engram language models were very restricted to short context.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:13).

## Practical Takeaways

- and they were because um there's an ex exponential storage cost with uh context length and there wasn't really a way around that with with just sticking with engrams.
- They're increasingly powerful general conversational agents.
- So when we talk about a fixed amount of test time compute, the test time compute is interesting to you because that's the compute that the model is spending on your particular problem, your particular question.
- So thinking in Gemini mechanically, I'm sure almost everyone in this room is familiar with this general process where we will now have a model and we insert a thinking stage uh that the model can emit some additional text before it decides to emit a final answer.
- um it wasn't clear how much structure we should put into something like a reasoning stage and um although I think probably many people here have now seen reasoning traces and played with these models I'll just show you a historical artifact um from one of the times we were trying to use reinforcement learning we started to see cool emergent behavior so in in this problem there's kind of like an integer prediction problem this was just like a kind of a particular uh example uh in this case kind of like um kind of like a mathsy example and what we saw was the model was using its thinking tokens to actually first pose a hypothesis and then test out the hypothesis and then it found that basically things weren't really working and and it kind of states that this formula doesn't hold it rejects its own idea and then it tries an alternative approach and I think it's easy to become desensitized to technology because it's so amazing every single day but we were truly blown away when we saw the general recipe of reinforcement learning was creating all sorts of interesting emergent behavior trying different ideas self-correction And I think these days we see a lot of different strategies that the model learns to do.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
