function productExpectSelf(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    
    result.push(product);
  }

  return result;
}

console.log(productExpectSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
