import assert from 'assert';
import { InvalidNumberConversionException } from '../InvalidNumberConversionException';
import { toInteger } from '../toInteger';

describe('Testsuite on toInteger', () => {
  it('Testcase 1. Runs with a valid number', () => {
    assert.equal(toInteger('2'), 2);
  });

  it('Testcase 2. Runs with a invalid number', () => {
    const invalidNumber = 'An invalid number';
    const expected = new InvalidNumberConversionException(invalidNumber);

    assert.throws(() => toInteger(invalidNumber), expected);
  });
});
