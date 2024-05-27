import { UserEmail, UserId, UserName, User } from '@src/modules/user/domain';
import { Converter } from '@src/shared/domain';
import { type UserModel } from '../models';

export class UserModelToUserConverter extends Converter<UserModel, User> {
  public transform(source: UserModel): User {
    return new User(new UserId(source.id), new UserName(source.name), new UserEmail(source.email));
  }
}
