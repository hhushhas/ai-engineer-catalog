# Structuring the Unstructured

**Speaker:** Cedric Clyburn, Red Hat
**Source:** https://www.youtube.com/watch?v=-x5GEVnkuRw
**Duration:** 20:41
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

I'm an open source engineer here at Red Hat, and I think we can all agree that context is the most important aspect to building an AI application or an agent, right?

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:41).

## Practical Takeaways

- But, the thing is, no matter what model or agent that you're using, there is so much data that we're not able to use properly because it's in unstructured formats.
- And I'm going to show you how in the session today because we're going to be using an open source tool, part of the Linux Foundation, that is called Docling, and learn about extraction, parsing, chunking, and much more.
- As I briefly mentioned before, you might have a lot of technical documentation or meeting minutes or different types of documents and invoices that you need to use and maybe rag or different type of applications where the uh context is provided to an LLM.
- So, whether it's rag or retrieval augmented generation to answer questions based on this data, or you're using this to fine-tune a new specialized model, well, data is this key ingredient behind those applications.
- And I'll show you how Docling does it by using a combination of OCR and specific vision models that extract the format and allow me to do things like structure output if I only, say for example, want a specific column to be outputted from a content source.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
