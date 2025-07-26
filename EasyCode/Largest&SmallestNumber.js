function smallestLargestNumber(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  return [sortArr[0], sortArr[sortArr.length - 1]];
}


console.log(smallestLargestNumber([2, 1, 3, 4, 22, 3, 4, 5])); //[1,22]
