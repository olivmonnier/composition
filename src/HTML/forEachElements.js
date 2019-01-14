import getElements from './getElements';
import each from '../Collections/each';

/**
 * forEachElements method
 * 
 * @param {String} selector 
 * @param {Function} fn 
 * @returns {*}
 */
export default forEachElements = (selector, fn) => each(getElements(selector), fn);