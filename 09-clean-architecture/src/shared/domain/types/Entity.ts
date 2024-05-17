export abstract class Entity {
  public equals(other: Entity): boolean {
    return other !== null && other !== undefined && this.toString() === other.toString();
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
