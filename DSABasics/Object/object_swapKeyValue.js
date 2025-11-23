let myObject = {
  name: "varun",
  age: 25,
  city: "bangalore",
};

function swapKeyValue(obj) {
  let myVal = Object.values(obj); ///Object property values
  let myKey = Object.keys(obj);  ///Object property keys
  let newObj = {};
  for (let i = 0; i < myKey.length; i++) {
    newObj[myVal[i]] = myKey[i];   ////Swap kys with value
  }
  return newObj;
}
console.log(swapKeyValue(myObject));
