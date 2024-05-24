import { type UserId, type IUserRepository, type User } from '@src/modules/user/domain';
import { TypeOrmRepository } from '@src/shared/infrastructure/database';
import { UserModel } from '../models';
import { UserConverter } from '../converters/UserConverter';
import { type DataSource } from 'typeorm';
import { type Nullable } from '@src/libs/types';

export class UserRepository extends TypeOrmRepository<UserModel> implements IUserRepository {
  public constructor(dataSource: DataSource) {
    super(UserModel, dataSource);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.find({});
    const converter = new UserConverter();

    return users.map((u) => converter.from(u));
  }

  public async getOne(id: UserId): Promise<Nullable<User>> {
    const user = await this.findOneBy({ id: id.value });

    if (user == null) {
      return null;
    }

    const converter = new UserConverter();

    return converter.from(user);
  }
}
