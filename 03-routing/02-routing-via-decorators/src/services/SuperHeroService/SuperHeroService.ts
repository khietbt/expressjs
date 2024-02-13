export interface SuperHeroService {
  getAll(): Promise<any>;

  getById(id: number): Promise<any>;
}
