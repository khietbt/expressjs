import { Entity, type Nullable } from '@src/shared/domain';
import { type UserEmail } from './UserEmail';
import { type UserId } from './UserId';
import { type UserName } from './UserName';

export class User extends Entity {
  public constructor(
    public id: Nullable<UserId>,
    public name: UserName,
    public email: UserEmail
  ) {
    super();
  }
}
