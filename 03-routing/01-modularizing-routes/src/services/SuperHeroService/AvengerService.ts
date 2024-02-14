import { AvengerNotFoundException } from '@src/exceptions';

import { SuperHeroService } from './SuperHeroService';

export class AvengerService implements SuperHeroService {
  avengers: any[] = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Thor' },
    { id: 3, name: 'Wasp' },
    { id: 4, name: 'Ant Man' }
  ];

  async getAll(): Promise<any> {
    return this.avengers;
  }

  async getById(id: number): Promise<any> {
    const member = this.avengers.find((h) => h.id === id);

    if (!member) {
      throw new AvengerNotFoundException(id);
    }

    return member;
  }
}
