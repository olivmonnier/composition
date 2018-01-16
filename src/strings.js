import { curry } from './functions';
import { tail } from './collections';
import { createElement } from './dom';

/**
 * Strings module
 * @module strings
 */

export const capitalize = str => toUpperCase(s[0]) + toLowercase(tail(s));

export const endingWith = (str, strMatch) => {
  const regex = new RegExp(`${strMatch}$`)
  return regex.test(str)
}

export const hasSpaces = match(/\s+/g);

export const head = str => str[0];

export const match = (str, what) => str.match(what);

export const replace = (str, what, replacement) => str.replace(what, replacement);

export const split = splitOn => str => str.split(splitOn);

export const startingWith = (str, strMatch) => {
  const regex = new RegExp(`^${strMatch}`)
  return regex.test(str)
}

export const toLowerCase = str => str.toLowerCase();

export const toUpperCase = str => str.toUpperCase();

export const trim = str => str.replace(/^\s*|\s*$/g, '');

export const toHtml = str => {
  const parser = new DOMParser();
  return parser.parseFromString(str, 'text/xml');
}