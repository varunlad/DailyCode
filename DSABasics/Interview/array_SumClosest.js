
function SumClosest(arr, sum){
    let sumClosestObj = [];
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            let Indsum = arr[i] + arr[j]; 
            sumClosestObj.push({Indsum : Indsum, Ind1: i, Ind2 : j})
        }
    }
    return  sumClosestObj.filter((ele => ele.Indsum === sum));
}

console.log(SumClosest([-1,2,1,-4],3))