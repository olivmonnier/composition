/**
 * toHtml method
 * 
 * @param {String} str 
 * @returns {HTMLElement}
 */
export default toHtml = str => {
  const parser = new DOMParser();
  return parser.parseFromString(str, 'text/xml');
}