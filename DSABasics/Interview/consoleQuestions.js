console.log([] + []); // ''
console.log([] + {}); // [object object]
console.log({} + []); // [object object] 0r 0
console.log({} + {}); // [object object][object object] or NaN
console.log(true + true) //2
console.log(true + false) //1
console.log(false == '0') //true
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log("5" - 3) //2
console.log("5" + 3) //'53'
console.log(0.1 + 0.2 === 0.3) //false
console.log(NaN === NaN) //false (NaN is not equal to anything, even itself.)
console.log([] == false) //true ([] → "" → 0)
console.log([1,2] + [3,4]) // '1,23,4'
console.log("2" * "3") //6 (Multiplication forces number conversion.)
console.log( typeof typeof 1) //string 
//typeof 1 → "number"
//typeof "number" → "string"
console.log(typeof null) //object
console.log(typeof NaN) //number
console.log(typeof Infinity) //number
console.log(typeof undefined) //undefined
console.log(typeof []) //object
console.log(typeof function(){}) //function
for(var i=0;i<3;i++){
 setTimeout(()=>console.log(i),0)
} //3 3 3 (var is functional scope)
for(let i=0;i<3;i++){
 setTimeout(()=>console.log(i),0)
} //0 1 2 (let is block scope)
