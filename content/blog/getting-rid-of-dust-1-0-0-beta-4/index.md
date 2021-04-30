---
title: Getting Rid of Dust / 1.0.0-beta.4
date: 2021-04-23
author: Louis Grenard
description: After 2 years, a new release is finally out... Learn about technical debt and what this release contains.
---

👋 Hey all, the time has come... Like **finally**! I know it has been a long time. The project has been paused for about 2 years. We'll talk about the reasons of this endless pause in another blog post.

Today, we'll focus on this new release and understand what's new, where the project is leading to and the thinking process behind some decisions.

HOW TO INSTALL THE NEW VERSION

## Main Focus

The focus of this release is quite obvious. 2 years pause on a project requires a deep work on:

1. Rethinking about the project vision.
2. Redefining who would be interested in the project.
3. Analyzing technical debt and taking action.

At least that's how I put it together.

It's important to mention that the work here was not only technical. I needed to refocus on the **WHY** of Leon.

- Why did I build Leon at the first place?
- What problems is it solving?
- Is it still valuable today?

Let's focus on the technical part as the other part will be covered in another blog post.

### Dependency Updates

That is what happens when you don't update your project dependencies for about 2 years... Let images speak for themselves.

#### After a `npm install`

![npm vulnerabilities](npm-vulns.png)

#### After a `npm run build`

![Node.js warnings](warns.png)

#### How The Commit History Looked Like...

![Dependency commits](dep-commits.png)

I believe you got a rough idea of what needed to be done. Clearly I **updated all dependencies that Leon relies on**. Of course I could make use of tools such as [Dependabot](https://dependabot.com/) but I preferred to update everything manually. It allowed me to have a better control of what I was doing and see if each dependency still has its seat in the project. Most of all, and this is only my own opinion, I prefer to keep dependency updates as a one-shot task instead of having noises in pull requests.

I read the changelog of each dependency to understand what has changed, has been improved and check if there was any breaking change.

You can find a list of all the updates [here](https://trello.com/c/TK2v9uxP/300-%E2%AC%86%EF%B8%8F-100-beta4-upgrade-dependencies-to-their-latest-version-clean-up).

#### Dropping Husky

Leon was using [Husky](https://typicode.github.io/husky/#/) that was triggering a script I wrote to parse a commit message on the [commit-msg](https://git-scm.com/docs/githooks#_commit_msg) Git hook.

It was working pretty well after the update, but GUI clients like [GitKraken](https://www.gitkraken.com/) was not working properly anymore due to their recent changes (it was working well before). So I decided to **drop Husky** or any Git hook trigger script because I don't want this be a bottleneck for contributors. So I keep it simple without commit restriction.

I believe that the [CONTRIBUTING.md](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md#commits) file is enough to understand how to commit to the project. However, it's quite important to respect the commit convention as it eases the changelog generation for each new release.

#### Dropping Babel?

While [Babel](https://babeljs.io/) is an awesome JavaScript compiler, I was considering to drop it. Leon does not need to be ahead of current specifications, I felt it was a good choice to drop dependencies related to Babel as it'd lighten the dependency tree (which means faster install, less maintenance work and less potential security issue).

Moreover, since Node.js 14 we can [make use of experimental ECMAScript modules](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_modules_ecmascript_modules) which are the official standard format to package JavaScript code for reuse. Node.js was only supporting [CommonJS (CJS) modules](https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules) before that.

But here is the thing, I want to continue to use the [`module-alias` npm package](https://www.npmjs.com/package/module-alias) as I find it brings better readability of the imports. I found that it requires to build a custom module loader to resolve it. I concluded that it was too much steps to achieve for a small output, then I chose to postpone the Babel dropping task. If you are interested into that specific case, there is an [ongoing GitHub issue](https://github.com/ilearnio/module-alias/issues/59).

I might **come back to this task once the ecosystem will be more ready**.

### Fix Hotword Detection

Leon uses [Snowboy](https://github.com/Kitt-AI/snowboy) for its hotword detection. Unfortunately the project has been discontinued and is suffering from the lack of maintainability. 

Indeed, Snowboy uses [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) which helps to publish and install Node.js C++ addons from binaries. So when a new Node.js version is shipped, `node-pre-gyp` must update its listing of the supported targets by specifying the:

- New Node.js version.
- Node.js C++ [ABI](https://nodejs.org/en/docs/guides/abi-stability/) number.
- The [V8 JavaScript engine](https://v8.dev/) version.

Usually it is done through [this file](https://github.com/mapbox/node-pre-gyp/blob/master/lib/util/abi_crosswalk.json).

Despite the lack of maintainability, I decided to **create a [fork of Snowboy](https://github.com/leon-ai/snowboy)** and maintain it independently. On this fork, **Snowboy works with Node.js >= 14** as specified in [this issue comment](https://github.com/Kitt-AI/snowboy/pull/537#issuecomment-797881134).

Please keep in mind that is a **temporary solution** as this part of Leon should be improved in the future. If you have any suggestion for a hotword detection alternative or wish to build one, don't hesitate to **shoot me an email at <louis.grenard@gmail.com>**.

I found some alternatives such as [Porcupine](https://github.com/Picovoice/porcupine) from [Picovoice](https://picovoice.ai/) that works pretty well. But at the moment I'm writing this, their tooling does not allow to have short hotword like `Leon`. Which is in fact a best practice, but it means we'd need to comply such limitations.

## There is More...

The points above were the main ones to focus on for this release. But there are actually more things coming with it!

### The Web App is Now Powered by Vite

![Leon loves Vite](vite.jpeg)

I'm happy to say that Leon's **web app is now powered by [Vite](https://vitejs.dev/)**. The web app will get major changes in the future, so a review was necessary before to kick off the work.

The web app was using some Node.js features and [Browserify](http://browserify.org/). This is an unnecessary layer in our case. I wanted every feature be natively supported by the browsers as upcoming clients will also be natively supported by their respected platform.

Now that we are on an explicit browser compatible codebase, this is where Vite enters the game. In sum: better <abbr title="Developer Experience">DX</abbr> and performance.

Learn about the benefits [here](https://vitejs.dev/guide/why.html).

### From CircleCI to GitHub Actions

Until a while I was always using [CircleCI](https://circleci.com/) for my projects as I think it is doing a great job for <abbr title="Continous Integration">CI</abbr> and <abbr title="Continous Delivery">CD</abbr>.

However, since GitHub has launched [GitHub Actions](https://github.com/features/actions) I liked the idea of having the codebase close to the CI, so we don't need to get out of the GitHub ecosystem.

Sometimes on CircleCI, Leon was having troubles since the Node.js 14+ upgrade from the Leon's CI Docker image. The same Docker image was finishing all the jobs perfectly on different machines but not in CircleCI ones. It was timing out or finishing with an error for the end-to-end modules tests. The error was related to the Node.js [child process](https://nodejs.org/api/child_process.html) that did not work. So my bet is it was sometimes running out of memory.

Since I migrated to GitHub Actions, none of these happened. As Leon was using the Docker type on CircleCI, it looks like there is bit more hardware power on GitHub Actions. I did not try with the raw CircleCI Linux types as I wanted to use the [Leon's Docker image dedicated for its CI](https://hub.docker.com/r/leonai/ci/).

**CircleCI**

![CircleCI types](circleci-types.png)

**GitHub Actions**

![GitHub Actions types](github-actions-types.png)

Today Leon's CI is composed of 3 GitHub Actions [workflows](https://github.com/leon-ai/leon/tree/develop/.github/workflows):

- **build**: to ensure Leon can be built successfully.
- **lint**: to ensure the source code is written as per the standards of the project.
- **tests**: to ensure the quality of the features.

If you are interested in migrating from CircleCI to GitHub Actions, GitHub has put together [an article](https://docs.github.com/en/actions/learn-github-actions/migrating-from-circleci-to-github-actions) that is pretty straightforward.

### From Express.js to Fastify

Divlo...

...

### Try Leon with a Single-Click

![Leon loves Gitpod](gitpod.jpeg)

...

### Force Minimum Node.js Version

...

### New NLP

...

### Docker Files Improvements

...

### Always More...

Please feel free to take a look at the [roadmap](https://roadmap.getleon.ai/) to have a full understanding of what has been done for this release.

## Breaking Changes

- Haveibeenpwned package, need key now
- IBM voice...
- Remove Husky...
- Nearly none, see Trello cards

## What's Next

- Main goals: make drastic improvements on foundations/core and tooling; grow the community; be close to closed source assistant; rushing modules...
- Blog post about the Coming Back and things I mentioned earlier.
- Rebranding + Full React. Like this new blog is based on Gatsby(link)
- CLI (kudos to Divlo and Arthur. )
- You're welcome to contribute and join the new Discord
- Check the roadmap
