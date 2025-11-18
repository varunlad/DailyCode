console.log('A');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  Promise.resolve().then(() => console.log('Promise 2'));
});

console.log('B');

//A
//B
//Promise 1
//Promise 2
//Timeout