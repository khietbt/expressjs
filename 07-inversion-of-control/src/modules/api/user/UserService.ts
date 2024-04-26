import { Service } from 'typedi';
import { UserEntity } from './UserEntity';
import { UserRepository } from './UserRepository';

@Service()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async getAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
}
