# Taming Rogue AI Agents with Observability-Driven Evaluation

**Speaker:** Jim Bennett, Galileo
**Source:** https://www.youtube.com/watch?v=xJXm4Wcw4m8
**Duration:** 16:15
**Recommendation:** Skim
**Hasan-fit themes:** evals and reliability

## Gist

[Music] So I'm here to talk about taming rogue AI agents but essentially want to talk about uh evaluation driven development observability driven but really why we need observability.

## Why Hasan Should Care

This session maps to evals and reliability. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:15).

## Practical Takeaways

- But if I've got a complex agentic workflow, I have an application and I the input comes in, it calls LLM, that LLM gets data, makes a decision, calls an agent, gets data, makes a decision, calls a tool, gets data, and so on and so on and so on.
- We can actually ask a non-determining system like an AI to evaluate an AI for us.
- When I call my app to get my account balance, there's an agent that orchestrates it that calls another agent that calls a tool.
- Um, something GLA offers is we have a custom trained LM that's small language model that's designed to be really really good at evaluations.
- You the the the best time to put evaluations in is as you're doing prompt engineering model selection.

## Implementation Ideas

- Turn claims into regression tests, eval rubrics, or monitoring dashboards.
