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

# MEAN
{: .no_toc }

[What Is the MEAN Stack?](https://www.mongodb.com/mean-stack) It stands for MongoDB, Express.js, Angular and Node.js - a
tech stack for developing web applications.

## Installing the MEAN stack

### nvm

[nvm](https://github.com/nvm-sh/nvm) is a version manager for Node.js. Please
follow [this instruction](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to install it.

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

### Angular.js

Angular.js is just a library, and it will be embedded when creating the front-end.

### MongoDB

Please take a look at [this official instruction](https://www.mongodb.com/docs/manual/installation) to understand how
to install MongoDB on your computer.