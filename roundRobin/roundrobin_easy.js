function roundRobin(array){
  evenTeams(array);
  var round = [];
  round.push(array.shift());
    for (var i = 0; i < (array.length); i++) {
      splitTeams(round.concat(array));
      var x = array.pop();
      array.unshift(x);
    }
}


function evenTeams(array) {
  if (((array.length) % 2 === 0) === false)
    array[array.length] = "bye"
}

function splitTeams(array) {
  evenTeams(array);
  var middle = (array.length/2);
  var top = array.slice(0, middle)
  var bottom = array.slice(middle, array.length)
  console.log(top)
  console.log(bottom.reverse())
}

console.log(roundRobin([1,2,3,4,5,6,7,8,9]))
