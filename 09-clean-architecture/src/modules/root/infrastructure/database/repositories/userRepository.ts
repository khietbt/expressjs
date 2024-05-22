import { UserRepository } from '@src/modules/user/infrastructure/database/repositories';
import { mysqlDataSource } from '../mysqlDataSource';

export const userRepository = new UserRepository(mysqlDataSource);
