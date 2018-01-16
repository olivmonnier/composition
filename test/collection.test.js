const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const { compact, filter, isEmpty, join, map, sort, tail, toFirst } = require('../src/collections');

describe('Collection', () => {
  describe('compact method', () => {
    it('should filtered an array', (done) => {
      const list = [null, 1, 2, , 3, 4];

      expect(compact(list)).to.deep.equal([1, 2, 3, 4]);
      done();
    });
  });

  describe('filter method', () => {
    it('should filtered an array', (done) => {
      const list = [1, 2, 3, 4];
      const f = (a) => a > 2;

      assert.isArray(filter(list, f));
      expect(filter(list, f)).to.deep.equal([3, 4]);
      done();
    });
  });

  describe('isEmpty method', () => {
    it('should return an boolean', (done) => {
      const list = [];

      expect(typeof isEmpty(list)).to.be.equal('boolean');
      done();
    });
    it('should return true if a list is empty', (done) => {
      const list = [];

      expect(isEmpty(list)).to.be.equal(true);
      done();
    });
  });

  describe('join method', () => {
    it('should return a string', (done) => {
      const list = ['foo', 'bar'];

      expect(typeof join(list, '-')).to.be.equal('string');
      expect(join(list, '-')).to.be.equal('foo-bar');
      done();
    });
  });

  describe('map method', () => {
    it('should return an array mapped', (done) => {
      const list = [1, 2];
      const f = (a) => a + 1;

      assert.isArray(map(list, f));
      expect(map(list, f)).to.deep.equal([2, 3]);
      done();
    });
  });

  describe('sort method', () => {
    it('should return an array sorted', (done) => {
      const list = [1, 2, 3, 4];
      const f = (a, b) => a < b;

      assert.isArray(sort(list, f));
      expect(sort(list, f)).to.deep.equal([4, 3, 2, 1]);
      done();
    });
  });

  describe('tail method', () => {
    it('should return an array tailed', (done) => {
      const list = [1, 2, 3];

      assert.isArray(tail(list));
      expect(tail(list)).to.deep.equal([2, 3]);
      done();
    });
  });

  describe('toFirst method', () => {
    it('should return an array with in first index the old index', (done) => {
      const list = [1, 2, 3, 4];

      assert.isArray(toFirst(list, 2));
      done();
    })
  })
});
