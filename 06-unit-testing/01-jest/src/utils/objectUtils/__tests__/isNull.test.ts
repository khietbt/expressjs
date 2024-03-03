import { isNull } from '../isNull';

describe('Testsuite on isNull', () => {
  it('Testcase 1: Runs with null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    expect(isNull(s)).toBe(false);
  });

  it('Testcase 3: Runs with an integer', () => {
    const i = 3;

    expect(isNull(i)).toBe(false);
  });

  it('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    expect(isNull(i)).toBe(false);
  });

  it('Testcase 5: Runs with an undefined', () => {
    expect(isNull(undefined)).toBe(false);
  });
});
