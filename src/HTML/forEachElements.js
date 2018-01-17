import from from '../Collections/from'
import getElements from './getElements'

/**
 * forEachElements method
 * 
 * @param {String} selector 
 * @param {Function} fn 
 * @returns {*}
 */
export default forEachElements = (selector, fn) => from(getElements(selector)).forEach(elem => fn(elem));