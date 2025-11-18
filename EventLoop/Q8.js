async function first() {
  console.log('First start');
  await second();
  console.log('First end');
}

async function second() {
  console.log('Second start');
  await Promise.resolve();
  console.log('Second end');
}

first();
console.log('Global end');

//First start
//Second start
//Global end
//Second end
//First end