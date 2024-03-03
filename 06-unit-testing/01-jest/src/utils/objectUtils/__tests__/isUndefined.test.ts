import { isUndefined } from '../isUndefined';

describe('Testsuite on isUndefined', () => {
  test('Testcase 1: Runs with null', () => {
    expect(isUndefined(null)).toBe(false);
  });

  test('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    expect(isUndefined(s)).toBe(false);
  });

  test('Testcase 3: Runs with an integer', () => {
    const i = 3;

    expect(isUndefined(i)).toBe(false);
  });

  test('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    expect(isUndefined(i)).toBe(false);
  });

  test('Testcase 5: Runs with an undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
});
