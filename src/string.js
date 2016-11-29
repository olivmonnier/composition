const curry = require('./function').curry;
const tail = require('./collection').tail;

const capitalize = str => toUpperCase(s[0]) + toLowercase(tail(s));

const hasSpaces = match(/\s+/g);

const head = str => str[0];

const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const split = splitOn => str => str.split(splitOn);

const toLowerCase = str => str.toLowerCase();

const toUpperCase = str => str.toUpperCase();

const trim = str => str.replace(/^\s*|\s*$/g, '');

module.exports = {
  capitalize,
  hasSpaces,
  head,
  match,
  replace,
  split,
  toLowerCase,
  toUpperCase,
  trim
}
