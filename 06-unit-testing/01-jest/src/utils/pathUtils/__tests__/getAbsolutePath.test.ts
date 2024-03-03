import { getAbsolutePath } from '../getAbsolutePath';

describe('Testsuite on getAbsolutePath', () => {
  test('Testcase 1. Runs with a relative path starting without /', () => {
    const relativePath = 'path/to/file.ts';

    expect(getAbsolutePath(relativePath)).toBe(`${process.cwd()}/${relativePath}`);
  });

  test('Testcase 2. Runs with a relative path starting with /', () => {
    const relativePath = '/path/to/file.ts';

    expect(getAbsolutePath(relativePath)).toBe(`${process.cwd()}${relativePath}`);
  });
});
