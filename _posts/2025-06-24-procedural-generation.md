---
layout: post
title: Procedural Generation Simplified
subtitle: Today we can create worlds
# thumbnail-img: /assets/img/thumb.png
# share-img: /assets/img/path.jpg
tags: [Software, Gaming]
author: Richard Woessner
---

Have you ever wondered how games like Minecraft creates its maps? How can they create random realistic terrain, since we all know that computers cannot be truly random?


## Noise
Not that noise, Computer Generated noise. Perlin Noise is a function that creates a 2d gradient map that looks natural. I will add a picture below so you can visualize what I'm talking about. 

I'm not going to go too in depth because this is where I admit I'm not an expert. I'm not a math major, and this is a lot of math.

It starts by taking a grid, where points ([0,0], [10,0], [0,10], [10,10]) are assigned it a Random arrow pointing in any direction. Then for the other points that are not ([0,0], [10,0], [0,10], [10,10]), it  It then uses Calculus to get the Dot Product which is a way of multiplying two vectors to get a **single number**. 

That's enough math, but what you get is a gradient grid which looks natural.

## Seeds
Now we have a problem. The world looks great and as close to random that it needs to be but what happens if someone wants to try the same world as a friend. This is where Seeds come in. Those Arrow values are no longer random we can say [0,0] is set to (**R** x 5). So if you feed it the same seed **4** and the arrow will always point at (**4** x 5) = 20 degrees.


## Ken Perlin
I found the invention of Perlin Noise interesting enough to mention here. The man, myth and legend, Ken Perlin created Perlin noise in 1983. He was working for a animation company called Mathematical Applications Group (MAGI). He was annoyed how robotic CGI looked so he developed Perlin Noise. He sent his function in a scientific paper for everyone and didn't even patent his algorithm. Kinda cool to see the mix of science and art, while giving his gift to the world.

![Noise](/assets/img/Noise.png)