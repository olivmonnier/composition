/**
 * @description
 * can be used to run an array of promises in series.
 * @example
 * const delay = d => new Promise(r => setTimeout(r, d));
 * runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
 */
export function runPromisesInSeries(
  ps: Array<(value: any) => Promise<any>>
): Promise<any> {
  return ps.reduce((p, next) => p.then(next), Promise.resolve());
}
