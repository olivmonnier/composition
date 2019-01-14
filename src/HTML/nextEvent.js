/**
 * nextEvent method
 * 
 * @param {HTMLElement} elem 
 * @param {String} name
 * @returns {*} 
 */

export default nextEvent = (elem, name) => {
  return new Promise(resolve => {
    elem.addEventListener(name, resolve, { once: true });
  });
}