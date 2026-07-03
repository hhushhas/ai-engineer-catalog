# Google Photos Magic Editor: GenAI Under the Hood of a Billion-User App

**Speaker:** Kelvin Ma, Google Photos
**Source:** https://www.youtube.com/watch?v=C13jiFWNuo8
**Duration:** 20:28
**Recommendation:** Optional
**Hasan-fit themes:** general ai engineering

## Gist

When we first launched, the product really was built with machine learning in mind, right?

## Why Hasan Should Care

This session maps to general ai engineering. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (20:28).

## Practical Takeaways

- you know how to use Photoshop with machine learning and compute we can just do it with one image so capture it anywhere you want bring it to Google photos we run machine learning we generate this photo we kind of re bring in all the brightness and variance in the image and the reason we're doing this at Google with the photos team is we are able to vertically integrate we control the hardware from pixel right we're able to use stuff like edgetpu to really do accelerated compute but we also have internal research um this is 2018 Back then I think hugging face was founded but it was not a place where you can just go on hugging face find a model that suits your need and then go off and build application with it like you can do that now which is really great but you couldn't then able to work with our researchers in Google that are experts in computer vision and machine learning to build the feature from the ground up right um like hey can you iterate on the model we'll iterate on the application let's keep go back and forth until we hit something really good that's easy to use I'll really briefly talk about our tech stack we have three main clients, Android, iOS, web.
- My team also owns this share C++ library that does all the model inference and it's all on device.
- And this is where the strength of ML really comes in like you can do this with computer vision without using machine learning, right?
- Uh also I'm sure everyone here who's worked with a IML has to deal with evals like how do you know this model does what you want?
- um you have to make sure the benchmark actually reflects your you real world usage because if they separate then the benchmark is useless right I think of it as for traditional code you have unit tests and that's how you make sure you don't have regressions the benchmark is the equivalent of unit testing for your model and you need to maintain it and it takes time and then the pro is also a con the model always returns a result like people deal with this LM so it's like hey tell me when you're not sure so I can do something else and the LM will be like what do you mean I'm always sure right Even in this case, it'll always return you something.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
