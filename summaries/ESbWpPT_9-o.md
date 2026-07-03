# Run Frontier AI at Home — Alex Cheema, EXO Labs

**Source:** https://www.youtube.com/watch?v=ESbWpPT_9-o
**Duration:** 1:45:02
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So, um you know, basically everything all the operations you're doing, depending on the model, is like most of those operations are memory bound.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:45:02).

## Practical Takeaways

- So, there's kind of like a pre-fill stage and a decode stage and my argument is prefill doesn't actually matter that much especially when you're running the stuff locally and the reason is basically okay so just explain like prefill stage is loading your contacts with your prompt so you know if you're loading in a PDF or something it's the part that actually generates all your KV caches and then you have the decode stage which is auto aggressive and that just generates token one by one that part's memory bound prefill part is compute bound with the with the prefill part what you're seeing actually is like and again this goes back to this idea of like you know the harness matters a lot so a good harness what it will do is it would get a lot of cash hits so it would keep the prompt mainly the same and if you look at if you type in a slash context when you run code code you can actually just see this so you can see that um you know it would basically show you like uh all the parts of the prompt and you can see there's like a big part of it that is just the system prompt and system tools and that stuff doesn't really change so maybe if Claude you know maybe if they push an update this will change but broadly speaking you can you know keep most of the prompt the same when you're running you know actual workloads end to end you know maybe in the benchmarks you'll see people that are doing stuff at like you know really long contexts really long prompt sizes and you know my my argument here is it doesn't matter actually as much as people think so you know really it's about decode and what matters for decode well it's three things so like I said it's memory bound but you know the first thing is you have to actually fit it into memory so um if you want to run a model at a good speed, then if it doesn't fit into memory, you're going to be loading it from disk, which is super slow.
- So, like, you know, um, here I I I'm talking about energy per byte, so I'm talking about like in these memory bound in this memory bound decode phase, like how much energy does it cost to move one byte one gigabyte?
- 1, which I want to show you as well, uh that came out yesterday and that's probably the frontier model now for for open source.
- And um to me, like having like a 10 trillion parameter model go First of all, like having a 10 trillion parameter go reason for few minutes wouldn't work in that use case, cuz you need it to be low latency.
- 5 and you know, a lot of people uh came uh you know, uh back to work after like the Christmas and used these latest models and they're like, holy [&nbsp;__&nbsp;] like things have really improved.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
