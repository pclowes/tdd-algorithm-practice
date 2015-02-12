var array = [1,2,3,4,5,6,7,8,9]
var round = array.length

function recursiveArray(array, round) {
  if (round === 0) {
    return;
  }
  evenTeams(array)
  splitTeams(array)
  for (var i = 0; i < array.length; i++) {
    if (i === 0)
    array[i] = array[i]
    else if (array[i] + (array.length -2) <= array.length)
    array[i] = array[i] + (array.length -2)
    else
    array[i] = array[i] -1
  }

  return recursiveArray(array, round-1);
}


function evenTeams(array) {
  if (((array.length) % 2 === 0) === false)
  array[array.length] = array.length + 1
}

function splitTeams(array) {
  evenTeams(array);
  var middle = (array.length/2);
  var top = array.slice(0, middle)
  var bottom = array.slice(middle, array.length)
  console.log(top)
  console.log(bottom.reverse())
}

recursiveArray(array, round)
