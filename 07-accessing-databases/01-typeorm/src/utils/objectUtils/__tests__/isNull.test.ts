import assert from 'assert';
import { isNull } from '../isNull';

describe('Testsuite on isNull', () => {
  it('Testcase 1: Runs with null', () => {
    assert.equal(isNull(null), true);
  });

  it('Testcase 2: Runs with a string', () => {
    const s = 'Hello world!';

    assert.equal(isNull(s), false);
  });

  it('Testcase 3: Runs with an integer', () => {
    const i = 3;

    assert.equal(isNull(i), false);
  });

  it('Testcase 4: Runs with a float', () => {
    const i = 4.4;

    assert.equal(isNull(i), false);
  });

  it('Testcase 5: Runs with an undefined', () => {
    assert.equal(isNull(undefined), false);
  });
});
