/**
 * @description
 * can be used to get the latest date.
 * @example
 * const array = [
 *   new Date(2017, 4, 13),
 *   new Date(2018, 2, 12),
 *   new Date(2016, 0, 10),
 *   new Date(2016, 0, 9)
 * ];
 * maxDate(array); // 2018-03-11T22:00:00.000Z
 */
export function maxDate(dates: Date[]): Date {
  return new Date(
    Math.max.apply(
      null,
      dates.map((d) => d.getTime())
    )
  );
}
