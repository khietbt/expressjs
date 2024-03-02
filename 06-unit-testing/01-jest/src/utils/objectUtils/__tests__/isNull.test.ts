import { isNull } from '../isNull';

describe('Running testsuite on isNull', () => {
  test('Testcase 1: Runs with null', () => {
    expect(isNull(null)).toBe(true);
  });

  test('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    expect(isNull(s)).toBe(false);
  });

  test('Testcase 3: Runs with an integer', () => {
    const i = 3;

    expect(isNull(i)).toBe(false);
  });

  test('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    expect(isNull(i)).toBe(false);
  });

  test('Testcase 5: Runs with an undefined', () => {
    expect(isNull(undefined)).toBe(false);
  });
});
