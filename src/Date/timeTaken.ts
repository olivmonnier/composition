/**
 * @description
 * can be used to find out the time it takes to execute a function.
 * @example
 * timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
 */
export function timeTaken(callback: Function): any {
  console.time("timeTaken");
  const r = callback();
  console.timeEnd("timeTaken");
  return r;
}
