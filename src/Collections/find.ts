/**
 * find method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {*}
 */
export default function find (list: [], fn: (value: never, index: number, array: never[]) => any): any {
  return Array.from(list).find(fn);
};