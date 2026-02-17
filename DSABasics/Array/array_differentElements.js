function diffElement(arr1, arr2){
    let uniqueArr = [];
    for(let i=0; i<arr1.length; i++){
        var unique = true;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]) unique = false
    }
    if(unique) uniqueArr.push(arr1[i]);
}
    return uniqueArr;
}
console.log(diffElement([1,2,3,4,5,6,7], [1,2,3,5,7] )); //[4,6]