import { groupBy } from '../groupBy';

describe('Testsutie of groupBy', () => {
  it('should group elements by a numeric key', () => {
    const original = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' }
    ];

    expect(groupBy(original, (item) => item.id)).toEqual({
      1: [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Charlie' }
      ],
      2: [{ id: 2, name: 'Bob' }]
    });
  });

  it('should group elements by a string key', () => {
    const original = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 30 }
    ];

    expect(groupBy(original, (item) => item.category)).toEqual({
      A: [
        { category: 'A', value: 10 },
        { category: 'A', value: 30 }
      ],
      B: [{ category: 'B', value: 20 }]
    });
  });

  it('should allow custom value mapping', () => {
    const original = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' }
    ];

    expect(
      groupBy(
        original,
        (item) => item.id,
        (item) => item.name
      )
    ).toEqual({
      1: ['Alice', 'Charlie'],
      2: ['Bob']
    });
  });
});
