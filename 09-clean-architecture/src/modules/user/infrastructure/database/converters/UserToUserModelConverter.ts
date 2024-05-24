import { type User } from '@src/modules/user/domain';
import { Converter } from '@src/shared/domain';
import { UserModel } from '../models';

export class UserToUserModelConverter extends Converter<User, UserModel> {
  public transform(source: User): UserModel {
    const target = new UserModel();

    target.id = source.id.value;
    target.name = source.name.value;
    target.email = source.email.value;

    return target;
  }
}
