import { InvalidParameterException } from '@src/libs/exceptions';
import { type Nullable } from './Nullable';

export abstract class ValueObject<T> {
  public constructor(public readonly value: T) {
    this.ensureValueIsDefined();
  }

  public toString(): string {
    return JSON.stringify(this.value);
  }

  public equals(other: Nullable<ValueObject<T>>): boolean {
    return (
      other !== null &&
      other !== undefined &&
      other.constructor.name === this.constructor.name &&
      this.toString() === other.toString()
    );
  }

  private ensureValueIsDefined(): void {
    if (this.value === null || this.value === undefined) {
      throw new InvalidParameterException(`'value' must be defined`);
    }
  }
}
