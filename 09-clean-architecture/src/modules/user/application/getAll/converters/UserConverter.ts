import { type User } from '@src/modules/user/domain';
import { Converter } from '@src/shared';
import { SingleResponse } from '../SingleResponse';

export class UserConverter extends Converter<User, SingleResponse> {
  public transform(source: User): SingleResponse {
    return new SingleResponse(source.id.value, source.name.value, source.email.value);
  }
}
