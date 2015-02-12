var array = ["a", "a", "a", "a", "a", "f", "a", "d", "f"]

function setMaker(array) {
  for (var j = 0; j < array.length; j++) {
    for (var i = 1; i < array.length; i++) {
      if (array[j] === array[i])
        array.splice(array[i], 1)
    }
  }
  console.log(array)
}

setMaker(array)
