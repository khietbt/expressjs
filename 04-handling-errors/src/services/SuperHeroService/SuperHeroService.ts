import { SuperHeroModel } from '@src/models';

export interface SuperHeroService {
  getAll(): Promise<SuperHeroModel[]>;

  getById(id: number): Promise<SuperHeroModel>;
}
