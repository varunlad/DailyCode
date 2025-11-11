function sortedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(sortedArray([2, 4, 1, 4, 2, 5, 6, 7, 3, 2, 5]));
////Refer Notes
