# Your LLM Deception Monitor Is Broken. The Fix Is in the Training Data

**Speaker:** Sachin Kumar, LexisNexis
**Source:** https://www.youtube.com/watch?v=IQkVMvXQKLY
**Duration:** 13:58
**Recommendation:** Optional
**Hasan-fit themes:** rag and data

## Gist

Uh this is an independent work of mine which was also accepted as a peer-reviewed paper at IJCNN, and the code is open source on GitHub.

## Why Hasan Should Care

This session maps to rag and data. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (13:58).

## Practical Takeaways

- Now, as a warning that a model can pass every eval you have in every behavioral monitor you run, it still be carrying a backdoor that flips it into malicious on a trigger you never tested.
- Uh now, the good news is there's a clean signal that catches it, and it's sitting in something you already have, which is a difference between the base model and your fine-tuned one.
- Your evals are green, your production behavioral monitors are green, everything says ship, and yet on a one specific queue, say a date in the prompt, the model can turn and start writing exploitable code.
- That's what we call as a sleeper agent, uh which was also uh published uh in some papers from Heim et al.
- Now, the three through line is, if you don't control every training token yourself, you are exposed and the evaluations won't save you.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
