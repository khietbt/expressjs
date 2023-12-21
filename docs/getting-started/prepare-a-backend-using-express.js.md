---
title: Prepare a Backend Using Express.js
layout: default
nav_order: 2
parent: Getting Started
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

# Setup a Express.js Project

It is time to build a backend project from the ground up with Express.js.

## Init the folder

```shell
mkdir backend
cd backend
npm init --yes
```

## Install dependencies

```shell
npm install express mongoose cors mongodb dotenv
npm install  -D typescript ts-node-dev @types/express @types/cors
npx tsc --init
```

The last command is to create tsconfig.json, and it brings us some information:

```
Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

Our task is to open *tsconfig.json* and replace the below line:

```
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
```

with this one:

```
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */

```

## Write a hello world greeting

Place below source code into src/index.ts

```typescript
// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

Then, start the server by running the command:

```shell
npx ts-node src/index.ts
```

Now, a greeting will be displayed when visiting http://localhost:3000.

```
Hello world!
```

## Watch file changes

In development environment, we change codes constantly, and will be happy if our changes are reflected in browsers. This can be done by installing nodemon:

```shell
npm i -D nodemon ts-node
```

And a small change in scripts in package.json:

```json
// package.json
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
}
```

Finally, create a nodemon.json with contents:

```json
// nodemon.json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "concurrently \"npx tsc --watch\" \"ts-node src/index.ts\""
}
```

Restart the server and see changes in browsers when you edit codes:

```shell
npm run dev
```