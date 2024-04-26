import { Service } from 'typedi';
import { UserEntity } from './UserEntity';
import { UserRepository } from './UserRepository';
import { UserCreationRequest } from './UserCreationRequest';
import { In } from 'typeorm';

@Service()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  public async create(userCreationRequest: UserCreationRequest): Promise<unknown> {
    return await this.userRepository.save(userCreationRequest as Partial<UserEntity>);
  }

  public async delete(id: string): Promise<unknown> {
    return await this.userRepository.softDelete({ id });
  }

  public async getOne(id: string): Promise<unknown> {
    return await this.userRepository.findOneBy({ id });
  }

  public async getMany(ids: string[]): Promise<unknown> {
    return await this.userRepository.findBy({ id: In(ids) });
  }

  public async deleteMany(ids: string[]): Promise<unknown> {
    return await this.userRepository.softDelete({ id: In(ids) });
  }
}
