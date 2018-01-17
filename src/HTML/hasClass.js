/**
 * hasClass method
 * 
 * @param {HTMLElement} elem 
 * @param {String} className 
 * @returns {Boolean}
 */
export default hasClass = (elem, className) => elem.classList.contains(className);