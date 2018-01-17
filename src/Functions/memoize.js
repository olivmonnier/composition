/**
 * memoize method
 * 
 * @param {Function} fn
 * @returns {*}
 */
export default memoize = fn => {
  let cache = {};
  return (...args) => {
    let strX = JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  }
}