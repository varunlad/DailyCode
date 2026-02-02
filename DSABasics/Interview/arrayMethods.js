// array_methods_demo.js
// A runnable walkthrough of core JavaScript ARRAY methods.
// Each section shows: what it does, whether it mutates, and example output.

// ---------- Utilities ----------
const line = () => console.log("".padEnd(70, "─"));
const section = (title) => {
  line();
  console.log(`🔹 ${title}`);
  line();
};
const sub = (title) => console.log(`\n  • ${title}`);

const base = () => ({
  nums: [1, 2, 3, 4, 5],
  mixed: [10, '10', 20, 30, 30, 20, 10],
  nested: [[1, 2], [3, [4, 5]], 6],
  users: [
    { id: 1, name: 'Ana', age: 20 },
    { id: 2, name: 'Ben', age: 30 },
    { id: 3, name: 'Cid', age: 25 },
  ]
});

// Helper to pretty-print values
const show = (label, value) => {
  const pretty = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  console.log(`    ${label}:`, pretty);
};

// ---------- 1) Iteration & Testing ----------
function demoIteration() {
  section("Iteration & Testing (forEach, map, filter, find, some, every, includes, at, indexOf)");

  const { nums, users, mixed } = base();

  sub("forEach(callback) — iterate for side effects (does NOT return a new array) [mutates? NO, unless you mutate inside]");
  {
    let sum = 0;
    nums.forEach(n => (sum += n));
    show("sum", sum);
  }

  sub("map(callback) — transform into a NEW array [mutates? NO]");
  {
    const squares = nums.map(n => n * n);
    show("nums (original)", nums);
    show("squares", squares);
  }

  sub("filter(callback) — keep items passing the test [mutates? NO]");
  {
    const evens = nums.filter(n => n % 2 === 0);
    show("evens", evens);
  }

  sub("find(callback) — first matching item or undefined [mutates? NO]");
  {
    const user30 = users.find(u => u.age === 30);
    const user40 = users.find(u => u.age === 40);
    show("user age=30", user30);
    show("user age=40", user40);
  }

  sub("findIndex(callback) — index of first match or -1 [mutates? NO]");
  {
    const idx = users.findIndex(u => u.name === 'Cid');
    show("index of 'Cid'", idx);
  }

  sub("some(callback) — does ANY item pass? [mutates? NO]");
  {
    const anyEven = nums.some(n => n % 2 === 0);
    show("any even?", anyEven);
  }

  sub("every(callback) — do ALL items pass? [mutates? NO]");
  {
    const allPositive = nums.every(n => n > 0);
    show("all > 0?", allPositive);
  }

  sub("includes(value) — contains primitive? [mutates? NO]");
  {
    show("mixed.includes(10)", mixed.includes(10));   // true
    show("mixed.includes('10')", mixed.includes('10'));// true
  }

  sub("indexOf / lastIndexOf — position of value (===) [mutates? NO]");
  {
    show("indexOf 30", mixed.indexOf(30));
    show("lastIndexOf 30", mixed.lastIndexOf(30));
  }

  sub("at(index) — supports negative indices [mutates? NO]");
  {
    show("nums.at(-1)", nums.at(-1)); // last
  }
}

// ---------- 2) Transform & Flatten ----------
function demoTransformFlatten() {
  section("Transform & Flatten (flatMap, flat)");

  const { nested } = base();

  sub("flat(depth=1) — flatten nested arrays [mutates? NO]");
  {
    show("nested", nested);
    show("flat(1)", nested.flat(1));
    show("flat(2)", nested.flat(2));
  }

  sub("flatMap(callback) — map, then flatten one level [mutates? NO]");
  {
    const arr = [1, 2, 3];
    const pairs = arr.flatMap(n => [n, n * 10]);
    show("flatMap pairs", pairs);
  }
}

// ---------- 3) Reduce / Accumulate ----------
function demoReduce() {
  section("Reduce / Accumulate (reduce)");

  const { nums, users } = base();

  sub("reduce(callback, initial) — fold into a single value [mutates? NO]");
  {
    const sum = nums.reduce((acc, n) => acc + n, 0);
    show("sum", sum);
  }

  sub("reduce to object map (id -> user)");
  {
    const byId = users.reduce((acc, u) => (acc[u.id] = u, acc), {});
    show("byId", byId);
  }
}

// ---------- 4) Sorting & Reversing ----------
function demoSortReverse() {
  section("Sorting & Reversing (sort, reverse, toSorted, toReversed)");

  const arr = [10, 2, 5, 100, 11];

  sub("sort(compare) — sorts IN PLACE (mutates!)");
  {
    const nums = [...arr];
    nums.sort((a, b) => a - b); // numeric ascending
    show("original arr", arr);
    show("sorted nums (mutated)", nums);
  }

  sub("reverse() — reverses IN PLACE (mutates!)");
  {
    const nums = [1, 2, 3];
    nums.reverse();
    show("reversed (mutated)", nums);
  }

  sub("toSorted / toReversed — non-mutating versions (ES2023+)");
  {
    if (Array.prototype.toSorted && Array.prototype.toReversed) {
      const nums = [3, 1, 2];
      const s = nums.toSorted((a, b) => a - b);
      const r = nums.toReversed();
      show("nums (original)", nums);
      show("toSorted", s);
      show("toReversed", r);
    } else {
      console.log("    (Your runtime doesn't support toSorted/toReversed yet)");
    }
  }
}

// ---------- 5) Slicing, Splicing, Concatenation ----------
function demoSliceSpliceConcat() {
  section("Slice, Splice, Concat, Copy Within, Fill");

  sub("slice(start, end) — returns subarray (NO mutation)");
  {
    const arr = [1, 2, 3, 4];
    show("slice(1,3)", arr.slice(1, 3)); // [2,3]
    show("arr (unchanged)", arr);
  }

  sub("splice(start, deleteCount, ...items) — remove/insert IN PLACE (mutates!)");
  {
    const arr = [1, 2, 3, 4];
    const removed = arr.splice(1, 2, 'a', 'b'); // removes 2 items at index 1, inserts a,b
    show("removed", removed);
    show("arr AFTER splice", arr);
  }

  sub("concat(...arrays) — merge arrays (NO mutation)");
  {
    const a = [1, 2], b = [3, 4];
    const c = a.concat(b);
    show("a", a);
    show("b", b);
    show("a.concat(b)", c);
  }

  sub("copyWithin(target, start, end) — copy within same array (mutates!)");
  {
    const arr = [1, 2, 3, 4, 5];
    arr.copyWithin(0, 3); // copy from index 3..end to index 0
    show("copyWithin result", arr);
  }

  sub("fill(value, start=0, end=len) — fill IN PLACE (mutates!)");
  {
    const arr = new Array(5).fill(0);
    arr.fill(7, 1, 4);
    show("filled arr", arr);
  }

  sub("toSpliced(...) — like splice but returns NEW array (NO mutation, ES2023+)");
  {
    const arr = [1, 2, 3, 4];
    if (Array.prototype.toSpliced) {
      const s = arr.toSpliced(1, 2, "x");
      show("arr (original)", arr);
      show("toSpliced(1,2,'x')", s);
    } else {
      console.log("    (Your runtime doesn't support toSpliced yet)");
    }
  }
}

// ---------- 6) Add / Remove at Ends ----------
function demoPushPopShiftUnshift() {
  section("Add/Remove at Ends (push, pop, shift, unshift)");

  sub("Mutating methods (OK in controlled contexts; avoid in React state)");
  {
    const arr = [2, 3];
    arr.push(4);     // -> [2,3,4]
    arr.unshift(1);  // -> [1,2,3,4]
    arr.pop();       // -> [1,2,3]
    arr.shift();     // -> [2,3]
    show("final arr", arr);
  }

  sub("Non-mutating equivalents using spread");
  {
    const arr = [2, 3];
    const withFront = [1, ...arr];
    const withBack = [...arr, 4];
    show("withFront", withFront);
    show("withBack", withBack);
  }
}

// ---------- 7) Creation Helpers ----------
function demoCreation() {
  section("Creation Helpers (Array.of, Array.from, spread, structuredClone)");

  sub("Array.of(...) — create array from arguments");
  {
    const a = Array.of(1, 2, 3);
    show("Array.of(1,2,3)", a);
  }

  sub("Array.from(iterable, mapFn?) — from iterable with optional map");
  {
    const s = "hello";
    const chars = Array.from(s, ch => ch.toUpperCase());
    show("Array.from('hello', toUpper)", chars);
  }

  sub("Spread syntax [...] — clone/merge arrays (NO mutation)");
  {
    const a = [1, 2], b = [3, 4];
    const merged = [...a, ...b];
    const clone = [...a];
    show("merged", merged);
    show("clone", clone);
  }

  sub("structuredClone(obj) — deep clone (Node 17+ / modern browsers)");
  {
    const obj = { a: 1, nested: { x: 2 } };
    if (typeof structuredClone === "function") {
      const copy = structuredClone(obj);
      copy.nested.x = 999;
      show("original", obj);
      show("deep-clone mutated copy", copy);
    } else {
      console.log("    (structuredClone not available in this runtime)");
    }
  }
}

// ---------- 8) Set-like Operations on Arrays ----------
function demoSetOps() {
  section("Set-like Operations (unique, union, intersection, difference) with Set");

  const a = [1, 2, 2, 3, 4];
  const b = [3, 4, 4, 5];

  sub("Unique (dedupe) via Set");
  {
    const unique = [...new Set(a)];
    show("unique(a)", unique);
  }

  sub("Union");
  {
    const union = [...new Set([...a, ...b])];
    show("union", union);
  }

  sub("Intersection");
  {
    const setB = new Set(b);
    const intersection = [...new Set(a)].filter(x => setB.has(x));
    show("intersection", intersection);
  }

  sub("Difference (A \\ B)");
  {
    const setB = new Set(b);
    const diff = [...new Set(a)].filter(x => !setB.has(x));
    show("difference", diff);
  }
}

// ---------- 9) Objects in Arrays: Immutability Patterns ----------
function demoObjectsImmutability() {
  section("Objects in Arrays: Immutability Patterns (avoid accidental mutations)");

  const { users } = base();

  sub("❌ Mutating objects (even inside map) changes originals");
  {
    const mutated = users.map(u => { u.age += 1; return u; });
    show("users (mutated!)", users);
    show("returned array", mutated);
  }

  sub("✅ Immutable transform with spread");
  {
    const { users: users2 } = base();
    const older = users2.map(u => ({ ...u, age: u.age + 1 }));
    show("users2 (unchanged)", users2);
    show("older (new array, new objects)", older);
  }
}

// ---------- 10) Async Patterns with Arrays ----------
async function demoAsync() {
  section("Async Patterns with Arrays (map + Promise.all vs for...of)");

  // Simulated async task
  const fetchDouble = async (n) => {
    await new Promise(r => setTimeout(r, 50));
    return n * 2;
  };

  const nums = [1, 2, 3, 4];

  sub("Parallel: map + Promise.all (fastest total time)");
  {
    const results = await Promise.all(nums.map(fetchDouble));
    show("results", results);
  }

  sub("Sequential: for...of with await (ordered & rate-limited)");
  {
    const out = [];
    for (const n of nums) {
      out.push(await fetchDouble(n));
    }
    show("results", out);
  }

  sub("⚠️ forEach + async doesn’t await — avoid for async control flow");
  {
    const out = [];
    nums.forEach(async (n) => {
      const v = await fetchDouble(n);
      out.push(v);
    });
    console.log("    Immediately after forEach, out may still be empty:", out);
    await new Promise(r => setTimeout(r, 120)); // let tasks finish
    show("out after waiting", out);
  }
}

// ---------- 11) Advanced / Nice-to-have ----------
function demoAdvanced() {
  section("Advanced / Nice-to-have");

  sub("grouping (polyfill/feature-detect): Object.groupBy / Map.groupBy (stage-3+)");
  {
    const people = [
      { name: 'Ana', city: 'NY' },
      { name: 'Ben', city: 'LA' },
      { name: 'Cid', city: 'NY' },
    ];

    // If your runtime supports Object.groupBy (Node 22+ / browsers as they adopt)
    if (typeof Object.groupBy === 'function') {
      const byCity = Object.groupBy(people, p => p.city);
      show("Object.groupBy by city", byCity);
    } else {
      // Fallback using reduce
      const byCity = people.reduce((acc, p) => {
        (acc[p.city] ||= []).push(p);
        return acc;
      }, {});
      show("groupBy via reduce", byCity);
    }
  }

  sub("at() already shown; also remember numeric sort comparator!");
  {
    const nums = [10, 2, 5];
    show("wrong (default sort)", [...nums].sort());      // [10,2,5] -> lexicographic
    show("right (numeric sort)", [...nums].sort((a,b)=>a-b)); // [2,5,10]
  }
}

// ---------- Run all demos ----------
(async function run() {
  demoIteration();
  demoTransformFlatten();
  demoReduce();
  demoSortReverse();
  demoSliceSpliceConcat();
  demoPushPopShiftUnshift();
  demoCreation();
  demoSetOps();
  demoObjectsImmutability();
  await demoAsync();
  demoAdvanced();

  line();
  console.log("✅ Done. Explore and tweak the code to deepen understanding.");
  line();
})();