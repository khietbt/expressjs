export class SuperHeroNotFoundException extends Error {
  constructor(id: number) {
    super(`Super hero (id='${id}') not found`);
  }
}
