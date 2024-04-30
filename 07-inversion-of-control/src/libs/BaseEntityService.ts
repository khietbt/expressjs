import { toOmitted, type BaseEntity } from '@src/libs/entities';
import { type DeepPartial, type FindOptionsWhere, In, type Repository } from 'typeorm';
import { type QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseEntityService<T extends BaseEntity> {
  public constructor(protected readonly repository: Repository<T>) {}

  /**
   * Creates a new entity and saves it to the database
   * @param t The entity to be created. The ID property will be ignored
   */
  public async create(t: Partial<T>): Promise<T> {
    // The save method of the repository takes a partial entity, which means
    // that the ID property will be ignored. This is what we want, since we
    // don't want to specify the ID manually
    return await this.repository.save(toOmitted(t) as DeepPartial<T>);
  }

  /**
   * Returns all entities of type T
   * @returns a promise that resolves to an array of all entities of type T
   */
  public async getAll(): Promise<T[]> {
    // Finds all entities of type T in the database and returns them as an array
    return await this.repository.find();
  }

  /**
   * Retrieves one entity of type T by its ID
   * @param id The ID of the entity to retrieve
   * @returns A promise that resolves to the found entity or null if no entity was found
   */
  public async getOne(id: string): Promise<T | null> {
    // Finds one entity of type T in the database with the given ID and returns it.
    // If no entity is found, null is returned
    return await this.repository.findOneBy({ id } as unknown as FindOptionsWhere<T>);
  }

  public async getMany(ids: string[]): Promise<T[]> {
    return await this.repository.findBy({ id: In(ids) } as unknown as FindOptionsWhere<T>);
  }

  public async update(id: string, changes: Partial<T>): Promise<unknown> {
    return await this.repository.update(
      { id } as unknown as FindOptionsWhere<T>,
      toOmitted(changes) as QueryDeepPartialEntity<T>
    );
  }

  public async updateMany(ids: string[], changes: Partial<T>): Promise<unknown> {
    return await this.repository.update(
      { id: In(ids) } as unknown as FindOptionsWhere<T>,
      toOmitted(changes) as QueryDeepPartialEntity<T>
    );
  }

  /**
   * Deletes one entity of type T by its ID.
   *
   * This method will find one entity of type T in the database by its ID, and if
   * found, it will mark it as deleted. If no entity is found, this method will
   * do nothing.
   *
   * @param id The ID of the entity to delete
   * @returns A promise that resolves to the result of the delete operation
   */
  public async delete(id: string): Promise<unknown> {
    // Finds one entity of type T in the database with the given ID, and if
    // found, it will mark it as deleted. If no entity is found, this method
    // will do nothing.
    return await this.repository.softDelete({ id } as unknown as FindOptionsWhere<T>);
  }

  /**
   * Deletes multiple entities of type T by their IDs.
   *
   * This method will find entities of type T in the database with the given IDs, and
   * if found, it will mark them as deleted. If no entity is found, this method
   * will do nothing for that ID.
   *
   * @param ids The IDs of the entities to delete
   * @returns A promise that resolves to the result of the delete operation for
   *          each entity deleted. The result of the promise is an array of the
   *          results of each delete operation, in the same order as the array
   *          of IDs.
   */
  public async deleteMany(ids: string[]): Promise<unknown> {
    // Finds entities of type T in the database with the given IDs, and if
    // found, it will mark them as deleted. If no entity is found, this method
    // will do nothing for that ID.
    return await this.repository.softDelete({ id: In(ids) } as unknown as FindOptionsWhere<T>);
  }
}
