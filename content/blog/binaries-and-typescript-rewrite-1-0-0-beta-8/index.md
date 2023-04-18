---
title: Binaries and TypeScript Rewrite - 1.0.0-beta.8
date: 2023-04-19
author: Louis Grenard
description: Introducing the beta 8 of Leon. It was a long-development release but definitely worth it.
---

👋 Hey all, this has been a long-development release...

I'm glad to introduce the beta 8 of Leon! It comes with new features and improvements aimed at enhancing its performance, reliability, and usability. In this post, I'll walk you through the major highlights of this release and explain how they are beneficial for you and for the project as a whole.

To be fully transparent with you, the TypeScript rewrite had a sour taste. It wasn't really fun to do. But it was necessary. I nearly had to rewrite Leon from scratch.

![1.0.0-beta.8](beta-8.png?v=1)

## What's New

### No Need of Python Environment Anymore

Created binaries for the Python bridge and the TCP server. No need Python environment at runtime anymore
...

We’ve also created binaries for the Python bridge and the TCP server, which means that you no longer need to install a Python environment or any dependencies at runtime. This simplifies the deployment and installation process and makes Leon more portable and compatible with different platforms and environments.

Cf. https://trello.com/c/SwipaaEX/470-%E2%9C%A8-100-beta8-create-binaries-for-python-bridge-and-tcp-server

### TypeScript Rewrite and New Architecture

TypeScript rewrite and codebase refactoring (explain how TypeScript can help and how the refactoring is important. Better file structure; make use of singletons for core components to allow a unique state across the core, etc.)
...

Another major improvement in this beta version is the rewrite and refactoring of our codebase using TypeScript. TypeScript is a superset of JavaScript that adds static type checking, class-based object-oriented programming, and other features that enhance the maintainability, readability, and robustness of the code. By using TypeScript, we can catch many common coding errors at compile-time, rather than at runtime, which saves us a lot of debugging time and effort.

The refactoring of our codebase also includes a better file structure, which makes it easier to navigate and understand the code, and the use of singletons for core components, such as the natural language processing engine, the "brain", voices nodes and so on... Which allows us to maintain a unique state across the core and avoid inconsistencies and conflicts.

### Telemetry and Report Services

- Entities anonymized
  - Do not store any data that allow to identify
  - Based on this series of article... SHARE LINK
  - Share GitHub repository to know more
  - Can easily be disabled via the `LEON_TELEMETRY` environment variable

Created a "Report" service so diagnoses are easier to share via an URL
...

One of the key challenges of developing an AI assistant is to collect and analyze data about its usage, performance, and errors. This is where the Telemetry service comes in handy. It allows us to gather telemetry data from Leon owners, such as [TODO] and use this data to improve the quality of Leon, identify and fix bugs, and optimize the resources usage.

Also, we’ve created a Report service that makes it easier to diagnose and share the results of your Leon’s state via a URL. The Report service generates a summary about the health of Leon and get some data about the environment it's running in to have a better understanding.

[TODO]: PUT REPO LINK

### Moved Away from superagent to Axios

Move away from the "superagent" npm package to the "Axios" npm package
...

Lastly, we’ve moved away from the superagent npm package to the Axios npm package. Axios is a popular and widely used HTTP client for JavaScript and TypeScript that supports many features, such as interceptors, cancellation, automatic retries, and error handling, that make it easier to handle HTTP requests and responses. By using Axios, we can ensure a more efficient and reliable communication between several nodes of the project, and handle errors and timeouts more gracefully.

### How About Socket.IO to WS?

...

## Friendly Reminder

Coqui STT (does not work with Node.js 18 and macOS M1)
Watson STT / TTS does not work
No new documentation is going to be rewritten until the official release

Feel free to join us on Discord, because once the core is released, most of the magic will happen there!

## What's Next?

Past previous article link anchor
...

We hope that you find these new features and improvements valuable and useful for your projects and workflows. We welcome any feedback, suggestions.
Contributions are still closed as... TODO: put GitHub anchor link in README
