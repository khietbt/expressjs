import { User } from '@src/modules/user/domain';
import { Converter } from '@src/shared';
import { SingleResponse } from '../SingleResponse';

export class UserConverter extends Converter<User, SingleResponse> {
  public to(source: User): SingleResponse {
    return new SingleResponse(source.name.value, source.email.value);
  }

  public from(_target: SingleResponse): User {
    throw new Error('Method not implemented.');
  }
}
