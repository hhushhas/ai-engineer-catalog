# Building Agentic Applications w/ Heroku Managed Inference and Agents

**Speaker:** Julián Duque & Anush Dsouza
**Source:** https://www.youtube.com/watch?v=vRFqbEzzDsI
**Duration:** 52:35
**Recommendation:** Skim
**Hasan-fit themes:** agent systems, infra and deployment

## Gist

We have expanded that further by deeply entrenching these models in an agentic control loop that runs on Heroku that has access to tools like code execution, access to your data all under the trust layer of Heroku.

## Why Hasan Should Care

This session maps to agent systems, infra and deployment. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (52:35).

## Practical Takeaways

- You can bring your own tools as well using MCP that can run on our compute and stream things back to agents.
- MCPS that you can deploy to Heroku and then attach them to your H inference agent endpoint.
- How can you deploy an MCP to Heroku, attach that MCP to the agents endpoint and also use those MCPS externally remotely through the MCP gateway or MCP toolkits that we have.
- So the input parameter has like a a packages array parameter where the lm automatically say okay my python script is going to use pandas or numpy let's install it before I attempt to execute the tool and all of these are just MCPS that we natively support but you can also extend this agent endpoint by deploying your own your own MCPS so now let's take a The agent's endpoint is different to the chat completions.
- If you want to give right access to your production database to an agent, I will invite you to deploy an MCP that does that like the posgrsql MCP give the access under your own risk.

## Implementation Ideas

- Capture deployment, cost, latency, and scaling tradeoffs for future architecture choices.
