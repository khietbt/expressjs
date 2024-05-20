import { type IUserRepository, type User } from '@src/modules/user/domain';
import { TypeOrmRepository } from '@src/shared/infrastructure/database';
import { UserModel } from '../models';
import { UserConverter } from '../converters/UserConverter';
import { type DataSource } from 'typeorm';

export class UserRepository extends TypeOrmRepository<UserModel> implements IUserRepository {
  public constructor(dataSource: DataSource) {
    super(UserModel, dataSource);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.find({});
    const converter = new UserConverter();

    return users.map((u) => converter.from(u));
  }
}
