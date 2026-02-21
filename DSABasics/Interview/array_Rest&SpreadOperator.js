let arr1 = [1,2,3,4,5,6];

let spreadArr = [...arr1,7,8,9,10];
console.log('spreadArr - ',spreadArr);
let [first, ...rest] = arr1;

console.log('first - ',first);
console.log('rest - ',rest);