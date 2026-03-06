///What will be the output of the following code and why?

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 500);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 700);
}

for (var i = 0; i < 4; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 1400);
  })(i);
}

// 4
// 4
// 4
// 4
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3

// 1️⃣ First Loop (var)
// for(var i=0;i<4;i++)
// { setTimeout(()=>console.log(i),500); }
// What happens

// var is function scoped, not block scoped.

// The loop finishes immediately before setTimeout runs.

// 2️⃣ Second Loop (let)
// for(let i=0;i<4;i++)
// { setTimeout(()=>console.log(i),700); }
// What happens

// let is block scoped.

// Each iteration creates a new copy of i.

// 3️⃣ Third Loop (IIFE)
// for(var i=0;i<4;i++){
//  (function(i){
//    setTimeout(()=>console.log(i),1400); 
//  })(i); 
// }
// What happens

// An IIFE (Immediately Invoked Function Expression) creates a new scope.

// i is passed as a parameter, so each iteration preserves its value.