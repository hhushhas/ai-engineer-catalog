# The Web Browser Is All You Need

**Speaker:** Paul Klein IV, Browserbase
**Source:** https://www.youtube.com/watch?v=YRGjll7uu5w
**Duration:** 17:31
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

But I do know quite a bit about, you know, how customers are using browsers as part of their AI agent applications.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (17:31).

## Practical Takeaways

- Take a model and then have it generate some code to control a browser by generally parsing the DOM on the page, the HTML and the CSS.
- now Salesforce H company everyone was kind of doing a lot of this stuff last year and we really got to see a lot of web agents in production uh but they were still early days you know and web voyager was first you know it was taking screenshots of a page it was using chain of thought prompting and then from that it was saying click the button at this coordinate uh sometimes they were doing these things we'll talk about a second called um labeling on top of the page but I think it's pretty cool because we haven't changed that much from this there's really are two different types of web agents there's vision driven agents these are ones that predominately screenshots as context for the model.
- Um, or there's textbased web agents who predominately use HTML as a context of the model.
- You can see these little boxes here where you're marking up what you should click and the agent will or the model will turn and say click the box labeled 25.
- So we have vision based agents and DOM based agents and there's now also computer models which are kind of like the next step here where well let's train a whole model on this stuff.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
