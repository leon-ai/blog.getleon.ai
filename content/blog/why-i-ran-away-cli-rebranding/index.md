---
title: I Ran Away From Open Source
date: 2021-12-12
author: Louis Grenard
description: Let me explain my missing, share you my vision for Leon, what's going on in my head and announce the CLI release with the rebranding.
---

👋 Hey all, I mentioned in the previous blog posts that I'd share with you the reasons of my missing over the last few years, the vision I have for Leon, your open-source personal assistant and more about what is going through my mind, so now is the time. Besides that, there are great news to announce. Let's get started!

### I Lost Focus

It was in June 2019 that I released the second beta version of Leon. On that moment I was in a dynamic mindset that I wanted to build anything that I had in mind, it was not exclusive to Leon. I was going to bed, keep thinking about solutions to solve problems I was facing in life.

I discovered the IoT world via my work on that time, it was fascinating. I love the whole concept of it. Building scalable architecture behind and most of all: pressing virtual or physical buttons to trigger actions that create physical impact on the other side of the globe.

Back in time, I created our own IoT pipeline using Microsoft Azure. I built the <abbr title="Public Key Infrastructure">PKI</abbr> to deliver and verify devices certificates. It was possible to control devices (send message, invoke methods, etc.) from a web browser to the device. And it was also possible for devices to request the cloud and handle millions of connections thanks to the IoT hub and device provisioning service. All the data were handled via a stream analytics processor and landed into a data lake like CosmosDB and can also replicate important data to a PostgreSQL one if necessary. The main protocol between our cloud and devices was AMQP, but MQTT was also supported.

At that time, I wanted to build anything that was going through my mind, everyday. Well, we can say that **I lost my focus**. In such interesting and noisy world where there are infinite of possibilities, staying focus is maybe one of the hardest thing to do.

### My Missing

On the top of that, I was questionning my career. I wanted to explore new horizons.

Also, having a girlfriend with an entrepreneurship mindset does not help, I wanted to show her real results. We all know how challenging it is to express what we are doing or share what we are able to do with someone that isn't in the tech industry.

So I got trapped in the **ego building** circle...

Here is a list of the major things I did during my missing and the benefits I got for each of them:

#### 2aud.io

I built a <abbr title="Software as a Service">SaaS</abbr> that converts URLs (web scraping), documents and text files into audio.

It was supporting multiple types of voice and 30 languages. I launched the private alpha version, collected feedback, got about 230+ emails on the waiting list. Then I stopped for whatever reason.

What's cool here is I may inject the core of 2aud.io into a Leon module. So Leon could read any resource for us like a podcast.



<video controls="true" preload="auto" allowfullscreen="true"><source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4"></video>

te

**Benefits**: strengthen my A to Z building skill.

#### YouTube Videos + Community

I was publishing web development videos on my [French YouTube channel](https://www.youtube.com/c/LouistitiFr), started a Node.js course by going in depth but with a language that everyone could understand, etc.

Around that I put together a community with a Discord server. Today there are still 670+ applications lining up...

In that community people started to build projects together to learn more about web development. I'd say 33% of the people where changing their career path to software engineering. It was composed of people with good experience and newcomers in the tech industry. This variety of profiles created interesting discussions.

People were sharing their progress about their projects during monthly calls we were organizing. We were warmly welcoming new fellows with proper calls too.

And we were working on our own projects during immersive call sessions. The idea was to work during an hour in a row by muting microphones. Then we enabled back the mic to share our last hour progress and help each other if necessary for a few minutes. Then we kept going.

Stay tuned because **I'd love to recreate the same model of community but around Leon!** If you are interested in that then feel free to [subscribe to the newsletter](https://www.getrevue.co/profile/leon).

**Benefits**:

- Learned how to build a private and active community from the green grass.
- Learned video making and video animation.

#### Computer Vision

In December 2020, I challenged myself to learn a bit about computer vision within two days. To get started with this field that was new to me I trained a deep learning model that was recognizing rubik's cubes.

IMAGES...

Then I created a <abbr title="Proof of Concept">PoC</abbr> that was recognizing shapes on a whiteboard in the purpose of generating a <abbr title="User Interface Description Language">UIDL</abbr> to automatically create web components.

IMAGE

Well, waaay more data were needed and my time was very limited so the model wasn't super accurate.

**Benefits**:

- Improved my learning skill.
- Today Leon has ears and mouth, why not add eyes later on? :)

Every benefit listed above will definitely help in my Leon journey.

In 2020 I also ran a French web agency with a friend besides my job and mainly worked on a streaming platform with a customer who is managing French celebrities. Then I started to create a mobile application with React Native to help a relative. Here too, my React Native experience will help Leon to grow, I let you think about the possibilities... Hence, by coming back on Leon, I migrated nodes (docs from VuePress to Docusaurus; the website from Nuxt.js to Next.js and this blog from Hexo to Gatsby) to the React ecosystem.

The reason I stopped and did not persue the journey of the projects above is because I knew I just wanted to work on Leon and make sure that I'm not missing something that I would like even more. 

learned many things on the way.

Lots of questionning in my career. Wanted to try other fields: 2aud.io, agency with friend, computer vision, French developers community with learning courses about Node.js, etc. I always had these things in mind I wanted to build, I wanted to try them out first by knowing that my ultimate goal is to come back on Leon.


Biggest fear: be on my death bed, did not really accomplish what I wanted. But deeply inside me, I always knew that Leon was my life project. I still try to figure out why I paused it... Was I afraid? Is it related to the imposter syndrome?

What I did, what I have learned

Explain my missing. 

What I learned from this

> Hype does not length forever, need to be reactive and proactive. Need to listen to my deep me.

The Truth.

I met a girl, wanted to show what I was capable of, ego building, so 2aud.io, etc.

What I have learned along the way: how it can be useful for Leon (React, computer vision, building a community (+700 applications), producing video content, etc.). How I did this, etc. Ah and stick around because I'd like to reproduce the same model of community for Leon ;)

Explain how the community will be important

Joined Ali on the Lazada business, so exciting! Don't worry, this does not mean I will have less time to work on Leon. Back in time, I released the first beta of Leon by working after work and on weekends back in time.

### I Found Back my Whys

I see it like this: there is a practical WHY, and a deep WHY. Practical = the project itself, what problem it is solving, etc. Deep = my source of energy to solve the practical. The deep WHY is the fuel of my practical WHY. Explain my deep WHY and my practical WHY.

As mentioned in the previous blog post, I needed to refocus on the WHY of Leon before to focus on the technical part. So here is the WHY [...] I believe that we cannot just find "motivation" without a why. The why is the fuel that pushes me to move forward. 

Explain why going full React...

### Vision for Leon

Add handwritten paper from Trello card.

Share the next milestones and the vision of Leon + the ideal future for the project + why these milestones + I opened a GitHub sponsor

FOCUS 
1. Foundations/core
2. Need to cover most use case that existing assistant covers
3. Growing community
4. Make it smarter and new iterations from private roadmap

## Rebranding

Along with the vision... Rebranding... 

Visual identity: explain atmosphere and why. Sketch to design: sketch, then black and white then colors/shadows/details then web with animations

https://trello.com/c/Y5GH6162/322-%F0%9F%93%9D-100-beta5-think-of-visual-identity-design

Reasons behind this rebranding:

- 2 years pause, need something fresh
- Never really explained the vision of the project
- Want the vision be inside the visual identity

How I built the new landing page (tooling, SWC from Next.js, etc. optimize animations, etc.)

Vercel sponsoring

## CLI

Why did we build a CLI? Most of the issues we receive are about requirements. So it seems there were a need to cover here.

Introduce new main contributors. As working full-time again at... Then we can get on a higher speed here with more people

CLI release, please share your feedback

Features in the CLI

Flowchart

Let's get started now: show commands to install
