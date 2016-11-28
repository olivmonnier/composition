const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const curry = fn => (...args) => fn.bind(null, ...args);

const flip = curry((fn, ...args) => fn.apply(this, args.reverse()));

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

module.exports = {
  compose,
  curry,
  flip,
  pipe
}
