---
layout: post
title: Procedural Generation Simplified
subtitle: Today we can create worlds
cover-img: /assets/img/Terrain.jpg
# share-img: /assets/img/path.jpg
tags: [Software, Gaming]
author: Richard Woessner
---

Have you ever wondered how games like Minecraft creates its maps? How can they create random realistic terrain, since we all know that computers cannot be truly random?


## Noise
I'm not talking about sound, Computer Generated noise. Perlin Noise is a function that creates a 2d gradient map that looks natural. I will add a picture below so you can visualize what I'm talking about. 

I'm not going to go too in depth because this is where I admit I'm not an expert (I’m no math major 😅), and this is a lot of math. Also for visuals I made a quick diagram in MS Paint so look at that for a visual.

It starts by taking a grid, where points ([*0*,*0*], [*10*,*0*], [*0*,*10*], [*10*,*10*]) are assigned a Random arrow pointing in any direction. Then for the other points that do not have an arrow,  It then uses Calculus to get the Dot Product which is a way of multiplying two vectors ( Arrows ) to get a **single number**. That Dot Product is what will define the color of that point, creating a realistic blended terrain, meaning it looks natural, like hills, valleys, and plains. 

Also these grids are normally much larger and have more Vectors (Arrows), this example would lead to a pretty boring map but its much easier to picture.

What you get is a gradient grid which looks pretty neat.


## Seeds
Want to play the _same_ world as your friend? Why wouldn't you he spawned right next to a village. This is where Seeds come in. Those Arrow directions are in a premade set, so say we have 4 arrows (20°, 18°, 200°, 250°). The program uses code to randomize which point gets which arrow, but if we enter the seed 1234, the program will always assign those points the same arrows, making the gradient grid always the same, and letting you play in the same world as your buddy.

Like I said this is a simple example but with more Arrows, Points, the possible grids are exponential. Practically endless Minecraft is said to have 18,446,744,073,709,551,616 (18 quintillion) possible worlds.


## Ken Perlin
I found the invention of Perlin Noise interesting enough to mention here. The man, myth and legend, Ken Perlin created Perlin noise in 1983. He was working for a animation company called Mathematical Applications Group (MAGI). He was annoyed how robotic CGI looked so he developed Perlin Noise. He sent his function in a scientific paper for everyone and didn't even patent his algorithm. Kinda cool to see the mix of science and art, while giving his gift to the world. 


This is a topic that I'm not an expert about, so if I got anything wrong let me know.

![Noise](/assets/img/Noise.png)