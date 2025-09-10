function array_get_element(arr){
    let traversedArr = [];
    ////Going through the array element one by one.
    for(let i=0; i<arr.length; i++){
        traversedArr.push("Val :",arr[i]);
    }

    return traversedArr;
}

console.log(array_get_element([0,1,2,3,4,5]))