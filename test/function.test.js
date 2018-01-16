const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const { compose, curry, flip, pipe } = require('../src/functions');

describe('Function', () => {  
  describe('compose method', () => {
    it('should run methods reversed', (done) => {
      const addCharA = (str) => str + 'A';
      const addCharB = (str) => str + 'B';
      const f = compose(addCharA, addCharB);

      expect(typeof f).to.be.equal('function');
      expect(f('foo')).to.be.equal('fooBA');
      done();
    });
  });

  describe('curry method', () => {
    it('should return a function to invoke', (done) => {
      const addOne = (a, b) => a + b + 1;
      const f = curry(addOne);

      expect(typeof f).to.be.equal('function');
      expect(f(2)(1)).to.be.equal(4);
      done();
    });
  });

  describe('flip method', () => {
    it('should invoke function with arguments reversed', (done) => {
      const f = flip((a, b) => a + b);

      expect(typeof f).to.be.equal('function');
      expect(f('foo', 'bar')).to.be.equal('barfoo');
      done();
    });
  });

  describe('pipe method', () => {
    it('should run methods', (done) => {
      const addCharA = (str) => str + 'A';
      const addCharB = (str) => str + 'B';
      const f = pipe(addCharA, addCharB);

      expect(typeof f).to.be.equal('function');
      expect(f('foo')).to.be.equal('fooAB');
      done();
    });
  });
});
