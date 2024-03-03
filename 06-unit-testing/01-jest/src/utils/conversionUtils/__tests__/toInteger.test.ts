import { InvalidNumberConversionException } from '@src/exceptions';
import { toInteger } from '../toInteger';

describe('Testsuite on toInteger', () => {
  test('Testcase 1. A valid integer', () => {
    expect(toInteger('1')).toBe(1);
  });

  test('Testcase 2. An invalid integer', () => {
    expect(() => toInteger('An invalid integer')).toThrow(InvalidNumberConversionException);
  });
});
