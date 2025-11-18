console.log('Start');

process.nextTick(() => console.log('NextTick'));
Promise.resolve().then(() => console.log('Promise'));

console.log('End');

//Start
//End
//NextTick
//Promise

//process.nextTick runs before micro-tasks like Promises in Node.js.