function quickSort(array) {
  if (array.length <=1)
    return array
  var pivot_array = []
  var pivot = array[array.length -1]
  pivot_array.push(pivot)
  var pivot_index = array.length -1
  array.splice(pivot_index, 1)
  var lesser = [];
  var greater = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= pivot)
    lesser.push(array[i])
    else
    greater.push(array[i])
  }
  return (quickSort(lesser)).concat(pivot_array).concat(quickSort(greater))
}


module.exports = {
  quickSort: quickSort
};
