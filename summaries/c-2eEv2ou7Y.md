# Why MCP and ChatGPT Apps Use Double Iframes — Frédéric Barthelet, Alpic

**Source:** https://www.youtube.com/watch?v=c-2eEv2ou7Y
**Duration:** 20:11
**Recommendation:** Skim
**Hasan-fit themes:** context engineering

## Gist

So if you're having a conversation that's relevant for an app to be brought into to add additional context and feature some nice additional actions, they will be brought into the conversation.

## Why Hasan Should Care

This session maps to context engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:11).

## Practical Takeaways

- And if the host supports MCP apps, it will use the relevant view corresponding to this tool call to display the results.
- It's just a way to package those small snippets of application and they are discoverable ahead of time because all views are described on the tool list calls that happens at the beginning of the conversation between the host and your MCP server or MCP app.
- The conversational agent on the host will create this new iFrame where the view will be displayed and it will inject the tool results inside so that you have dynamic content rendered to the user.
- To be able to run external UI inside ChatGPT, we will use a dedicated HTML element that has been made specifically for this purpose, which is the inline frame element or iFrame that is made to basically spawn up nested browsing context inside your browser window.
- So those small pieces of views will be rendered as almost separately completely isolated browsing context.

## Implementation Ideas

- Look for reusable context packets, skill files, memory rules, and workflow prompts.
