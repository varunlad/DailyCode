function DulicateElement(arr){
let commonEle = [];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(i!==j && arr[i] === arr[j] && !commonEle.includes(arr[i]) ){
            commonEle.push(arr[j]);
        }
    }
}
return commonEle;
}

console.log(DulicateElement([4,3,2,7,8,2,3,1]));