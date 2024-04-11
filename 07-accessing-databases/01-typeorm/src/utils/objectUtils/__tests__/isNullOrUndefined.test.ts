import assert from 'assert';
import { isNullOrUndefined } from '../isNullOrUndefined';

describe('Testsuite on isNullOrUndefined', () => {
  it('Testcase 1: Runs with null', () => {
    assert.equal(isNullOrUndefined(null), true);
  });

  it('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    assert.equal(isNullOrUndefined(s), false);
  });

  it('Testcase 3: Runs with an integer', () => {
    const i = 3;

    assert.equal(isNullOrUndefined(i), false);
  });

  it('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    assert.equal(isNullOrUndefined(i), false);
  });

  it('Testcase 5: Runs with an undefined', () => {
    assert.equal(isNullOrUndefined(undefined), true);
  });
});
