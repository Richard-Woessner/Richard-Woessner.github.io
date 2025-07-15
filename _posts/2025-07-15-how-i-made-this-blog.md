---
layout: post
title: How I made this blog
subtitle: Praise FOSS again
# cover-img: /assets/img/untitled.png
# share-img: /assets/img/path.jpg
tags: [Software, Meta, ]
author: Richard Woessner
comments: true
---

I've been thinking about my career more often, and I know that having a footprint in the industry is important, even if it's minor. So I've been wanting to post more on LinkedIn. I'll admit I'm not the biggest fan of LinkedIn. 
- Every post feels the same, either about how "You better love AI or else" or the famous, "Here's what sand volleyball taught me about B2B sales"
- Every post is written the same. I feel like a lot of people just either have AI write the post or just have it rewrite it but either or they all have the same tone.
	- *I do the same thing, but I try my best to keep it as similar as possible to my draft.*
- I believe that a lot of posts are rage bait, although some of them are hilarious in a satire way, I'm not sure how that could be helpful with potential future employers.

I have gotten to like writing more than I thought though. I get to research a topic that I wouldn't have otherwise, so I learn a lot of interesting stuff.

This is why I created a blog so I can post my writings as my words and not have to worry about how "Linkedin" it is, but it still leaves a footprint. Next, I wanted to break down....

## How I made it
Although it would be cooler to build my own blog from scratch, I didn't think that would be necessary. I wanted to find something that can turn my Markdown notes into a static page, so I searched on GitHub for some methods when I found an amazing project 

### Beautiful Jekyll
[Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll). This project is great, it's easy to configure, looks great, and has a ton of great features. A great design - especially on mobile, RSS feed, Post tags, post search, and a ton of customizations. 
 
Fork this repo, adjust the config and publish it with GitHub Pages. I'm not going to cover this in depth because they have pretty good instructions in the README

>*I actually did this a while back, mostly just because I was curious, but it came in handy when I wanted it.*


Jekyll is a static site generator (SSG) built in Ruby, that converts simple txt files, including MarkDown, into a complete, static website (HTML, CSS, JS) without needing a database or server-side processing.

I already use obsidian, meaning that I can turn my notes into a static site. Its perfect for what I'm trying to do. How do I take me writings and put them somewhere where people can read it...


### We're doing this live
Now I wanted to add this to my domain woessner.us. I love Cloudflare, they're fast, reliable, use lava lamps to seed their SSL's, and they have a lot of features, which made this harder than I thought. I used Cloudflare pages before but this time they suggested I use the new Cloudflare workers and these are the differences

#### Pages vs Workers
##### Pages
Cloudflare's platform for static sites, it's integrated with GitHub. It doesn't have any builders, or logic to it so it essentially just grabs the static site, puts it on their server and creates a DNS entry with your domain.

##### Workers
Cloudflare's serverless platform that allows you to run programs on their servers, including APIs, handling HTTP(S) requests, authentication, etc. 

For my use case Pages would have been easier to use, but they asked me to try out workers and that pages will be deprecated one day so why not give it a try.


#### Problems
I ran into some issues
- The current ruby version has an issue with Jekyll, but while researching for this post, I found something that might help that.
- Cloudflare workers take 5+ minutes to build compared to GitHub Pages, I'm sure that has to deal with my configs

Both of these are minor so Ill fix them in the future.



### How will people tell me how great my writing is?
I saw in the config file that Beautiful Jekyll allows comment plugins like Disqus, Facebook Comments, Staticman, Utterances, and Giscus. If anyone is ever going to use these comments it needs to be easy, I think by nature, users take the path of least resistance. Which is why None of these really fit my needs.

- Disqus, Utterances, Giscus all require a login
- Staticman has integration with GitHub pull requests
- ~~Facebook~~ lol
- Very similar to Utterances but uses **GitHub Discussions** instead of Issues meaning that the user will have to login via github.

Since nothing fit my needs, I found an open-source alternative called Commento.

#### Enter Commento
**Commento** is an open-source, privacy-focused commenting system designed as a lightweight alternative to Disqus and it allows self hosting. Meaning this checked every box so I moved ahead.

1. I copied the `docker-compose.yml` and made minor adjustments like ports and storage.
2. Tunneled that port through some security proxies
3. Tunneled the security proxy port to Cloudflare via [CloudFlared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/).
	- This is necessary because in order to post it needs to be posted to my servers Commento API, meaning its much safer to have it tunneled through Cloudflare.
4. Add the Embedded HTML that Commento provides you into my Beautiful Jekyll repo, more on this later. 

Here I ran into an issue
```
services:
  server:
    image: registry.gitlab.com/commento/commento 
    ports:
      - 8080:8080
    environment:
      COMMENTO_ORIGIN: http://commento.example.com:8080 # <-- Right here
      COMMENTO_PORT: 8080
      COMMENTO_POSTGRES: postgres://postgres:postgres@db:5432/commento?sslmode=disable
    depends_on:
      - db
    networks:
```


This confused me because I didn't know what that line was for, I figured it redirected you or pointed you to the application but since the port was being tunneled I figured I would put `http://localhost:8080` and whatever was sent to that port would be sent through the tunnel.


> So after digging in, I learned that this line is for CORS validation—basically it tells Commento which origins (domain + scheme + port) are allowed to communicate with it. Makes sense, right? Without it, your browser wouldn’t let your site and the comment server talk to each other


The tunnel wasn't working but it wasn't giving me an error, just giving me nothing.

I load up dev tools to show that when attempting to load my site it would redirect to localhost:8080 so changing that to my actual domain fixed it.


##### Issues
This is when I hit another issue, Commento does allow anonymous comments, but they don't allow aliases. This lead me to.


#### Slightly Better Commento or Commento++
[Commentoplusplus](https://github.com/souramoo/commentoplusplus) is a fork of Commento where someone added the exact feature I was talking about. The steps I took to change Commento to Commento++ was.

1. Adding a DockerFile and having it build Commento++

That's it, everything else is the same so I didn't even have to rebuild the database service. The excitement I got when this worked first try was unmatched.


### But beautiful Jekyll doesn't have an option for Commento
I love this repo, its designed to be extremely easy to work with, I had to change 12 lines to add Commento. This was simple because I just coppied the logic of the other comment plugins

**Added a Commento property to the config**
```
# To use Commento, provide the URL of your Commento instance
# Sign up at https://commento.io/ or self-host at https://gitlab.com/commento/commento
commento: "https://commento.woessner.us" # URL of your Commento
```

**Added a component to render the embedding if config.commento is filled**
```
# Embedding provided by commento web app %
if site.commento

<script defer src="{% raw %}{{ site.commento }}{% endraw %}/js/commento.js"></script>
<div id="commento"></div>

end
```

**Added that component to the root of comment components**
```
{% raw %}
  {% include utterances-comment.html %}
  {% include giscus-comment.html %}
  {% include commentbox.html %}
  {% include commento.html %}
{% endif %}
{% endraw %}
```

That's it!


## Results
The result is a public blog, that is fast, mobile friendly, which allows comments and a RSS feed. This was fun to do so I can post whenever I feel like it.
