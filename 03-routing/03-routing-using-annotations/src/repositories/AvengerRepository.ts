import { SuperHeroModel } from '@src/models/SuperHeroModel';

export class AvengerRepository {
  private readonly avengers: Record<number, SuperHeroModel>;

  public constructor() {
    this.avengers = {
      1: { id: 1, name: 'Iron Man' },
      2: { id: 2, name: 'Thor' },
      3: { id: 3, name: 'Wasp' },
      4: { id: 4, name: 'Ant Man' }
    };
  }

  async getAll(): Promise<SuperHeroModel[]> {
    return Object.values(this.avengers);
  }

  async getById(id: number): Promise<SuperHeroModel | undefined> {
    return this.avengers[id];
  }
}
