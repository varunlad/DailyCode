function array_insertion(arr, index, value) {
  // Create a new array
  let newArr = [];

  for (let i = 0; i < arr.length + 1; i++) {
    if (i < index) {
      newArr[i] = arr[i]; // Copy elements before index
    } else if (i === index) {
      newArr[i] = value; // Insert new value
    } else {
      newArr[i] = arr[i - 1]; // Shift remaining elements
    }
  }

  return newArr;
}

//// Alternate approach with splice

// function array_insertion(arr, index, value) {
//   // Check if index is valid
//   if (index < 0 || index > arr.length) {
//     console.log("Invalid index");
//     return arr;
//   }

//   // Insert value at given index
//   arr.splice(index, 0, value);
//   return arr;
// }

// Usage
let numbers = [10, 20, 30, 40];
console.log("Before:", numbers);

let updatedArray = array_insertion(numbers, 2, 25);
console.log("After:", updatedArray);

// The splice() method in JavaScript is used to add, remove, or replace elements in an array
// at a specific index. It modifies the original array (it’s not immutable).

//array.splice(start, deleteCount, item1, item2, ...)

// start → The index where changes begin.
// deleteCount → Number of elements to remove.
// item1, item2, ... → Elements to add (optional).
