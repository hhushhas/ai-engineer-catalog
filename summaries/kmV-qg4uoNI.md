# Building durable Agents with Workflow DevKit & AI SDK

**Speaker:** Peter Wielander, Vercel
**Source:** https://www.youtube.com/watch?v=kmV-qg4uoNI
**Duration:** 1:09:49
**Recommendation:** Skim
**Hasan-fit themes:** agent systems

## Gist

Uh, I don't know about you, but um, my ride agents, I like focusing on the capabilities and the features, and I like not thinking about um, all of the extra effort that goes into getting something that works locally into production.

## Why Hasan Should Care

This session maps to agent systems. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (1:09:49).

## Practical Takeaways

- Um and today uh we are going to um turn a agent uh coding agent um into a workflow supported coding agent throughout this session.
- So uh the reason this is happening is that we are streaming um the agent output to the client but our tools aren't actually doing any stream calls right now.
- >> So just from my understanding if you have an agent running uh with a workflow it keeps running.
- So if you have two sessions um so let's say we we have a coding session right and it already built an app and then it's sleeping for a week right um and then we reconnect to the stream is that the >> no the thing is uh let's say I kick off a work uh workflow and it's calculating like the numbers of pi just keeps on right but I connect to the same sandbox and then I call sleep will it stop calculating pi >> um so the way you would do this in a workflow is again let's let's see how we would code this >> you have a sandbox there sleep in the sandbox >> well you can connect to this sandbox you connect again to the sandbox and some thread call sleep does the whole sandbox go >> so the the sandbox is uh it's basel sandbox which is a sort of just imagine it as an EC2 instance um so this is just a a helper for us to spin up an instance to run this coding agent like run the code in order to store the files Um if you met this differently you wouldn't have to use sandbox um and the sleep call doesn't happen as a as a bash call for example then two different >> right >> like an orchestration thing and then when you're actually in this box you you call sleep in a sandbox you're >> okay so there are two different >> right so so there is sleep that you could call from a terminal um in the sandbox as a as a as a terminal command or there sleep from the workflow which suspends the workflow Uh yeah so we have we have these features for for web hooks right and we can see that after I clicked on the URL it resumed and then coded me a Pokédex um that is all of the features we're going to in the session and I think we have ample time for Q&A about 20 minutes at least please go for >> how would I spin up claude code session with this >> a cloud co session remotely or are you >> no kind of run and kick it off as an agent doing certain stuff um is that possible and then kind of orchestrate that as agents >> that is possible so cloud code uh is um [clears throat] if you're talking about the app like a tonal app right cloud code then that doesn't use a lot of the workflow features internally um so it's hard to isolate that or know where the oxidation There is you could write your own version of uh cloud code or take the plot code source code and add workflow and step um for the calls and that would then run as as a workflow in the cloud.
- There's no way to say like okay I have my steps you know spin up claw work uh kind of code type this command and wait for anything that would be a versel workflow but how would I actually boot drop it like code it >> is one command told right so you know what you're asking >> if you so if you're calling cloud code uh in a um so made as a confusion of like where this is running right for a coding agent here if the coding agent runs make the right for like creating creating a folder that make the command runs in a step but it runs against a like in a sandbox there sandbox being a VM and so this VM state is not managed by the workflow itself um so if you call cloud code on the VM that's essentially treated like an SSH session but if you run any any agents or steps within the workflow right those steps are going to be resumable um and observable through the workflow pattern Um, another question, how do I control um what my agent has access to from going out to the internet doing stuff?

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
