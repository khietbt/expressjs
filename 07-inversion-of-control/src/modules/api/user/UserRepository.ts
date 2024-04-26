import { DataSource, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserEntity } from './UserEntity';

@Service()
export class UserRepository extends Repository<UserEntity> {
  public constructor(readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
}
