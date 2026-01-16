function arrayToObject(myArr){
let myObj = {}
for(let i=0; i<myArr.length; i++){
    myObj[myArr[i][0]] = myArr[i][1]
}
return myObj;
}

console.log(arrayToObject([["name", "Varun"], ["age", 25]]));