import { BaseEntity, Omitted } from '@src/libs/entities';
import { DeepPartial, FindOptionsWhere, In, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class EntityService<T extends BaseEntity> {
  public constructor(protected readonly repository: Repository<T>) { }

  /**
   * Creates a new entity and saves it to the database
   * @param t The entity to be created. The ID property will be ignored
   */
  public async create(t: Omitted<Partial<T>>): Promise<T> {
    // The save method of the repository takes a partial entity, which means
    // that the ID property will be ignored. This is what we want, since we
    // don't want to specify the ID manually
    return await this.repository.save(t as DeepPartial<T>);
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
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  public async getMany(ids: string[]): Promise<T[]> {
    return this.repository.findBy({ id: In(ids) } as FindOptionsWhere<T>);
  }

  public async update(id: string, changes: Omitted<Partial<T>>): Promise<unknown> {
    return await this.repository.update({ id } as FindOptionsWhere<T>, changes as QueryDeepPartialEntity<T>);
  }

  public async updateMany(ids: string[], changes: Omitted<Partial<T>>): Promise<unknown> {
    return await this.repository.update({ id: In(ids) } as FindOptionsWhere<T>, changes as QueryDeepPartialEntity<T>);
  }

  
  public async delete(id: string): Promise<unknown> {
    return await this.repository.softDelete({ id } as FindOptionsWhere<T>);
  }

  public async deleteMany(ids: string[]): Promise<unknown> {
    return await this.repository.softDelete({ id: In(ids) } as FindOptionsWhere<T>);
  }
}