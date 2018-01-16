import { from } from './collections';

/**
 * DOM module
 * @module dom
 */

/**
 * addClass method
 * 
 * @param {HTMLElement} elem 
 * @param {String} className 
 * @returns {*}
 */
export const addClass = (elem, className) => elem.classList.add(className);

/**
 * addEvent method
 * 
 * @param {HTMLElement} elem 
 * @param {Function} fn
 * @returns {*} 
 */
export const addEvent = (elem, fn) => elem.addEventListener(fn);

/**
 * append method
 * 
 * @param {HTMLElement} elem 
 * @param {HTMLElement} parent 
 * @returns {*}
 */
export const append = (elem, parent) => parent.appendChild(elem);

/**
 * createElement method
 * 
 * @param {String} tag 
 * @returns {HTMLElement}
 */
export const createElement = tag => document.createElement(tag);

/**
 * forEachElements method
 * 
 * @param {String} selector 
 * @param {Function} fn 
 * @returns {*}
 */
export const forEachElements = (selector, fn) => from(getElements(selector)).forEach(elem => fn(elem));

/**
 * getElement method
 * 
 * @param {String} selector 
 * @returns {HTMLElement}
 */
export const getElement = selector => document.querySelector(selector);

/**
 * getElements method
 * 
 * @param {String} selector 
 * @returns {Array<HTMLElement>}
 */
export const getElements = selector => document.querySelectorAll(selector);

/**
 * hasClass method
 * 
 * @param {HTMLElement} elem 
 * @param {String} className 
 * @returns {Boolean}
 */
export const hasClass = (elem, className) => elem.classList.contains(className);

/**
 * removeClass method 
 * 
 * @param {HTMLElement} elem 
 * @param {String} className 
 * @returns {*}
 */
export const removeClass = (elem, className) => elem.classList.remove(className);

/**
 * removeElement method
 * 
 * @param {HTMLElement} elem
 * @returns {*} 
 */
export const removeElement = elem => elem.parentNode.removeChild(elem);

/**
 * setAttribute method
 * 
 * @param {HTMLElement} elem 
 * @param {Array} args 
 * @returns {*}
 */
export const setAttribute = (elem, ...args) => elem.setAttribute(...args);

/**
 * toggleClass method
 * 
 * @param {HTMLElement} elem 
 * @param {String} className 
 * @returns {*}
 */
export const toggleClass = (elem, className) => elem.classList.toggle(className);

/**
 * treeWalker method
 * 
 * @param {HTMLElement} elem 
 * @param {Object} filter 
 * @returns {TreeWalker}
 */
export const treeWalker = (elem, filter) => document.createTreeWalker(elem, NodeFilter.SHOW_ELEMENT, filter, false);