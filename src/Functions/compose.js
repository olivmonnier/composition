/**
 * compose method
 * 
 * @param {Array} fns
 * @returns {Function}
 */
export default compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);