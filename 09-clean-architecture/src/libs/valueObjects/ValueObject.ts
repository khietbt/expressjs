import { InvalidParameterException } from '../exceptions';
import { type Nullable } from '../types';
import { isNullOrUndefined } from '../utils';

export class ValueObject<T> {
  public constructor(public value: T) {
    if (isNullOrUndefined(value)) {
      throw new InvalidParameterException(`'value' must be defined`);
    }
  }

  public toString(): string {
    return JSON.stringify(this.value);
  }

  public equals(other: Nullable<ValueObject<T>>): boolean {
    return (
      other !== null &&
      other !== undefined &&
      this.constructor.name === other.constructor.name &&
      this.toString() === other.toString()
    );
  }
}
