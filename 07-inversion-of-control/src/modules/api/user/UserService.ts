import { Service } from 'typedi';
import { UserEntity } from './UserEntity';
import { UserRepository } from './UserRepository';
import { BaseEntityService } from '@src/libs';

@Service()
export class UserService extends BaseEntityService<UserEntity> {
  public constructor(readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
