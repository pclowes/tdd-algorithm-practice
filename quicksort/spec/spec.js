var yourCode = require('../src');

describe("quickSort", function() {

  it("sorts an array", function() {
    expect(yourCode.quickSort([1,4,3,7,4,2])).toEqual([1,2,3,4,4,7]);
  });

});
