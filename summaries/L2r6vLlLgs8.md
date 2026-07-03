# Fighting AI with AI

**Speaker:** Lawrence Jones, Incident
**Source:** https://www.youtube.com/watch?v=L2r6vLlLgs8
**Duration:** 17:29
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

Um in this talk, I'm going to talk about how you can use AI to help you manage and curate your eval datasets and making it easier for you to work with them, uh making it easier for coding agents to actually work with your eval tool.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (17:29).

## Practical Takeaways

- Um and what we found was as these YAML files for the evals were growing really really large, uh our coding agents weren't able to work with them.
- Um so, what we ended up doing was we ended up creating a small CLI tool that we call eval tool um that was designed to allow agents to leverage our eval suite files.
- Um and it was by doing this that we allowed agents to work effectively with our eval tooling, and that's why we were able to create this runbook to the right, which is actually a runbook that's designed for um a coding agent to use.
- Um but the cool thing about this is that now that agents can work with the evals, you can end up in a situation where you just ask your coding agent to go, "Hey, I've got a problem here.
- " And the coding agent's going to turn up, and it will create an eval case where it proves that the thing is failed and then it will go modify the prompt so that the eval now passes and then it will go through this run book and one of the most important stages for us is checking at the end that the change that you've made to the prompt hasn't ended up breaking any of the other evals that you had in your test suite and we also have like a final pass that tries consolidating the prompt as well cuz if you end up doing this repeatedly you end up with a prompt that is massive and really really difficult to maintain so you kind of want every time you make an adjustment to try and simplify as well.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
