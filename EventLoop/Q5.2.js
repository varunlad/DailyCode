//Async/Await with setTimeout

console.log("Start");

async function demo() {
  console.log("Inside async function");
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log("After await");
}

demo();

console.log("End");

// Start → synchronous
// Inside async function → synchronous part of demo()
// End → synchronous
// After await → runs after the promise resolves (micro-task after macro-task).
