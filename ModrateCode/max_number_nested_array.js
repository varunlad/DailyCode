let max_num_temp = 0;
function max_number_nested_array(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = max_number_nested_array(arr[i]);
    } else {
      if (arr[i] > max_num_temp) {
        max_num_temp = arr[i];
      }
    }
  }
  return  max_num_temp;
}

let max_num = max_number_nested_array([
  [1, 2, 3, 10],
  4,
  [5, 6, [7, 12, 8], 9],
]);
console.log("max_num = ", max_num);
