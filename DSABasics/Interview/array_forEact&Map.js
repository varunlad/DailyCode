let arr = [1,2,3,4,5];
let mapArr = arr.map((item)=> item*2);
let forEachArr = arr.forEach((item)=>item*2);
console.log(mapArr); ////[2,4,6,8,10];
console.log(forEachArr); ////Undefied because forEach Method does not return new array.