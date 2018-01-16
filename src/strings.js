import { curry } from './functions';
import { tail } from './collections';
import { createElement } from './dom';

/**
 * Strings module
 * @module strings
 */

/**
 * capitalize method
 * 
 * @param {String} str
 * @returns {String}
 */
export const capitalize = str => toUpperCase(s[0]) + toLowercase(tail(s));

/**
 * endingWith method
 * 
 * @param {String} str 
 * @param {String} strMatch 
 * @returns {Boolean}
 */
export const endingWith = (str, strMatch) => {
  const regex = new RegExp(`${strMatch}$`)
  return regex.test(str)
}

/**
 * hasSpaces method
 * 
 * @param {String} str
 * @returns {Boolean}
 */
export const hasSpaces = str => match(str, /\s+/g);

/**
 * head method
 * 
 * @param {String} str 
 * @returns {String}
 */
export const head = str => str[0];

/**
 * match method
 * 
 * @param {String} str 
 * @param {RegExp} what 
 * @returns {Boolean}
 */
export const match = (str, what) => str.match(what);

/**
 * replace method
 * 
 * @param {String} str 
 * @param {RegExp} what 
 * @param {String} replacement 
 * @returns {String}
 */
export const replace = (str, what, replacement) => str.replace(what, replacement);

/**
 * split method
 * 
 * @param {String} str
 * @param {String} splitOn
 * @returns {Array} 
 */
export const split = (str, splitOn) => str.split(splitOn);

/**
 * startingWith method
 * 
 * @param {String} str 
 * @param {String} strMatch 
 * @returns {Boolean}
 */
export const startingWith = (str, strMatch) => {
  const regex = new RegExp(`^${strMatch}`)
  return regex.test(str)
}

/**
 * toLowerCase method
 * 
 * @param {String} str
 * @returns {String} 
 */
export const toLowerCase = str => str.toLowerCase();

/**
 * toUpperCase method
 * 
 * @param {String} str 
 * @returns {String}
 */
export const toUpperCase = str => str.toUpperCase();

/**
 * trim method
 * 
 * @param {String} str 
 * @returns {String}
 */
export const trim = str => str.replace(/^\s*|\s*$/g, '');

/**
 * toHtml method
 * 
 * @param {String} str 
 * @returns {HTMLElement}
 */
export const toHtml = str => {
  const parser = new DOMParser();
  return parser.parseFromString(str, 'text/xml');
}