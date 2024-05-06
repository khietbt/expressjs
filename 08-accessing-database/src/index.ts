import 'reflect-metadata';

import { EnvironmentInitializer, LoggerInitializer, SequelizeInitializer } from './initializers';
import { type Initializer } from './initializers/Initializer';

const initializers: Initializer[] = [
  new EnvironmentInitializer(),
  new LoggerInitializer(),
  new SequelizeInitializer()
]

const startServer = async (): Promise<void> => {
  for (const initializer of initializers) {
    await initializer.run();
  }
}

startServer()
  .catch((_e) => { });
// import { getApplicationRunningEnvironment, getDatabaseUrl } from './libs/utils/environmentUtils';
// import { getAbsolutePath } from './libs/utils/pathUtils';
// import { configDotenv } from 'dotenv';
// import { UserModel, initializeUserModel } from './models/UserModel';
// import { Sequelize } from 'sequelize';

// // const runningEnvironment = getApplicationRunningEnvironment();

// // const configurationFile = getAbsolutePath(`.env.${runningEnvironment}`);

// // configDotenv({ path: configurationFile });

// // console.log(configurationFile);
// // console.log(getDatabaseUrl());

// // const sequelize = new Sequelize(getDatabaseUrl()) // Example for postgres

// // const main = async (): Promise<void> => {
// //   try {
// //     await sequelize.authenticate();
// //     console.log('Connection has been established successfully.');

// //     initializeUserModel(sequelize);

// //     const users = await UserModel.findAll();

// //     users.forEach((user) => {
// //       console.log(user.toJSON());
// //     });

// //   } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// //   }
// // };

// // main()
// //   .catch((_error) => { })
