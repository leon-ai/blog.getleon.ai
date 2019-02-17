title: "The Story Behind Leon"
tags: []
categories: []
author: Louis Grenard
date: 2019-02-17 21:00:00
---
**Big disclosure**: I never watched the movie *Léon: The Professional* (at least not yet).

## Who Am I

👋 Hey all, my name is [Louis Grenard](https://twitter.com/louistiti_fr), I was born in the 90's in the French mountains. I'm currently living in Shenzhen, China and working at a great company called [NOA Labs](https://www.noa-labs.com).

I love building things since my early years, turning my GAN356 Air SM and I truly believe in [open-source](https://github.com/louistiti).

## Who is Leon

Let me explain you in few words.

Leon is an open-source personal assistant who can live on your server. He does stuff when you ask for it.

You can talk to him and he can talk to you. You can also text him and he can also text you. If you want to, Leon can communicate with you by being offline to protect your privacy.

## Why The Hell "Leon"

*Leon* is pretty simple to remember as a name and it is easier to pronounce whatever the language (*Leon* in English, *Léon* in French, *Lái áng* in Chinese, *León* in Spanish, etc.). Moreover, *Leon* is created from *Leo* which means *lion* and that is my astrological sign.

## Timeline

**End of 2016** *—* Let's get back to the end of 2016. Mark Zuckerberg, the Facebook CEO published [a note](https://www.facebook.com/notes/mark-zuckerberg/building-jarvis/10154361492931634/) and [a video](https://www.facebook.com/zuck/videos/10103351034741311/) about his 2016 personal challenge. I was very exciting about the idea of interacting with a tech system by voice. Of course virtual assistants such as Siri already exist on that time, but the fact of reading about and seeing the Zuck's assistant gave me the desire to know more about it.

Few days later I was on a train on my way back to my dear hometown in France. I quickly grabbed my laptop, and started coding a proof of concept in an HTML file. My very first motivation was to understand how the speech-to-text and text-to-speech were working in web development, so I naturally implemented the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) and few hours later I got my PoC done.

**Early 2017** *—* A few months later I was on my way to attend a family event in Munich, Germany and I was thinking about doing more than a simple web speech PoC. Something that could help in my daily life. I remember the first feature idea was a *financial tracker*, I was thinking it could be so cool to say:

```
Leon, how much money did I spend in restaurants in 2016
```

And have something that reply me by voice and text with few details. So I caught my phone and started to write some feature ideas.

**Mid-2017** *—* At the end of June 2017 I moved to China and began my full-time job here. Watch was clocking and it's only in October that I decided to make a plan to properly work on Leon besides my work. I committed on a private repository the 4th of November 2017.

![First Leon commit](/images/20190217/first_commit.png)

Few weeks later I was thinking if Leon helps me, then it might also help others. So I decided to create a modulable architecture and with a module that download videos from YouTube to save them on the device. I wanted that module because on that moment I was living 1 hour from my work and I needed to take subways, so I could watch/listen tech videos and podcasts during that time.

**Early 2018** *—* It is the 7th of January 2018 I created the [Leon's roadmap](https://roadmap.getleon.ai) by setting up some cards such as [this one](https://trello.com/c/wt8W83AV/85-%F0%9F%93%9D-open-source) and started to document myself about open-source ecosystems *(I highly recommend you [Open Source Guides](https://opensource.guide/))*. On that time, here is how Leon looked like:

![Leon's beginning](/images/20190217/beginning.gif)

**March 2018** *—* Then personal problems came out, and I did not work on Leon for two months. It's only in March 2018 that I wanted to test if Leon is interesting not only for me, but also for others. So I made some researches about Reddit, how it exactly works, the rules, etc. And I end up by creating a teasing video and publish it to several subreddits, such as [/r/Python](https://www.reddit.com/r/Python/comments/85axig/im_building_l%C3%A9on_an_opensource_personal_assistant/), [/r/javascript](https://www.reddit.com/r/javascript/comments/85aso8/teasing_im_building_l%C3%A9on_an_opensource_personal/), etc. I received tons of feedback, and got an issue because I published the video on Google Drive, and the video reached the maximum views allowed in a short period, so I needed to quickly publish the [video on YouTube](https://www.youtube.com/watch?v=1B7JMBPZ0qI). On that moment, Leon was still using the Web Speech API, so I refactored by implementing things that you know with the first release.

**Mid-2018 - now** *—* We are now in August 2018, where I decided to take a break due to other personal problems. Then it is from November 2018 I caught up with Leon until the release 🎉.

If I compile the total of working time I spent on the Leon's `1.0.0-beta.0` release. The result is **11 months**, that includes: week-ends, early morning during weekdays (between 6am to 8am) before starting my lovely full-time work, and also at the end of the day after gym. And of course this result also includes days out of the computer. This number represents the whole timeline and not the specific time I was purely working on Leon. The number of commits on the private repository is 438.

## Thanks

Please wait! It's not the end yet, I just want to thanks now because I think it's more accurate to write it right after the above section.

I use these few lines to warmly thanks my:

- Family for having supported my long speeches about Leon and seeing me canceled some family events.
- Lovely girlfriend for giving me such energy and motivation.
- Friends who suggesting ideas and believing in Leon since his early days.

💙

## After One Week

I released Leon under the `1.0.0-beta.0` version the 10th of February 2019. Today we are now one week later than the release. Let me share what's happened over this week but before that, please... Let me tell you that you are incredibly **A.W.E.S.O.M.E!**

Leon has been well welcomed and all of that prove Leon has potential and there is a lot to do, **together**. My friends, it's an amazing adventure which is starting over here!

Here are some numbers from the initial release:

1. **24 hours later** *—* Leon gets his first 100 GitHub stars and appears in the GitHub JavaScript trending page.
2. **48 hours later** *—* Leon reaches 200 GitHub stars.
3. **4 days later** *—* Leon has more than 400 GitHub stars.
4. **5 days later** *—* Someone published Leon on the well known Hacker News and it has been well received. That brings Leon on the front page, to the 3rd position for few hours, then the 10th position for a complete day.
5. **6 days later** *—* The Leon's repository is ranked at the 1st position of the main GitHub trending page.

![Leon on GitHub trending](/images/20190217/leon_gh_trending.png)

![Leon on Hacker News](/images/20190217/leon_hn.png)

## What's Next 

The numbers above are promising, that's great and thanks to all of you for supporting the project. However, there is a lot [upcoming](https://roadmap.getleon.ai), this first release is the foundations of Leon.

I already set the [next milestone](https://github.com/leon-ai/leon/milestone/1) which is the `1.0.0-beta.1` version. Now, Leon needs to grow up, he is only one week old. I count on you for [contributing](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md).

**Let's educate and build Leon together**.

Cheers 🍻,

*Louis*.

## Spread The Word & Stay Tuned

👉 Share this [blog post](https://twitter.com/intent/tweet?source=webclient&original_referer=https://blog.getleon.ai/the-story-behind-leon&text=The Story Behind Leon&url=https://blog.getleon.ai/the-story-behind-leon&via=louistiti_fr).

👉 Follow me [@louistiti_fr](https://twitter.com/louistiti_fr).

👉 Subscribe to the [newsletter](https://getleon.ai).
