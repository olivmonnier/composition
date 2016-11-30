const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Maybe = require('../../src/Functors/Maybe');

describe('Maybe class', () => {
  it('should work', (done) => {
      expect(Maybe.of([1, 2, 3, 4]).chain(list => list.filter(n => n > 2))).to.deep.equal([3, 4]);

      done();
  });
});
