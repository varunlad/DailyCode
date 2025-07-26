function ProductArrPuzzel(arr){
    let totalProduct = TotalProduct(arr);
    let puzzerArr = [];
    for(let i=0;i<arr.length;i++){
        let ele = totalProduct/arr[i];
        puzzerArr.push(ele);
    }
    return puzzerArr;

}
function TotalProduct(arr){
    let product = 1;
    for(let i=0;i<arr.length;i++){
      product = product*arr[i];
    }
    return product;
}

console.log(ProductArrPuzzel([1,2,3,4])) //[ 24, 12, 8, 6 ]