---
title: Routing via decorators
layout: default
nav_order: 2
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

`Decorator` is an experimental feature of typescript, and it is really helpful
for developers who come from the outside world. However, it will make our project
look similar to a NestJs one.

Here, `routing-controllers` are necessary libs.

## Enabling decorators

Please create a new project based on the last one:

```typescript
cp -R 03-routing/01-modularizing-routes 03-routing/02-routing-via-annotations
```

Here, `tsconfig.json` needs to be updated with 2 new configurations:

```json
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
```

## Using `routing-controllers` and `typedi`

New packages bring some kinds of dependency injection and inversion of control to our project:

```shell
npm install routing-controllers typedi
```

Here, we have a service with a decorator of `@Service()`:

```typescript
// services/SuperHeroService/AvengerService.ts
import { AvengerNotFoundException } from "@src/exceptions";
import { SuperHeroModel } from "@src/models";
import { AvengerRepository } from "@src/repositories";
import { SuperHeroService } from "@src/services";
import { ObjectUtils } from "@src/utils";
import { Service } from "typedi";

@Service()
export class AvengerService implements SuperHeroService {
  private readonly avengerRepository: AvengerRepository;

  public constructor() {
    this.avengerRepository = new AvengerRepository();
  }

  async getAll(): Promise<SuperHeroModel[]> {
    return this.avengerRepository.getAll();
  }

  async getById(id: number): Promise<SuperHeroModel> {
    const member = await this.avengerRepository.getById(id);

    if (ObjectUtils.isUndefined(member)) {
      throw new AvengerNotFoundException(id);
    }

    return member!;
  }
}
```

and use it in the controller:

```typescript
// controllers/SuperUserController.ts
import { SuperHeroModel } from "@src/models";
import { AvengerService, SuperHeroService } from "@src/services";
import { Get, JsonController, Param } from "routing-controllers";
import { Inject, Service } from "typedi";

@JsonController("/super-heroes")
@Service()
export class SuperHeroController {
  public constructor(
    @Inject(() => AvengerService) private superHeroService: SuperHeroService,
  ) {}

  @Get("/")
  public async getAll(): Promise<SuperHeroModel[]> {
    return this.superHeroService.getAll();
  }

  @Get("/:id")
  public async getById(@Param("id") id: number): Promise<SuperHeroModel> {
    return this.superHeroService.getById(id);
  }
}
```
