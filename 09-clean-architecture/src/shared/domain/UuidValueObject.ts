import { v4, validate } from 'uuid';
import { StringValueObject } from './StringValueObject';
import { InvalidParameterException } from './exceptions';

export class UuidValueObject extends StringValueObject {
  public constructor(value: string) {
    super(value);

    this.ensureValueIsValid();
  }

  public static random(): UuidValueObject {
    return new UuidValueObject(v4());
  }

  private ensureValueIsValid(): void {
    if (!validate(this.value)) {
      throw new InvalidParameterException(`<${this.constructor.name}> does not allow the value <${this.value}>`);
    }
  }
}
