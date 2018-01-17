/**
 * once method
 * 
 * @param {Function} fn
 * @returns {*} 
 */
export default once = fn => {
  let done = false;
  let result;

  return (...args) => {
    if (!done) {
      done = true;
      result = fn(...args)
    }

    return result;
  }
}