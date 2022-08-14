---
title: A Better NLP - 1.0.0-beta.7
date: 2022-08-14
author: Louis Grenard
description: TODO...
---

👋 Hey all, over the last months I've been working on trying to drastically improve the NLP capabilities of Leon so we can create more advanced skills in the future. But not only.

Indeed, before the official release of Leon, many things have to be done to make sure that we have a respectable personal assistant who is extended by skills that can cover many scenarios and properly respect our privacy. Hence, these new capabilities that I will share with you shortly.

At the end of this blog post I will also share toward what Leon is heading to.

![1.0.0-beta.7](beta-7.png?v=2)

### From Modules to Skills

As of now, "modules" and "packages" no longer exist. Instead, they've been replaced by "skills". This involve a change in the naming of how we define components of Leon that extend the core to do meaningful things (e.g. Music skill, Forecast skill, etc.). But most importantly, it required a major change in the structure.

#### New Vocabulary

When I released Leon at the first place, I found that "module" and "package" terms were easy to remember. However, now I found it can be somehow confusing.

"Module" is a broadly used term in computer science, it can define a CommonJS/ES module, a Python module, etc. "Package" is also widely used, such as for npm packages or even Python packages. So I find it's misleading to call such components for Leon in this way as it can also refer to things that aren't directly related to Leon.

Also, let's call a cat a cat, when you hear "module" or "package" for Leon, it does not really ring a bell, we don't really get what it is for without reading docs. Whereas "skill" can naturally be understood. Also it is used in some closed source assistants out there, so we kind of get used to it already.

Packages -> domains

Modules -> skills

Packages folder into skills

Query -> utterance

Expressions -> utterance samples

#### New Structure

![New skills structure](new-skill-structure.png?v=3)

On the core, but also for the skills...
...

Categorized by domains, etc.
Each skill contains its own memory.
Can easily access skill memory across other skills...

### Context Switching

Don't create image here... Create image of how it works under the hood ... Small timeline showing classifications prioritization with newly set context and hold entities, so can omit required entities

Classification prioritization belonging to the same domain first

Add bread to the shopping list
Actually, remove it

...

#### Action Loop

... Create image of how it works under the hood ... Make use of a loop schema somehow. Prepare next action in advance and won't quit context as long as in current one

...

#### Slot Filling

![Slot filling](slot-filling.png)

...

### A More Powerful NER

![A more powerful NER](more-powerful-ner.png)

Entities
- Built in (Microsoft) https://www.npmjs.com/package/@microsoft/recognizers-text-suite
- spaCy
- Custom (scoped in the skill action)
  - Trim
  - Enum
  - Regex
- Global

Leon has a custom TCP server and TCP client to be able to do IPC (Inter-Process Communication). Split spaCy location into cities and countries
In our case, spaCy. Makes use of PyTorch?
New entities: person, cities, countries, organizations

...

#### Global Entities

Colors, etc.

Map data to global entities

...

### Action Types

Logic type
Dialog type
Reuse entities values in answers @number (in utterance); {{ number }} (in answer)

Variables in the NLU
...

### Language Switching

... Share screenshot ...

...

### Introducing Suggestions

... Share screenshot ...

On action level...
On slot level...

Dialog + slots: show automatically
Logic: need to be triggered from skill:
  - showNextActionSuggestions (next action)
  - showSuggestions (current action)

...

### Resolvers

... Create image of how it works under the hood ... Split schema in separate models...

Use a separate model...

...

#### Global Resolvers

Use their own NLP model.

...

#### Skill Resolvers

Use their own NLP model.

...

### Cartesian Training Samples

... Provide examples ...

...

### Traceback from Skills to Core

Easier for skills developers...
Don't kill the main process when an error is occurring from a skill...
Auto enable a debug output on print from skills...

### New Skills

Basically to apply a real world use case into these newly introduced concepts...

### What's Next?

With such NLP foundations, we will be able to imagine and realize an infinity of skills. Such expendable architecture is one of the main strength of Leon since day one.

New core features still need to see the light of day to have a decent personal assistant

Thanks to this core, I'll be focusing on making it easier for skills developers to extend Leon. The next big milestones before the official release will be:

#### 1. TypeScript Rewrite

...

#### 2. Python SDK

...

#### 3. JavaScript Bridge and TypeScript SDK

...

#### 4. Widgets

...

#### 5. Mini Apps

...

#### 6. Languages Scaling

...

#### 7. New STT/TTS Offline and Cloud Solutions

...

#### 8. Skills Platform

...

### Important Notes

Until the official release, I do not recommend new contributions as the whole architecture is constantly being revisited.

Also, please know that before the official release no docs is going to be written because of all the major upcoming features that may bring up breaking changes.

Once the official release shipped, the big focus will be to build many skills along with the community and cover most of the basic cases and beyond of existing closed source assistants. If you have any questions or are willing to contribute to the bright future of Leon, **feel free to [join us on Discord](https://discord.gg/MNQqqKg). It's important, because later we will be growing the community all together!**

Ah I almost forgot... At the moment only the web app is available, but later imagine what we'll be able to do with native features of a mobile app and a desktop app based on the cool stuff mentioned earlier. These will come up after the official release.

For the mobile app, I'll probably go with React Native to stay somehow consistent between the Android and iOS version and also with the whole Leon stack.

Oh boy, so many things to think of!
