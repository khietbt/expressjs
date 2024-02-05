export interface ApiController {
  getAll(): Promise<any>;

  getById(id: number): Promise<any>;
}
