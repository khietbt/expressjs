import { type IUseCase } from '@src/shared';
import { delay, inject, injectable } from 'tsyringe';
import { UserId, UserNotFoundException, type IUserRepository } from '../../domain';
import { UserRepository } from '../../infrastructure';
import { type GetOneRequest } from './GetOneRequest';
import { type GetOneResponse } from './GetOneResponse';

@injectable()
export class GetOneUseCase implements IUseCase<GetOneRequest, GetOneResponse> {
  public constructor(@inject(delay(() => UserRepository)) private readonly userRepository: IUserRepository) {}

  public async execute(request: GetOneRequest): Promise<GetOneResponse> {
    const user = await this.userRepository.getOne(new UserId(request.id));

    if (user == null) {
      throw new UserNotFoundException(request.id);
    }

    return {
      id: user.id?.value ?? '',
      name: user.name.value,
      email: user.email.value
    };
  }
}
