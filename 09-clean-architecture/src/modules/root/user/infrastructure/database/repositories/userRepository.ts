import { typeOrmDataSource } from '@src/modules/root/infrastructure';
import { type IUserRepository } from '@src/modules/user/domain';
import { UserRepository } from '@src/modules/user/infrastructure/database/repositories';

export const userRepository: IUserRepository = new UserRepository(typeOrmDataSource);
