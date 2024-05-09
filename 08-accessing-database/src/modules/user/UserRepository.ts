import { BaseRepository } from '@topdir/src/libs';
import { delay, inject, injectable } from 'tsyringe';
import { UserModel } from './UserModel';
import { DataSource } from 'typeorm';

@injectable()
export class UserRepository extends BaseRepository<UserModel> {
  public constructor(@inject(delay(() => DataSource)) readonly dataSource: DataSource) {
    super(UserModel, dataSource.createEntityManager());
  }
}
