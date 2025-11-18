console.log("Start");

function demo() {
  console.log("Start of function");
  new Promise((resolve) => setTimeout(resolve, 0));
  console.log("End of function");
}

demo();

console.log("End");

// Start
// Start of function
// End of function
// End