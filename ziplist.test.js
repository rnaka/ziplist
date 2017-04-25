/* eslint-env mocha, chai */
/* global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('ZipList', function () {
  const testList1 = [1, 2, 3];
  const testList2 = ['a', 'b', 'c'];

  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.eql([1, 'a', 2, 'b', 3, 'c']);
    });
  });

});

describe('ZipListTheSimpleWay', function () {
  const testList1 = [1, 2, 3];
  const testList2 = ['a', 'b', 'c'];

  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.eql([1, 'a', 2, 'b', 3, 'c']);
    });
  });

});