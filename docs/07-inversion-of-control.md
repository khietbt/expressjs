---
title: Inversion of control
layout: default
nav_order: 6
---

Inversion of control (IoC) is a modern pattern which helps reduce efforts for
reusing, testing services, objects. There are many libs sharing this idea.

Here, TypeDI is suggested because it is simple but very effective. Otherwise,
typestack team also provides microframework to split the application into modules
which can be bootstrapped and loaded in a specific sequence.

## Installing TypeDI, TypeORM, microframework

```sh
npm install typedi typeorm microframework mysql reflect-metadata

```

## Settings to use annotations

Similar to routing-controllers, these tools use annotations which should be
enabled in tsconfig.json:

```json
     "experimentalDecorators": true,
     "emitDecoratorMetadata": true,
```

## Adding configurations for accessing database

TypeORM needs a database with below configurations in .env.local

```env
# Database settings
DATABASE_ENTITIES=./src/**/*Entity.ts
DATABASE_LOGGING=true
DATABASE_MIGRATIONS=
DATABASE_SUBCRIBERS=
DATABASE_SYNCHRONIZE=true
DATABASE_TYPE=mysql
DATABASE_URL=mysql://expressjs:expressjs@localhost:3306/expressjs
```

Certainly, some utils should be created for using these values more easily:

```text
getDatabaseEntities()
getDatabaseLogging()
getDatabaseMigrations()
getDatabaseSucribers()
getDatabaseSynchronize()
getDatabaseType()
getDatabaseUrl()
```

## Creating loaders to load module by module

```text
environmentLoader       # Reading configurations from .env.*
loggerLoader            # Creating a global logger
dataSourceLoader        # Initilizing database connection
configurationLoader     # Creating a global configuration from environment variables
applicationLoader       # Creating a server to listen requests
```

A typical loader looks like below:

```typescript
import { Configuration } from "@src/libs/configuration";
import {
  type MicroframeworkLoader,
  type MicroframeworkSettings,
} from "microframework";
import Container from "typedi";
import { DataSource, type DataSourceOptions } from "typeorm";

export const dataSourceLoader: MicroframeworkLoader = async (
  _settings?: MicroframeworkSettings,
) => {
  const configuration = Container.get(Configuration);

  const dataSource = new DataSource(
    configuration.database as unknown as DataSourceOptions,
  );

  await dataSource.initialize();

  Container.set(DataSource, dataSource);
};
```

The last statement puts the dataSource under the management of
typedi, then, we can use it later via the Container API

```typescript
const dataSource = Container.get(DataSource);
```

Or take a cup of coffee and let TypeDI do what it is born to do:

```typescript
import { DataSource, Repository } from "typeorm";
import { Service } from "typedi";
import { UserEntity } from "./UserEntity";

@Service()
export class UserRepository extends Repository<UserEntity> {
  /**
   * Constructor.
   *
   * @param dataSource The data source used to create the entity manager
   */
  public constructor(readonly dataSource: DataSource) {
    // Creates the entity manager from the given data source
    super(UserEntity, dataSource.createEntityManager());
  }
}
```

Here, by using @Service(), TypeDI automatically creates an instance of
UserRepository and places it under the management of the Container.

## Gathering loaders to start sequential

It is time to use microframework to bootstrap:

```typescript
import "reflect-metadata";

import { bootstrapMicroframework } from "microframework";
import {
  applicationLoader,
  configurationLoader,
  dataSourceLoader,
  environmentLoader,
  loggerLoader,
  routingControllersLoader,
} from "./loaders";

bootstrapMicroframework({
  config: {
    showBootstrapTime: true,
    bootstrapTimeout: 10,
  },
  loaders: [
    environmentLoader,
    configurationLoader,
    loggerLoader,
    routingControllersLoader,
    dataSourceLoader,
    applicationLoader,
  ],
}).catch((error) => {
  console.error("Application is crashed due to an error: " + error);
});
```

Here, the order of loaders is important. For example: The application only
starts after preparing a database connection.
