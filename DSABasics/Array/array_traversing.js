function array_traversing(arr){
    let traversedArr = [];
    ////Going through the array element one by one.
    for(let i=0; i<arr.length; i++){
        traversedArr.push("Val :",arr[i]);
    }

    return traversedArr;
}

console.log(array_traversing([0,1,2,3,4,5]))