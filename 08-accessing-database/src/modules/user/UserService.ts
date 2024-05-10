import { BaseService } from '@src/libs';
import { delay, inject, injectable } from 'tsyringe';
import { type UserModel } from './UserModel';
import { UserRepository } from './UserRepository';

@injectable()
export class UserService extends BaseService<UserModel> {
  public constructor(@inject(delay(() => UserRepository)) readonly repository: UserRepository) {
    super(repository);
  }
}
