/**
 * filter method
 * 
 * @param {Array} list
 * @param {Function} fn
 * @returns {Array}
 */
export default function filter (list: [], fn: (value: never, index: number, array: never[]) => any): any[] {
  return Array.from(list).filter(fn);
};