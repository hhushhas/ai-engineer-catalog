# MCP Agent Fine tuning Workshop

**Speaker:** Ronan McGovern
**Source:** https://www.youtube.com/watch?v=Nqb7JTx0Pqo
**Duration:** 35:30
**Recommendation:** Watch
**Hasan-fit themes:** context engineering, agent systems

## Gist

I'm Ronan from the Trellis Research YouTube channel and today I'll be showing you how to run an agent that has access to tools via MCP servers and then take traces or logs from the highquality runs and use them to fine-tune and improve the performance of a model.

## Why Hasan Should Care

This session maps to context engineering, agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (35:30).

## Practical Takeaways

- By the end of the workshop, you should be able to generate highquality MCP agent reasoning traces.
- Now, all of the materials are available online in this repo here, Trellis Research AI Worlds Fair 2025, and they're in the MCP agent fine-tune folder.
- How it allows a language model access to tools and I'll emphasize what we need to understand about those interactions when we're building both the fine-tuning scripts and also the agent scripts and saving of those logs.
- If you clone it, you want to open up then the MCP agent fine-tune folder and go to the readme.
- And if we're not using OpenAI itself, which we won't be because I'm going to generate the traces using a Quen type agent because I'm going to fine-tune a Quen model later.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
