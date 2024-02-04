---
title: Routing
layout: default
nav_order: 3
has_children: true
---

Routing is the heart of Express.js. For example: In order to return
'Hello world' to client:

```typescript
const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello world!");
});
```

It looks simple but efficient & flexible. However, it will need a lot of this
kind of boilerplate codes if the project becomes larger. In this case, there
are 2 choices:

- Modularizing routes
- Using routes via annotations
