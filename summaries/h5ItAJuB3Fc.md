# Perceptual Evaluations: Evals for Aesthetics

**Speaker:** Diego Rodriguez, Krea.ai
**Source:** https://www.youtube.com/watch?v=h5ItAJuB3Fc
**Duration:** 16:28
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

uh in particular generative media, multimedia, multimodel and all the uh buzzwords but uh I come here mainly to tell a story about [Music] how we think about evaluations when we have to take into account human perception and human opinion and aesthetics uh into the mix.

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (16:28).

## Practical Takeaways

- is like I put an AI generated image of a hand obviously it looks horrible and then I ask 03 what do you think of this image then he thought for 17 seconds obviously tool calling does Python analysis opencv goes crazy and then after he charges me a few cents is like oh just a couple multar is like it's mostly natural but like and it's like okay we have like what many people claim is basically AGI and it is completely unable of answering a very simple question and and like that's it that's a surprising thing if you think about it because we as humans when people see that image is like we just react so naturally right against that it's like what is that like that that's not natural and and I feel like that's precisely what AI models are being trained on a on human data right uh uh second on human preference data uh and and third like in a way limited by the data that we humans ba based on our preconceived notions and perception and all of that.
- So that's what this talk is about about why what um what can we do better and honestly to ask ourselves some questions that I think are not being asked enough in the field.
- Well, if you I didn't put the image, but if you have any context around variational autoenccoders or neural networks or whatever, you you can squint and be like, oh, is that a neural network, right?
- Um and in the context of information and communication I want to talk about how compression is going to be uh related to how we think about evaluation right in I'm going to talk in for example on JPEG um JPEG exploits like human nature in the sense that we are very sensitive to brightness but not so much to color and this is a illusion that also talks about that where A and B is actually the same color but we are basically unable to perceive it until we do this and then suddenly it's like oh really um and it's kind of like what's going on there right um and so JPEG just does the same thing where okay we have RGB color space to represent images with computers uh we notice that there's a diagonal that represents the brightness of the images we can change into a different color space uh that separates color versus brightness and then we can down sample the channels around color because we are actually not even that done sensitive to it.
- Um and then it gets more tricky because for instance uh this is a just a screenshot I took from a paper I think it's called clean FID and FID scores for all of you who don't have context is one of the standard metrics used for uh how well for instance diffusion models are are reproducing an image but then you start adding JPEG artifacts and the score is like oh no no no this is horrible horrible image and it's like perceptually the four images are basically the same yet the FID score is like no no no this is really bad.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
