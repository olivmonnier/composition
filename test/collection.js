const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const filter = require('../src/collection').filter;
const isEmpty = require('../src/collection').isEmpty;
const join = require('../src/collection').join;
const map = require('../src/collection').map;
const sort = require('../src/collection').sort;
const tail = require('../src/collection').tail;

describe('filter method', () => {
  it('should filtered an array', (done) => {
    const list = [1, 2, 3, 4];
    const f = filter((a) => a > 2);

    assert.isArray(f(list));
    expect(f(list)).to.deep.equal([3, 4]);
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

    expect(typeof join('-', list)).to.be.equal('string');
    expect(join('-', list)).to.be.equal('foo-bar');
    done();
  });
});

describe('map method', () => {
  it('should return an array mapped', (done) => {
    const list = [1, 2];
    const f = map((a) => a + 1);

    assert.isArray(f(list));
    expect(f(list)).to.deep.equal([2, 3]);
    done();
  });
});

describe('sort method', () => {
  it('should return an array sorted', (done) => {
    const list = [1, 2, 3, 4];
    const f = sort((a, b) => a < b);

    assert.isArray(f(list));
    expect(f(list)).to.deep.equal([4, 3, 2, 1]);
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
