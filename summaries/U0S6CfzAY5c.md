# 360Brew: LLM-based Personalized Ranking and Recommendation

**Speaker:** Hamed and Maziar, LinkedIn AI
**Source:** https://www.youtube.com/watch?v=U0S6CfzAY5c
**Duration:** 22:00
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

And uh today uh uh we're going to talk about our journey in leveraging large language models for personalization and ranking u and our path to production such a large model for uh for LinkedIn use cases.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (22:00).

## Practical Takeaways

- So there's as you can see there's an instruction for the model to follow for example what we want the model to do in this case so that we can actually generalize over different instructions.
- So this is actually the pipeline that we have for developing the model and making it productionize.
- So as you can see the left hand side we start with the open source model then we do some uh magic of upycling to to basically so that we can actually control the size of the model and the throughput versus the quality of the model and then we have like a few uh blocks of training uh continuous pre-training fine-tuning and in instruction fine-tuning and also alignment and at this point we have this large model which is we call blue XL which can think of it as a large model with 150 billion parameters that does really really well and we we have maximized the quality but obviously this model is not going to be able to serve online because as you as you know the recommendation systems are very very coopus hungry so from here we go all the way down to try to distill the model so maximize the efficiency and we're going to talk a little bit about that but basically we go all the way down to let's say 3B model which is actually something that can be productionized but as you can see there are so many different boxes here and in order to make sure that the the the development cycle is actually smooth.
- And the context length actually defines how much history from the user you can actually give to the model.
- The problem is that the models I mean at least the model that we were using in this experiment doesn't generalize that well to the longer context.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
