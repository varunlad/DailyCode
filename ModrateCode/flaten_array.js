function flaten_array(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flaten_array(arr[i]); ///concept of recursion is used.
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

////Alternate Approach

// let flat = [];
// function flaten_array(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flat = flaten_array(arr[i]);
//     } else {
//       flat.push(arr[i]);
//     }
//   }
//   return flat;
// }

let flatArr = flaten_array([1, [2, 3], [4, [5, 6, [7, 8]]], 9, [10]]);
console.log("flatArr = ", flatArr);
