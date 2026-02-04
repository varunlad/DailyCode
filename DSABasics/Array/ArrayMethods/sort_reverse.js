// 04_sort_reverse.js
// Sorting & Reversing: sort, reverse, toSorted, toReversed

const { section, sub, show } = require('./utils');

(function run() {
  section("Sorting & Reversing");

  const original = [10, 2, 5, 100, 11];

  sub("sort(compare) — sorts IN PLACE (mutates!)");
  {
    const nums = [...original];
    nums.sort((a, b) => a - b);
    show("original", original);
    show("sorted (mutated copy)", nums);
  }

  sub("default sort is lexicographic (strings), be careful!");
  {
    const nums = [10, 2, 5];
    show("default sort", [...nums].sort());
    show("numeric sort", [...nums].sort((a,b)=>a-b));
  }

  sub("reverse() — reverses IN PLACE (mutates!)");
  {
    const arr = [1, 2, 3];
    arr.reverse();
    show("reversed", arr);
  }

  sub("toSorted / toReversed — non-mutating (ES2023+)");
  {
    const arr = [3, 1, 2];
    if (Array.prototype.toSorted && Array.prototype.toReversed) {
      const s = arr.toSorted((a,b)=>a-b);
      const r = arr.toReversed();
      show("arr (original)", arr);
      show("toSorted", s);
      show("toReversed", r);
    } else {
      console.log("    (Runtime lacks toSorted/toReversed)");
    }
  }
})();