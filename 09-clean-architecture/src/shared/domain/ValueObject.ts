import { deepEquals } from '@mfederczuk/deeptools';
import { type Nullable } from './Nullable';

export abstract class ValueObject<T> {
  public constructor(public readonly value: T) {}

  public toString(): string {
    return JSON.stringify(this.value);
  }

  public equals(other: Nullable<ValueObject<T>>): boolean {
    return (
      other !== null &&
      other !== undefined &&
      other.constructor.name === this.constructor.name &&
      deepEquals(this, other)
    );
  }
}
