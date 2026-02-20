function PyramidStarPatter(length) {
  for (let i = 1; i <= length; i++) {
    let row = "";
    for(let s=1; s<=length-i; s++){
        row = row+" ";
    }
    for (let j = 1; j <= (i*2 -1); j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

console.log(PyramidStarPatter(5));
