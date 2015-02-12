var array = ["a", "a", "a", "a", "a", "f", "a", "d", "f"]
var round = 0

function setMaker(array, round) {
  console.log(array)

  if (round === array.length) {
    return;
  }
  var shift = 0
  var comp = array[round]
  for (var i = 0; i < array.length; i++) {
    if (comp === array[i] && round != i){
      array[i] = array[i + 1]
      shift += 1
    }
    else
      array[i] = array[i + shift]
  }
  return setMaker(array, round+1);
}

setMaker(array, round)
