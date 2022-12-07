/**
 * @description
 * can be used to find the difference in days between two dates.
 * @example
 * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
 */
export function getDaysDiffBetweenDates(
  dateInitial: Date,
  dateFinal: Date
): number {
  const dInitial = +dateInitial;
  const dFinal = +dateFinal;
  return (dInitial - dFinal) / (1000 * 3600 * 24);
}
