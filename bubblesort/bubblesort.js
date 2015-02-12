var array = [1,9,2,7,3,5,10]

function bubbleSort(array) {
  var ordered;
  do {
    ordered = false;
    for (var i = 0; i < array.length -1; i++) {
      if (array[i] > array[i+1]){
        var temp = array[i]
        array[i] = array[i+1];
        array[i+1] = temp;
        ordered = true;
      }
    }
  } while (ordered === true);
  return array
}

console.log(bubbleSort(array))
