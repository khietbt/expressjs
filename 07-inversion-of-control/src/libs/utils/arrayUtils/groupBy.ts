/**
 * Groups elements of an array by a key extracted from each element.
 *
 * @template T The type of the elements in the original array.
 * @template V The type of the elements in the grouped array. Defaults to T.
 * @param source The array of elements to group.
 * @param keyMapper A function that extracts the key from an element.
 * @param valueMapper A function that maps an element to the type of the grouped array. Defaults to the identity function.
 * @returns An object with the keys being the unique keys from the original array and the values being arrays of elements
 * that share that key.
 */
export function groupBy<T, V = T>(
  source: T[],
  keyMapper: (t: T) => PropertyKey,
  valueMapper: (t: T) => V = (t: T) => t as unknown as V
): Record<PropertyKey, V[]> {
  /**
   * Groups elements of an array into an object with keys corresponding to the result of the keyMapper
   * function and values being arrays of elements that share that key.
   *
   * @param accumulator The object that is being built up by this reduce function.
   * @param currentValue The current element being processed by the reduce function.
   * @returns The modified accumulator object.
   */
  return source.reduce((accumulator: Record<PropertyKey, V[]>, t: T) => {
    const key: PropertyKey = keyMapper(t);
    const value: V = valueMapper(t);

    (accumulator[key] = accumulator[key] ?? []).push(value);

    return accumulator;
  }, {});
}
