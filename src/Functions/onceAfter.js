/**
 * onceAndAfter method
 * 
 * @param {Function} f
 * @param {Function} g
 * @returns {*}
 */
export default onceAndAfter = (f, g) => {
  let toCall = f;

  return (...args) => {
    let result = toCall(...args);
    toCall = g;
    return result;
  }
}