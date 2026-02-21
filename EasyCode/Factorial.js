
// function Factorial(num){
//     let factorial = 1;
//     if(num === 1){return 1};
//     while(num > 0 ){
//         factorial = factorial * num;
//         num --;
//     }
//     return factorial;
// }

////Using Recursion

function Factorial(num){
    if(num === 1 || num === 0){ return 1 }
    else{ return num * Factorial(num -1) }
}

console.log(Factorial(5));