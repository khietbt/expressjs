import { SuperHeroService } from '@src/api/services/interfaces';

export class AvengersService implements SuperHeroService {
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
      throw new Error('Not found');
    }

    return member;
  }
}
