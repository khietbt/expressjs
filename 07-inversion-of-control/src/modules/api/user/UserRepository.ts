import { DataSource, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserEntity } from './UserEntity';

@Service()
export class UserRepository extends Repository<UserEntity> {
  /**
   * Constructor.
   *
   * @param dataSource The data source used to create the entity manager
   */
  public constructor(readonly dataSource: DataSource) {
    // Creates the entity manager from the given data source
    super(UserEntity, dataSource.createEntityManager());
  }
}
