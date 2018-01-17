/**
 * pipe method
 * 
 * @param {Array} fns
 * @returns {Function}
 */
export default pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);