import { ISuperHeroService } from '@services/ISuperHeroService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class Avengers2Service implements ISuperHeroService {
  async getAll(): Promise<any> {
    return [
      { id: 1, name: 'Iron Man 2' },
      { id: 2, name: 'Thor 2' },
      { id: 3, name: 'Wasp 2' },
      { id: 4, name: 'Ant Man 2' },
      { id: 5, name: 'Hulk 2' }
    ];
  }
}
