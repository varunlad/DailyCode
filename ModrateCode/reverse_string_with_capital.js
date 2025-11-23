// input: how are you doing today?
// output: Today Doing You Are How?

function reveseStringWithCapital(string){
let stringArr = string.split(' ').reverse();
let reverseStringArr =[];
for(let i=0; i<stringArr.length; i++){
   let myWord = CapitalCharWords(stringArr[i]);
   if(myWord.includes('?')){
     reverseStringArr.push(myWord.slice(0,myWord.length-1)) ////string.slice(start, end)
   }
   else{
    reverseStringArr.push(myWord);
   }
}
 return reverseStringArr.join(' ')+'?';
}

function CapitalCharWords(words){
    return words.charAt(0).toUpperCase() + words.slice(1); 
}
////slice() is a method used on strings or arrays to extract a part of them without changing the original data.
////charAt() is a string method that returns the character at a specific index.

console.log(reveseStringWithCapital('how are you doing today?'));