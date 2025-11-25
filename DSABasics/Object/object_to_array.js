function objectToArray(myObj) {
  let keys = Object.keys(myObj);
  let values = Object.values(myObj);
  let myArr = [];
  for (let i = 0; i < keys.length; i++) {
    myArr[keys[i]] = values[i];
  }
  return myArr;
}

console.log(objectToArray({ a: 1, b: 2, c: 3 }));
