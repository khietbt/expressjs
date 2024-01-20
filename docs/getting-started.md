---
title: Getting Started
layout: default
nav_order: 2
---

<!-- markdownlint-disable MD033 -->
<details closed markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

From GitHub, you can easily find an Express.js boilerplate which provides basic
items for setting up a new project. For example:

```text
git@github.com:w3tecch/express-typescript-boilerplate.git
```

Does it look complex? If yes, then let us build an Express.js for ourselves.

## Initialize a new project

```shell
mkdir getting-started \
  && cd getting_started \
  && npm init -y \
  && npm install express typescript \
  && npm install --save-dev typescript @types/node eslint prettier \
  && npm install --save-dev eslint-config-prettier eslint-plugin-prettier \
  && npm install --save-dev @typescript-eslint/eslint-plugin \
  && npm install --save-dev @typescript-eslint/parser ts-node \
  && npm install --save-dev tsc-alias tsconfig-paths \
  && npm install --save-dev rimraf nodemon
```

The `package.json` should be like:

```json
{
  "name": "getting-started",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "@types/node": "^20.10.5",
    "@typescript-eslint/eslint-plugin": "^6.16.0",
    "@typescript-eslint/parser": "^6.16.0",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.2",
    "nodemon": "^3.0.2",
    "prettier": "^3.1.1",
    "rimraf": "^5.0.5",
    "ts-node": "^10.9.2",
    "tsc-alias": "^1.8.8",
    "tsconfig-paths": "^4.2.0"
  }
}
```

What did we install?

- express: Express.js component
- typescript: Typescript component
- @types/node: Node component to support typescript
- eslint: Syntax checker
- prettier: Code formatter
- eslint-config-prettier: Additional settings to avoid conflicts between eslint
  & prettier
- eslint-plugin-prettier: Add extra prettier rules to eslint
- @typescript-eslint/eslint-plugin: Eslint plugin component
- @typescript-eslint/parser: Eslint parser to work with typescript
- ts-node: Typescript interpreter
- tsc-alias: Typescript's alias processor
- tsconfig-paths: Short path
- rimraf: Tool to clean output dir before compiling
- nodemon: Tool to watch file changes to build while coding

## Add configurations

### `.eslintrc`

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```

### `.eslintignore`

```ignore
node_modules/
dist/
```

### `.prettierrc`

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

### `.prettierignore`

```ignore
node_modules/
dist/
```

### `.editorconfig`

```text
[*]
indent_size=2
indent_style=space
```

### `nodemon.json`

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
```

### `package.json`

```json
{
  "name": "getting-started",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "npx nodemon",
    "build": "rimraf ./dist && tsc && tsc-alias",
    "start": "node dist/index.js",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.5",
    "@typescript-eslint/eslint-plugin": "^6.16.0",
    "@typescript-eslint/parser": "^6.16.0",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.2",
    "nodemon": "^3.0.2",
    "prettier": "^3.1.1",
    "rimraf": "^5.0.5",
    "ts-node": "^10.9.2",
    "tsc-alias": "^1.8.8",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.3.3"
  }
}
```

### .env

```properties
PORT=3000
```

## Hello world

Create a file `src/index.ts` with content:

```typescript
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

Start server with command:

```shell
npm run dev
```

Then, visit [http://localhost:3000], a greeting will be displayed:

```text
Hello world!
```
