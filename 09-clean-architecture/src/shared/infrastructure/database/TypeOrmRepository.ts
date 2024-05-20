import { type DataSource, Repository, type EntityTarget } from 'typeorm';
import { type TypeOrmModel } from './TypeOrmModel';

export abstract class DatabaseRepository<T extends TypeOrmModel> extends Repository<T> {
  public constructor(target: EntityTarget<T>, dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }
}
