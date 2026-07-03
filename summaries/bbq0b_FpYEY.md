# Rust is the language of the AGI

**Speaker:** Michael Yuan
**Source:** https://www.youtube.com/watch?v=bbq0b_FpYEY
**Duration:** 29:14
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

So the topic of my talk is Rust is a language of AGI, artificial general intelligence.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (29:14).

## Practical Takeaways

- So I I I think there's a very enlightening talk um you know by in the latent space podcast by Brett Brett Taylor you know who's uh you know um the chairman of open AI and you know very famous guy and uh so he basically said the human would prefer Python over Rust um because you you know it's easier but Rust is better suited for machines not only because it's more efficient but because it's all more structurally orient Ed for the strong compiler checking the strong type system and all that it's just more rigorous and uh because the compiler provide a very tight feedback loop you know one of the experiences that a lot of Rust developer have is that there's little debugging out once the project compiles you know once your Rust project compiles there's a high likelihood it's going to run correctly you know and it's a it would run as you intended you know that's um so the same can't be said by mean many other languages especially languages without compilers but though because of this because this property the the compiler of the rust language provide a very good feedback loop for the AI so it forces AI to gen it creates what we call a very good reward function right you know so if you think about reinforcement learning which is where popularized by say I mean the large language model space it's popularized by deepseek you know in a in a general space popularized by say alpha go alpha zero right you provide uh you um for any for any question or any request you have a correct answer in the world of rust is what's the compiler accepts right it provide a very strong feedback to the uh to the large language model so it can get really good at those things so that's why we say uh a programming like a programming language like rust maybe it's difficult for humans but it's a per really a perfect fit for AI code generators.
- So compile and effect is a MCP tool that allows you to take um files um Rust project files um in the context and then ask the large language model to send that to send those files to the MCP server so that the MCP server compiles it using its own Rust compiler to compile it.
- So cursor sees my request and sees the files in the context and it knows the best way to do that is to call the MCP tool that I've just that's connected called compile and fix.
- So we have coding large language models that you can use commercial you can configure to use commercial ones or use open source ones.
- So now we have seen you know h um how do we use the g and the rust coder project to help humans right to help them getting started with rust programming w program and uh debug your rust program but I think even more even larger potential that's um you know that's would happen in the near future is MCP is not really for humans although we are using it for humans at this moment it's really for machines So we take a little step back through the memory lane you know who are the real user of computers right you know so that's in early days or maybe 15 years ago it was mostly humans that's why we have the web UI we have desktop we have mobile UI and all that it's all geared towards humans the human with their eyes with their fingers you know we can the multi touch is you know it's is the UI is designed for human fingers right you know so the humans are human computer interface and then the API error comes you know the API first approach meaning develop your applications as API first not as the you human interface first meaning at that time the consumer would be a computer you know some other computer or some other workflow engine would consume your services you know as a API there's um many big u many very successful company grow out of that era so for instance stripe right it's a payment solution it's pretty much only API you know that's uh um you know it's integrated into another application that actually has a UI right and uh uh TibLau is another one right you know sending uh you accessing the the the telecom infrastructure the the list go on there are many many applications like that but since um large language model come out I think two use become one of the ways that um your software and your application can be consumed by its user now the user is no longer a computer that is uh deterministic but fairly dumb.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
