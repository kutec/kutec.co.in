---
title: Getting Started with React
cover: ""
date: "2018-06-06"
category: reactjs
slug: getting-started-with-react
tags:
  - react-beginner
  - beginner
---

I was thinking of learning about Reactjs from last few years. But somehow I couldn't make it. I know it's too late but finally, I begin towards that, and this is the very first post in the Reactjs category.

I have done tons of projects in Angular but never got the opportunity to work on a React project. So I've decided to create dummy projects at the end of the whole learning.

Let's begin now.

To start with any development project, we need to setup a development enviorment. Today, there are many poular online IDEs available where project-setup can be done instantly. However, I personally prefer the local development setup for most of the projects.

## Reactjs - Local Development Environment

<small>I work in Windows OS, so all the steps below, would be in that context only.</small>

#### Step 1 - Install `create-react-app` gloabally:

```bash
npm i create-react-app -g
```

#### Step 2 - Create a new Reactjs project

```bash
npx create-react-app my-app
```

OR

```shell
create-react-app my-app
```

### Step 3 - Run the project

Once the project creation is successful, you can switch over the project directory and run the project.

```shell
cd my-app
npm start
```

## Reactjs - Quick Options

As mentioned above, there are other online options available where you can just bypass the manual efforts.

### Reactjs - Development Envioronment (online IDE)

Just to give a name of few, you can head over to the below links and decide the most suitable for you.

- [CodePen](https://codepen.io/pen?&editors=0010&prefill_data_id=02943edd-01bf-44c1-ab45-2ea17c6661c5)
- [CodeSandbox](https://codesandbox.io/s/new)
- [Stackblitz](https://stackblitz.com/fork/react)

I personally prefer **CodeSandbox**.

### Reactjs - Instant Start with CDN

If you are traditional web developer and know nothing about ReactJS but still want to feel the react app then you can quickly make use of the CDN.

You can simply include below scripts to your HTML page and boom, you are up with the Reactjs setup. Now you can play around it.

#### For Developers

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

#### For Production

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

Well, this is it. We are done with the first step on the journey of learning Reactjs and our application can be seen now in the browser - `localost:3000`.

Next, we would understand the scafolding or architecture of a Reactjs project.

Stay tuned and happy coding :)