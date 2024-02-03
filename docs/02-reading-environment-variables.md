---
title: Reading Environment Variables
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

Using environment variables is a simple way to make the application configurable.

## Prepare a project

```shell
cp -R 01-getting-started 02-reading-environment-variables
cd 02-reading-environment-variables
npm install cross-env
```

Here, `cross-env` is a cross-platform tool to set environment variables.

## Prepare an environment file

Node.js uses `dotenv` to read the environment file in the root of the project.
For example:

```properties
# .env.local
APPLICATION_PORT=8000
```

## Reading values from file

The above file is dedicated for running the application at the local computer
`NODE_ENV`.

### Setting the local environment

In the `package.json`, a new script entry is necessary:

```json
{
  "scripts": {
    "local": "cross-env NODE_ENV=local npx nodemon"
  }
}
```

### Using environment values

- Loading values from file:

```typescript
dotenv.config({
  file: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});
```

- Using values:

```typescript
const applicationPort = process.env.APPLICATION_PORT;
```

### Directory structure

Now we hare a project which looks like this:

```text
02-reading-environment-variables
├── nodemon.json
├── package.json
├── package-lock.json
├── reading-environment-variables.iml
├── src
│   ├── constants
│   │   ├── EnvironmentConstants.ts
│   │   ├── EnvironmentVariableConstants.ts
│   │   ├── index.ts
│   │   ├── ObjectConstants.ts
│   │   └── StringConstants.ts
│   ├── exceptions
│   │   ├── EnvironmentVariableNotFoundException.ts
│   │   ├── index.ts
│   │   └── NotFoundException.ts
│   ├── index.ts
│   ├── miscellaneous
│   │   ├── configuration.ts
│   │   └── index.ts
│   └── utils
│       ├── ConversionUtils.ts
│       ├── EnvironmentUtils.ts
│       ├── index.ts
│       └── ObjectUtils.ts
└── tsconfig.json
```
