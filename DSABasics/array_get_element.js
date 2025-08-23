function array_get_element(arr, value) {
  let isValue = false;
  let occerenceValue = [];
  ////Going through the array element one by one.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      isValue = true;
      occerenceValue.push(value + " is present at " + i + " index.");
    }
  }
  if (isValue) {
    return occerenceValue;
  } else {
    return value + " is not present.";
  }
}

console.log(array_get_element([0, 4, 1, 2, 4, 3, 5], 4));
