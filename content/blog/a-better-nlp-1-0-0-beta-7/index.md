---
title: A Better NLP - 1.0.0-beta.7
date: 2022-06-27
author: Louis Grenard
description: TODO...
---

👋 Hey all, intro...

Create beautiful image to represent this blog post (with same type of color gradient as on the website and "3D" logo)


### From Modules to Skills

#### New Vocabulary

...

#### New Structure

![New skills structure](new-skill-structure.png?v=1)

On the core, but also for the skills...
...

Categorized by domains, etc.
Each skill contains its own memory.
Can easily access skill memory across other skills...

### Introducing Slots Filling

... Create image of how it works under the hood ...

...

### Context Switching

... Create image of how it works under the hood ...

Classification prioritization belonging to the same domain first

Add bread to the shopping list
Actually, remove it

...

### A More Powerful NER

... Create image of the different levels of entities ...

Leon has a custom TCP server and TCP client to be able to do IPC (Inter-Process Communication).
In our case, spaCy. Makes use of PyTorch?
New entities: person, cities, countries, organizations

...

### Global Entities

Colors, etc.

Map data to global entities

...

### Language Switching

... Share screenshot ...

...

### Action Loop

... Create image of how it works under the hood ...

...

### Action Types

Logic type
Dialog type
  Reuse entities values in answers @number (in utterance); {{ number }} (in answer)

Variables in the NLU
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

### Introducing Resolvers

... Create image of how it works under the hood ...

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

...

With such NLP foundations, we will be able to add many new things on the top...
Next big milestones before the official release will be:

1. TypeScript rewrite.
2. Python SDK.
3. Introduce JavaScript bridge with TypeScript SDK.
4. Introduce widgets.
5. Introduce miniapps.
6. Languages scaling.
7. Implement new STT/TTS offline and cloud solutions.
8. Introduce the skills platform.

At the moment only the web app is available, but later imagine what we'll be able to do with the mobile and desktop app based on these foundations...

No docs are going to be created until the official release because...
Feel free to join us on Discord. It's important, because later we will be growing the community, etc.
