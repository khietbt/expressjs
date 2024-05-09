import { BaseService } from '@topdir/src/libs';
import { UserRepository } from './UserRepository';
import { type UserModel } from './UserModel';
import { inject, delay, injectable } from 'tsyringe';

@injectable()
export class UserService extends BaseService<UserModel> {
  public constructor(@inject(delay(() => UserRepository)) readonly repository: UserRepository) {
    super(repository);
  }
}
