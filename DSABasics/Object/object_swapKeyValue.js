let myObject = {
  name: "varun",
  age: 25,
  city: "bangalore",
};
function swapKeyValue(obj) {
  let myVal = Object.values(obj);
  let myKey = Object.keys(obj);
  let newObj = {};
  for (let i = 0; i < myKey.length; i++) {
    newObj[myVal[i]] = myKey[i];
  }
  return newObj;
}
console.log(swapKeyValue(myObject));
