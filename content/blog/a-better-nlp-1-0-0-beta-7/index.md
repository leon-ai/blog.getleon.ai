---
title: A Better NLP - 1.0.0-beta.7
date: 2022-06-27
author: Louis Grenard
description: TODO...
---

👋 Hey all, intro...


### From Modules to Skills

#### New Vocabulary

...

#### New Structure

On the core, but also for the skills...
...

Categorized by domains, etc.
Each skill contains its own memory.
Can easily access skill memory across other skills...

### Introducing Slots Filling

...

### Context Switching

Classification prioritization belonging to the same domain first

Add bread to the shopping list
Actually, remove it

...

### A More Powerful NER

Leon has a custom TCP server and TCP client to be able to do IPC (Inter-Process Communication).
In our case, spaCy. Makes use of PyTorch?
New entities: person, cities, countries, organizations

...

### Global Entities

Handsigns, colors, etc.

Map data to global entities

...

### Language Switching

...

### Action Loop

...

### Action Types

Logic type
Dialog type
  Reuse entities values in answers @number (in utterance); {{ number }} (in answer)

Variables in the NLU
...

### Introducing Suggestions

...

### Introducing Resolvers

Use a separate model...

...

#### Global Resolvers

...

#### Skill Resolvers

Is gonna be prioritized to target the resolver of the skill

...

### Cartesian Training Samples

...

### Traceback from Skills to Core

Easier for skills developers...
Don't kill the main process when an error is occurring from a skill...

### New Skills

Basically to apply a real world use case into these newly introduced concepts...

### What's Next?

...

With such NLP foundations, we will be able to add many new things on the top...
Focus on the visual side of the skills later... Widgets, MiniApps, etc.

At the moment only the web app is available, but later imagine what we'll be able to do with the mobile and desktop app based on these foundations...

No docs are going to be created until the official release because...
Feel free to join us on Discord. It's important, because later we will be growing the community, etc.
