var yourCode = require('../roundRobin_object');

describe('first', function() {

  it('returns the same array for 1 round', function() {
    expect(yourCode.recursiveArray([1,2,3,4,5,6,7,8,9],1)).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('shifts the array one position, starting at the second entry, 2 rounds', function() {
    expect(yourCode.recursiveArray([1,2,3,4,5,6,7,8,9],2)).toEqual([1,9,2,3,4,5,6,7,8]);
  });

  it('shifts the array round - 1 positions, starting at the second entry', function() {
    expect(yourCode.recursiveArray([1,2,3,4,5,6,7,8,9],4)).toEqual([1,7,8,9,2,3,4,5,6]);
  });

  it('breaks if the numbers are not contiguous', function() {
    expect(yourCode.recursiveArray([1,2,3,4,5,6,7,8,9],4)).toEqual([1,7,8,9,2,3,4,5,6]);
  });

  it("can calculate pairing for an ordered bracket system", function(){
    var input = {
      1: "Bears",
      2: "Broncos",
      3: "Falcons",
      4: "Seahawks"
    }

    var expected = [["Bears", "Seahawks"], ["Broncos", "Falcons"]];
    expect(yourCode.bracket(input)).toEqual(expected);
  });

  it("can calculate pairing for an uneven bracket system", function(){
    var input = {
      1: "Bears",
      2: "Broncos",
      3: "Falcons"
    }

    var expected = [["Bears", "Bye"], ["Broncos", "Falcons"]];
    expect(yourCode.bracket(input)).toEqual(expected);
  });
});
