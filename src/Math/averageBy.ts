type CallbackFn = (value: any) => string | number;

/**
 * @description
 * returns the average of an array after initially doing the mapping of each element to a value using a given function.
 * @example
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
 */
export function averageBy(
  arr: Array<any>,
  fn: string | number | CallbackFn
): number {
  return (
    arr
      .map(typeof fn === "function" ? fn : val => val[fn])
      .reduce((acc, val) => acc + val, 0) / arr.length
  );
}
