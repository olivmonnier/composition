const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const compose = require('../src/function').compose;
const curry = require('../src/function').curry;

describe('compose method', () => {
  it('should run methods', (done) => {
    const addOne = (a) => a + 1;
    const addTwo = (b) => b + 2;
    const f = compose(addOne, addTwo);

    expect(f(0)).to.be.equal(3);
    done();
  });
});

describe('curry method', () => {
  it('should invoke function with arguments passed', (done) => {

  });
});
