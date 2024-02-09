export class AvengerNotFoundException extends Error {
  constructor(id: number) {
    super(`Avenger (id='${id}') not found`);
  }
}
