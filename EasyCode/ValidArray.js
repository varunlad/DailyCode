function ValidArray(arr) {
  let validArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "number") {
      validArr.push(arr[i]);
    }
  }
  return validArr;
}

console.log(ValidArray([1, 3, 43, "7", "&", 87, "~", "@",100]));
