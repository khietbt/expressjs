import { type DataSource, Repository, type EntityTarget } from 'typeorm';
import { type DatabaseModel } from './DatabaseModel';

export abstract class DatabaseRepository<T extends DatabaseModel> extends Repository<T> {
  public constructor(target: EntityTarget<T>, dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }
}
