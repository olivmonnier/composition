/**
 * findIndex method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Integer}
 */
export default function findIndex (list: [], fn: (value: never, index: number, array: never[]) => boolean): number {
  return Array.from(list).findIndex(fn);
};