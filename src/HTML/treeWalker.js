/**
 * treeWalker method
 * 
 * @param {HTMLElement} elem 
 * @param {Object} filter 
 * @returns {TreeWalker}
 */
export default treeWalker = (elem, filter) => document.createTreeWalker(elem, NodeFilter.SHOW_ELEMENT, filter, false);