import { Service } from 'typedi';
import { UserEntity } from './UserEntity';
import { UserRepository } from './UserRepository';
import { EntityService } from '@src/services';

@Service()
export class UserService extends EntityService<UserEntity> {
  public constructor(readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
