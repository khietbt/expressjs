import { type IUserRepository, type User } from '@src/modules/user/domain';
import { TypeOrmRepository } from '@src/shared/infrastructure/database';
import { type UserModel } from '../models';
import { UserConverter } from '../converters/UserConverter';

export class UserRepository extends TypeOrmRepository<UserModel> implements IUserRepository {
  public async getAll(): Promise<User[]> {
    const users = await this.find({});
    const converter = new UserConverter();

    return users.map((u) => converter.from(u));
  }
}
