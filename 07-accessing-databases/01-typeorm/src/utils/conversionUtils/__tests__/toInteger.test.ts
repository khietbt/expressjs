import assert from 'assert';
import { toInteger } from '../toInteger';
import { InvalidNumberConversionException } from '@src/exceptions';

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
