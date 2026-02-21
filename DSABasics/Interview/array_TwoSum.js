function TwoSumProblem(arr, sum) {
  let indArr = [];
     for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length-1; j++){
        if((arr[i] + arr[j]) === sum){
          return indArr = [i,j];
        }
    }
     }
        return 'no match found';
}

console.log(TwoSumProblem([1, 2, 3, 4, 5, 6],4));
