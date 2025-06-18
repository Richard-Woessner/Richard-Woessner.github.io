---
layout: post
title: Every Developer should selfhost
subtitle: Its Fun!
# thumbnail-img: /assets/img/thumb.png
# share-img: /assets/img/path.jpg
tags: [Self-Hosting, System-Admin]
author: Richard Woessner
---

## How I got Started
I've always been a fan of technology, I've always loved tinkering with everything I own to get it exactly how I want. This lead me to my career as a software developer, but if you're familiar with the Dunning-Kruger effect, the more I learn, the more I know that I know nothing. This is why I love to self host.

I guess you could say my first experience with self hosting would be when I created a Minecraft server from a laptop with a broken screen. I remember how much it frustrated me, I'm sure I made it terribly insecure, and once we started playing it ran so bad that we didn't touch it again. Who would have thought that a cheap laptop with 4GB of ram wouldn't run that well.

Fast forward 12 years and I discovered self hosting from a friend of mine. I started because I wanted to run a local LLM. This was a great decision because I gained so much.
- I corrected a lack of system knowledge
	- This might be a me issue but when I first started developing I didn't understand development environments that well
- I lost any fear of contributing to open source
	- First few years in my career I felt like I lacked something to open source projects that I use. This can be debated but I felt way more comfortable once I got a better understanding of software build and packaging process. 
- Resparked my interests
	- I just found a new subset of one of my favorite hobbies tinkering with tech.
	  
	  
## My favorite tools / what I learned

### Docker is the GOAT🐐
I used to hate docker for development, I couldn't find the logs for service I needed, File structure confused me, and I felt like I was adjusting my Dockerfile more than working on features. I've never been so happy to be wrong.
#### Portability
- Docker allows you to pass projects with multiple service requirements quickly. Linux, Windows, Mac it doesn't matter. 
- It allows you to develop on the same fake system as everyone else. Which is great for open source.

{: .box-warning}
 **Side Note** <br/>
 I actually had a few issues using docker on a Apple Silicon MacBook pro. I had to look it up but it seems to be multiple issues. Mac does not support containerization, Macs file system is different than Linux.<br/>
 I recommend Orbstack as a docker alternative it been running amazing for me 

#### Security
I run multiple web apps that I would normally be hesitant to put on my home server, The idea of code that I don't understand 100% running on my network would worry me, luckily Docker allows you to put applications in a box and only give it the permission it needs. Meaning it does not have free reigns to your system. My specialty is not cyber security so don't download any Docker app container because of me.
  
### Cloudflare + Cloudflared
Cloudflare has been great to work with once I learned a bit more. Cloudflare tunnels allows you to expose your server to the internet safely. You dont want to put your IP out there for anyone to see, malicious actors can attack your networks with DDOS, sniff for insecure ports, and overall just something you dont want out there. It also reduces the need for port forward and intense firewall configureation.


### PiVPN
Before I was comfortable to use Cloudflared I used a raspberry pi as a VPN using pivpn. This was incredibly easy to setup, had an interactive setup and really held my hand through the whole thing. I could move my vpn to my homeserver but I like that their seperate because if anything goes wrong its easier to tell if its my vpn or my server.


### Linux
Probably the greatest feat in collaborative software development, Linux is the go to for a server
- Free
- Is very stable if you download a Stable Distro, I use Fedora.
- Security
	- Linux offers many tools to make your server as secure as you need it to be.
- Flexibility, as I mentioned it can be as stable as you want. One can customize Linux to their needs.
	- Security
	- Number of Features
	- Performance
	- You don't even need a desktop if your comfortable with a CLI.
- Performance
	- Linux is extremely performant, making it a great OS for older hardware


## Conclusion
Over all I enjoy working on my home server and I get to apply what I learned in my job. I think every software developer should give it a shot, you don't need a state of the art system, you can just find an old laptop, desktop, or buy a SOC like a raspberry pi, depending on what you want it to run.

Here’s a reformatted version of your draft into a LinkedIn-style post that keeps your voice intact—clear, genuine, and slightly informal—but makes it easier for hiring managers and professionals to follow. I’ll also include specific suggestions for improvement at the end.