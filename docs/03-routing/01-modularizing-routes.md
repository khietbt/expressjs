---
title: Modularizing routes
layout: default
nav_order: 3
parent: Routing
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

## Preparing a project

It is easy to get started from the previous step:

```shell
mkdir 03-routing
cp -R 02-reading-environment-variables 03-routing/01-modularizing-routes
```

## Creating a data service

A service is needed to provide some data to APIs. Here, we will create a simple one
following the below structure:

```text
services
├── index.ts
└── SuperHeroService
    ├── AvengersService.ts
    ├── index.ts
    └── SuperHeroService.ts
```

It contains an interface:

```typescript
// services/SuperHeroService/SuperHeroService.ts
export interface SuperHeroService {
  getAll(): Promise<any>;

  getById(id: number): Promise<any>;
}
```

And an implementation:

```typescript
// services/SuperHeroService/AvengersService.ts
import { SuperHeroService } from "./SuperHeroService";

export class AvengersService implements SuperHeroService {
  avengers: any[] = [
    { id: 1, name: "Iron Man" },
    { id: 2, name: "Thor" },
    { id: 3, name: "Wasp" },
    { id: 4, name: "Ant Man" },
  ];

  async getAll(): Promise<any> {
    return this.avengers;
  }

  async getById(id: number): Promise<any> {
    const member = this.avengers.find((h) => h.id === id);

    if (!member) {
      throw new Error(`Superhero (id=${id}) not found`);
    }

    return member;
  }
}
```

## Expose APIs

- Firstly, a controller should be created to use services:

```typescript
// controllers/superHeroController.ts
import { AvengersService, SuperHeroService } from "@src/services";
import { Request, Response } from "express";

const superHeroService: SuperHeroService = new AvengersService();

export const superHeroController = {
  getAll: async (_req: Request, res: Response): Promise<any> => {
    res.json(await superHeroService.getAll());
    res.status(200);
  },

  getById: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    res.json(await superHeroService.getById(parseInt(id, 10)));
    res.status(200);
  },
};
```

- Secondly, bring it to the outside world with a route

```typescript
import { superHeroController } from "@src/controllers";
import { Router } from "express";

const superHeroRouter: Router = Router();

superHeroRouter.get("/", superHeroController.getAll);
superHeroRouter.get("/:id", superHeroController.getById);

export { superHeroRouter };
```

- Finally, tell the application about it:

```typescript
// src/index.ts
app.use("/api/super-heroes", superHeroRouter);
```
