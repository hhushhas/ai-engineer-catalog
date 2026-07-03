# Fine tune 20 Llama Models in 5 Minutes: Santosh Radha

**Source:** https://www.youtube.com/watch?v=zHYQZFy0UVk
**Duration:** 6:26
**Recommendation:** Optional
**Hasan-fit themes:** open source models

## Gist

[Music] so the talk is actually going to be about um uh how you run things extremely easy directly from Python and the example that I'm going to show you here is obviously I just have five minutes and on my end but I'm going to try my best to Showcase how you can fine tune pretty much 20 is an arbitrary number here but hundreds of models that you can do right from python without needing anything like kubernetes joer or anything on your side and uh so before that you can find the talk and the actual code for what I'm going to do in this QR code and you'll find lot more interesting examples over there to try out on run as well um okay so what do we do um so calent is an open source slop core uh product on its end and what we do is we help people write python locally and ship the code to any kind of compute backend that you need to send it to so what that means is hey you have a python function that you want to run on a GPU um in your local laptop open up a jupyter notebook add a single decorator on top to say hey I want to run this on h00 with 36 gigs of memory for 2 days maximum time limit and press shift enter in your Jupiter notebook and that's it the code gets shipped to a back end in a GPU and you get back the result on your side in in the open source case it sends it to your own compute you can attach your own compute class cluster and it runs over there in the cloud case it runs in our GPU cluster and you just pay for the GPU time that it runs in so it runs for 5 minutes you pay for 5 minutes of h00 it runs for 10 seconds you pay for 10 seconds of hunds on your side and you can also bring your own Compu and attached to us and we'll help you orchestrate the entire Compu that you're handling on your side be it your own cloud or on-prem systems or whatever it is on your end then okay so covalent basically has a bunch of perimeters that you define in you can submit in jobs which are called single functions so essentially all you need to do is as I said add a single decorator on top and say what is the computer that you need to ship it to it goes there it runs and you get back the python object back and you just pay for the function that you are running in we also let you run inferences and again it's completely pythonic you don't dockerize you don't run kubernetes cluster you don't do anything you just say hey I have an initializer function and I have a I need an endpoint called SL generate and you define your python functions you click a single cc.

## Why Hasan Should Care

This session maps to open source models. For Hasan's work, the useful lens is whether it changes how to build, evaluate, ship, or operate AI-enabled products and agent workflows (6:26).

## Practical Takeaways

- Review the video directly; automatic captions were limited or unavailable.

## Implementation Ideas

- Use this as background signal unless the title/speaker is directly relevant to an active project.
