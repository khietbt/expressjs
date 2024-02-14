---
title: Handling errors
layout: default
nav_order: 4
---

In `AvengerService::getById`, an exception will be thrown if the avenger is not found:

```typescript
async getById(id: number): Promise<any> {
    const member = this.avengers.find((h) => h.id === id);

  if (!member) {
    throw new AvengerNotFoundException(id);
  }

  return member;
}
```

And it will make the application crashed if we intentionally test a
non-existing id.

For example: [http://localhost:8000/api/super-heroes/8]

```text
[15:27:58.056] INFO (8769): [miscellanenous:Application] Started listening on 8000
.../src/services/SuperHeroService/AvengerService.ts:21
      throw new AvengerNotFoundException(id);
            ^
AvengerNotFoundException [Error]: Avenger (id='8') not found
    at AvengerService.getById (.../src/services/SuperHeroService/AvengerService.ts:21:13)
    at getById (.../src/controllers/superHeroController.ts:16:37)
    at Layer.handle [as handle_request] (.../node_modules/express/lib/router/layer.js:95:5)
    at next (.../node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (.../node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (.../node_modules/express/lib/router/layer.js:95:5)
    at .../node_modules/express/lib/router/index.js:284:15
    at param (.../node_modules/express/lib/router/index.js:365:14)
    at param (.../node_modules/express/lib/router/index.js:376:14)
    at Function.process_params (.../node_modules/express/lib/router/index.js:421:3)
[nodemon] app crashed - waiting for file changes before starting...
```

To avoid this issue, we need a global error handler by adding a middleware.

## Preparing a middleware

It looks simple:

```typescript
// middlewares/errorHandlingMiddleware.ts
import { NotFoundException } from "@src/exceptions";
import { NextFunction, Request, Response } from "express";

const error2status = (error: Error): number => {
  if (error instanceof NotFoundException) {
    return 404;
  }

  return 500;
};

export const errorHandlingMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  response.status(error2status(error)).send({
    message: error.message,
  });
};
```

## Applying the error handler

A new package is needed to handle asynchronous errors:

```shell
npm install express-async-errors
```

Then use it in the `Application` class

```typescript
require("express-async-errors"); // place this statement at line#1

...

this.application.use(errorHandlingMiddleware);
```
