import { BaseRepository } from '@src/libs';
import { delay, inject, injectable } from 'tsyringe';
import { DataSource } from 'typeorm';
import { UserModel } from './UserModel';

@injectable()
export class UserRepository extends BaseRepository<UserModel> {
  public constructor(@inject(delay(() => DataSource)) readonly dataSource: DataSource) {
    super(UserModel, dataSource.createEntityManager());
  }
}
