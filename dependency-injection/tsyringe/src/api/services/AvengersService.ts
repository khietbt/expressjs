import { ISuperHeroService } from '@services/ISuperHeroService';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AvengersService implements ISuperHeroService {
  async getAll(): Promise<any> {
    return [
      { id: 1, name: 'Iron Man' },
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Wasp' },
      { id: 4, name: 'Ant Man' },
      { id: 5, name: 'Hulk' }
    ];
  }
}
