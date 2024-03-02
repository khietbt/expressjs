import assert from 'assert';
import { isUndefined } from '../isUndefined';

describe('Running testsuite on isUndefined', () => {
  it('Testcase 1: Runs with null', () => {
    assert.equal(isUndefined(null), false);
  });

  it('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    assert.equal(isUndefined(s), false);
  });

  it('Testcase 3: Runs with an integer', () => {
    const i = 3;

    assert.equal(isUndefined(i), false);
  });

  it('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    assert.equal(isUndefined(i), false);
  });

  it('Testcase 5: Runs with an undefined', () => {
    assert.equal(isUndefined(undefined), true);
  });
});
