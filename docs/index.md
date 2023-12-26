---
title: Home
layout: default
nav_order: 1
---

<details closed markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

# Express.js
{: .no_toc }

[Express.js](https://expressjs.com) is a Node.js framework for writing web applications. It is usually mentioned as a part of MEAN / MERN stack.

## Installation

### nvm

[nvm](https://github.com/nvm-sh/nvm) is a version manager for Node.js. Please follow [this instruction](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to install it.

### Node.js

Please install the latest lts version of Node.js using nvm

```shell
nvm install --lts
```

### npm & Express.js

```shell
npm install -g npm
npm install -g express-generator
```
## Getting Started

After installing tools, we can test immediately by creating a new project:

```shell
express getting-started && cd getting-started && npm install && npm start
```

It is time to open your browser and visit http://localhost:3000. A greeting will be displayed:

```
Express
Welcome to Express
```

It is done.