import { SuperHeroModel } from '@src/models/SuperHeroModel';
import { AvengerRepository } from '@src/repositories/AvengerRepository';
import { ObjectUtils } from '@src/utils';

import { SuperHeroService } from './SuperHeroService';

export class AvengerService implements SuperHeroService {
  private readonly avengerRepository: AvengerRepository;

  public constructor() {
    this.avengerRepository = new AvengerRepository();
  }

  async getAll(): Promise<SuperHeroModel[]> {
    return this.avengerRepository.getAll();
  }

  async getById(id: number): Promise<SuperHeroModel> {
    const member = await this.avengerRepository.getById(id);

    if (ObjectUtils.isUndefined(member)) {
      throw new Error(`Avenger (id=${id}) not found`);
    }

    return member!;
  }
}
