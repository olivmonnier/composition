const split = splitOn => str => str.split(splitOn);

const toLowerCase = str => str.toLowerCase();

const toUpperCase = str => str.toUpperCase();

const trim = str => str.replace(/^\s*|\s*$/g, '');

module.exports = {
  split,
  toLowerCase,
  toUpperCase,
  trim
}
