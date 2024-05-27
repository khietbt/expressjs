import 'reflect-metadata';

import './modules/root/presentation/api/application';

// import { mysqlDataSource, userRepository } from './modules/root';
//
// // import { DataSourceInitializer, LoggerInitializer, type Initializer } from './initializers';
// // import { container } from 'tsyringe';
// // import { Logger } from './libs/logger';
// // import { DataSource } from 'typeorm';
// // import { type IUserRepository } from './modules/user/domain';
// // import { UserRepository } from './modules/user/infrastructure/database/repositories';
// // import { GetAllUseCase } from './modules/user/application';
// //
// // const initializers: Initializer[] = [new LoggerInitializer(), new DataSourceInitializer()];
// //
// const startServer = async (): Promise<void> => {
//   await mysqlDataSource.initialize();
//
//   const users = await userRepository.getAll();
//
//   users.forEach((u) => {
//     console.error(u.toString());
//   });
// };
//
// startServer().catch((e) => {
//   console.error(e);
// });
