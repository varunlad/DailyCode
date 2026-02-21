function RotateArray(arr, k){
    if(k > arr.length) return 'Invalid input';
let leftArr = [];
let rigthArr =[];
let startPoint = arr.length -k;
for(let i=startPoint; i<arr.length; i++){
    leftArr.push(arr[i]);
}
for(let i=0; i<startPoint; i++){
    rigthArr.push(arr[i]);
}
return leftArr.concat(rigthArr);
}

console.log(RotateArray([1,2,3,4,5,6,7],4));