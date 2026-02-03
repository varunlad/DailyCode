// 03_reduce_accumulate.js
// Reduce / Accumulate: reduce

const { section, sub, show, base } = require('./utils');

(function run() {
  section("Reduce / Accumulate");
  const { nums, users } = base();

  sub("reduce(callback, initial) — fold into a single value [mutates? NO]");
  {
    const sum = nums.reduce((acc, n) => acc + n, 0);
    const product = nums.reduce((acc, n) => acc * n, 1);
    show("sum", sum);
    show("product", product);
  }

  sub("reduce to object map (id -> user)");
  {
    const byId = users.reduce((acc, u) => (acc[u.id] = u, acc), {});
    show("byId", byId);
  }

  sub("reduce to group counts");
  {
    const parity = nums.reduce((acc, n) => {
      const key = n % 2 === 0 ? 'even' : 'odd';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    show("parity counts", parity);
  }
})();