import { Service } from 'typedi';

@Service()
export class SuperHeroService {
  async getAll() {
    return [
      { id: 1, name: 'Iron Man' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Wasp' },
      { id: 4, name: 'Ant Man' },
      { id: 5, name: 'Hulk' }
    ];
  }
}
