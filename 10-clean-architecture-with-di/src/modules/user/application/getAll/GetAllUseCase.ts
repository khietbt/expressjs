import { type IUseCase } from '@src/shared';
import { delay, inject, injectable } from 'tsyringe';
import { type IUserRepository } from '../../domain';
import { UserRepository } from '../../infrastructure';
import { type GetAllRequest } from './GetAllRequest';
import { type GetAllResponse } from './GetAllResponse';
import { UserConverter } from './converters';

@injectable()
export class GetAllUseCase implements IUseCase<GetAllRequest, GetAllResponse> {
  public constructor(@inject(delay(() => UserRepository)) private readonly userRepository: IUserRepository) {}

  public async execute(_request?: GetAllRequest): Promise<GetAllResponse> {
    const users = await this.userRepository.getAll();

    return users.map((u) => new UserConverter().transform(u));
  }
}
