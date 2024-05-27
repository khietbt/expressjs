import { type UserId, type IUserRepository, type User } from '@src/modules/user/domain';
import { TypeOrmRepository } from '@src/shared/infrastructure/database';
import { UserModel } from '../models';
import { DataSource } from 'typeorm';
import { type Nullable } from '@src/libs/types';
import { UserModelToUserConverter } from '../converters';
import { delay, inject, injectable } from 'tsyringe';

@injectable()
export class UserRepository extends TypeOrmRepository<UserModel> implements IUserRepository {
  public constructor(@inject(delay(() => DataSource)) readonly dataSource: DataSource) {
    super(UserModel, dataSource);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.find({});
    const converter = new UserModelToUserConverter();

    return users.map((u) => converter.transform(u));
  }

  public async getOne(id: UserId): Promise<Nullable<User>> {
    const user = await this.findOneBy({ id: id.value });

    if (user == null) {
      return null;
    }

    const converter = new UserModelToUserConverter();

    return converter.transform(user);
  }
}
