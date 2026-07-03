# Hacking the Inference Pareto Frontier

**Speaker:** Kyle Kranen, NVIDIA
**Source:** https://www.youtube.com/watch?v=Y2qc0UhDSnc
**Duration:** 20:25
**Recommendation:** Optional
**Hasan-fit themes:** infra and deployment

## Gist

Uh and now I'm an architect and lead for a project that we just released in open source called NVIDIA Dynamo that aims to do things like enable data center scale inference to manipulate your deployment and manipulate the paro frontier in order to achieve better SLAs's or achieve lower costs for your existing SLAs's.

## Why Hasan Should Care

This session maps to infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:25).

## Practical Takeaways

- Latency, whether or not the task can be completed in a fast enough envelope for, you know, either the user to be happy or to meet safety guarantees like for robotics, uh, and cost.
- So this is the the latency versus the cost and for different applications really you want to enable your prao front enable or you actually really only want one point on the prao frontier it's right what is your operating latency what is the operating quality you need and how can you minimize cost for that now this really actually depends on the application you're talking about so one of the most important things you're doing when you're thinking about breaking the creative frontier is you're thinking about your application so for example if we're talking about personal cancer cures, which is a topic that's talked about a lot in the context of generative AI.
- agent mode and um you know other applications where the the chatbot or applications working next to the user there's not as much a consideration for latency but there is a concern for both quality and cost.
- For example, quantization speeds up your latency and it also decreases your cost because you can produce higher batch sizes.
- Retrieve augmented generation generally slows down your application, makes it higher latency, increases the cost but also increases the quality.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
