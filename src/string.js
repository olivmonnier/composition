/**
 * String module
 * @module string
 */

export const curry = require('./function').curry;

export const tail = require('./collection').tail;

export const div = document.createElement('div');

export const capitalize = str => toUpperCase(s[0]) + toLowercase(tail(s));

export const hasSpaces = match(/\s+/g);

export const head = str => str[0];

export const match = curry((what, str) => str.match(what));

export const replace = curry((what, replacement, str) => str.replace(what, replacement));

export const split = splitOn => str => str.split(splitOn);

export const toLowerCase = str => str.toLowerCase();

export const toUpperCase = str => str.toUpperCase();

export const trim = str => str.replace(/^\s*|\s*$/g, '');

export const toHtml = str => (div.innerHtml = str) && div.childNodes;
