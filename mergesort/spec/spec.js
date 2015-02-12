var yourCode = require('../src');

describe("mergeSort", function() {

  it("sorts an array", function() {
    expect(yourCode.mergeSort([1,4,3,7,4,2,9,8,7])).toEqual([1,2,3,4,4,7,7,8,9]);
  });

});
