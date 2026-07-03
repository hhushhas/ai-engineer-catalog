# How Intuit uses LLMs to explain taxes to millions of taxpayers

**Speaker:** Jaspreet Singh, Intuit
**Source:** https://www.youtube.com/watch?v=_zl_zimMRak
**Duration:** 18:59
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Uh the key goal is that we found that a lot of the genos tooling that comes out of the box is not supporting all our use cases.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (18:59).

## Practical Takeaways

- We want to most prominently working in tax we are in the regulatory business uh safety security uh is very very important.
- So as I said earlier right we have millions and millions of customers who are coming in.
- Uh of course to begin with the first iteration was the prompt tooling uh basically a prompt based solution to try and go through what's your tax situation going on.
- The production model that we went with is claude uh for this use case.
- So uh we went with cloud because that's the primary one we are using there and we stuck to static queries and we tested it out and uh it does well uh it definitely does well uh quality is there uh it takes effort to fine-tune the model uh however we found that was a little too specialized in the specific use case and uh one thing I want to highlight I'll deep dive further on is eval so you want to make sure that we evaluate everything we do um you want to make sure what's happening in production.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
