import { keyBy } from '../keyBy';

describe('Testsuite of keyBy', () => {
  it('should transform an array into an object based on a key extractor and a value mapper', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const result = keyBy(
      users,
      (user) => user.id,
      (user) => user.name.toUpperCase()
    );

    expect(result).toEqual({
      1: 'ALICE',
      2: 'BOB',
      3: 'CHARLIE'
    });
  });

  it('should use the identity function as the default value mapper', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    const result = keyBy(users, (user) => user.id);

    expect(result).toEqual({
      1: { id: 1, name: 'Alice' },
      2: { id: 2, name: 'Bob' },
      3: { id: 3, name: 'Charlie' }
    });
  });
});
