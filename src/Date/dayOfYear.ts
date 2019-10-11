/**
 * @description
 * gets the day of the year from a Date object.
 * @example
 * dayOfYear(new Date()); // 272
 */
export function dayOfYear(date: Date): number {
  const start = +new Date(date.getFullYear(), 0, 0);
  const elapsed = +date - start;

  return Math.floor(elapsed / 1000 / 60 / 60 / 24);
}
