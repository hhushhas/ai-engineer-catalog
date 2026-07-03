# From MCP to Scale: Pipelines That Build Themselves — Rafael Levi, Bright Data

**Source:** https://www.youtube.com/watch?v=zTZ0qunQXnM
**Duration:** 25:26
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, infra and deployment, rag and data

## Gist

So, uh in the previous session, I I don't know how many of you were here, but I talked about how MCP gives access to LLMs to websites that are behind uh CAPTCHA, bot detection systems, and so on.

## Why Hasan Should Care

This session maps to context engineering, infra and deployment, rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (25:26).

## Practical Takeaways

- Because a lot of times I'm seeing on Reddit and other social media is like, "Oh, I need to scan 10,000 products, but that's so many tokens if I need to parse everything with LLM.
- " build a scraper that's going to parse it for me, and I will demonstrate how easy it is uh with our skills, right?
- So, what I'm trying to show you guys is that with our MCP, with our infrastructure, we have over 150 million IPs.
- Um on top of that, remote browser infrastructure and the anything that needs anything that your agent needs to access the web.
- When you have when your agent actually has access to a blocked website and you're working I mean, the MCP is mostly useful in about 20% of the of the domains, right?

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
