function removeDuplicates(arr){
    let uniqueArr =[];
    for(let i=0; i< arr.length; i++){
        let isUnique = true;
        for(let j=i+1; j<arr.length-1;j++){
            if(arr[i] === arr[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
