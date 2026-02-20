function StarPattern(length){
    for(let i =0; i<=length; i++){
        let row = '';
        for(let j=0; j<=i; j++){
       row = row +' *'
        }
        console.log(row)
    }

}

console.log(StarPattern(5));