/**
 * addEvent method
 * 
 * @param {HTMLElement} elem 
 * @param {Function} fn
 * @returns {*} 
 */
export default addEvent = (elem, fn) => elem.addEventListener(fn);