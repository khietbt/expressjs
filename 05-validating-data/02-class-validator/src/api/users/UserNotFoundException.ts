import { NotFoundException } from '@src/exceptions';

export class UserNotFoundException extends NotFoundException {
  public constructor(id: number) {
    super(`User (id=${id}) not found`);
  }
}
