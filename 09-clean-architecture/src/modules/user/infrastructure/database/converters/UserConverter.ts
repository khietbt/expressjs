import { User, UserEmail, UserId, UserName } from '@src/modules/user/domain';
import { Converter } from '@src/shared/domain';
import { UserModel } from '../models';

export class UserConverter extends Converter<User, UserModel> {
  public to(source: User): UserModel {
    const target = new UserModel();

    if (source.id != null) {
      target.id = source.id.value;
    }

    target.name = source.name.value;
    target.email = source.email.value;

    return target;
  }

  public from(target: UserModel): User {
    return new User(new UserId(target.id), new UserName(target.name), new UserEmail(target.email));
  }
}
