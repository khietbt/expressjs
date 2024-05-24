import { NotFoundException } from '@src/libs/exceptions';

export class UserNotFoundException extends NotFoundException {
  public constructor(id: string) {
    super(`User (id=${id}) not found`, id);
  }
}
