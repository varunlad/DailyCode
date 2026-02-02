// 02_transform_filter.js
// Transform / Filter: map, filter, flatMap, flat

const { section, sub, show, base } = require('./utils');

(function run() {
  section("Transform / Filter methods");
  const { nums, nested } = base();

  sub("map(callback) — transform into a NEW array [mutates? NO]");
  {
    const squares = nums.map(n => n * n);
    const labels = nums.map((n,i) => `#${i+1}: ${n}`);
    show("squares", squares);
    show("labels", labels);
  }

  sub("filter(callback) — keep items that pass the test [mutates? NO]");
  {
    const evens = nums.filter(n => n % 2 === 0);
    const gt2 = nums.filter(n => n > 2);
    show("evens", evens);
    show("> 2", gt2);
  }

  sub("flat(depth=1) — flatten nested arrays [mutates? NO]");
  {
    show("nested", nested);
    show("flat(1)", nested.flat(1));
    show("flat(2)", nested.flat(2));
  }

  sub("flatMap(callback) — map then flatten one level [mutates? NO]");
  {
    const arr = [1, 2, 3];
    const pairs = arr.flatMap(n => [n, n * 10]);
    show("flatMap pairs", pairs);
  }
})();