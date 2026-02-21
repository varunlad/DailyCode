let arr = [1,2,3,4,5,6,7];

console.log(arr.filter((e)=>{return e>4}).length);

console.log(arr.map((e)=>{return e>4}).length);

console.log(arr)


// filter keeps only items that match a condition → result is [5, 6, 7] → length 3.
// map transforms every item → result is [false, false, false, false, true, true, true] → length 7.