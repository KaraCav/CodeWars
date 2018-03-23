// 1. Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
function deleteNth(arr, n) {
  // ...
  var result = [];
  var itemCounts = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var count = itemCounts[item] || 0;
    if (count < n) {
      result.push(item);
      itemCounts[item] = count + 1;
    }
  }
  return result;
}

// 2. Return the inverse of an array ie. [1, -3, 0] —> [-1, 3, 0]
function invert(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push(0);
    } else {
      newArray.push(array[i] * -1);
    }
  }
  return newArray;
}
