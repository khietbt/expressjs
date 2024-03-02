import { isNullOrUndefined } from '../isNullOrUndefined';

describe('Running testsuite on isNullOrUndefined', () => {
  test('Testcase 1: Runs with null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  test('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    expect(isNullOrUndefined(s)).toBe(false);
  });

  test('Testcase 3: Runs with an integer', () => {
    const i = 3;

    expect(isNullOrUndefined(i)).toBe(false);
  });

  test('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    expect(isNullOrUndefined(i)).toBe(false);
  });

  test('Testcase 5: Runs with an undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true);
  });
});
