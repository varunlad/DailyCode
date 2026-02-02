// 01_find_test.js
// Find & Test: find, findIndex, some, every, includes, indexOf, lastIndexOf, at

const { section, sub, show, base } = require('./utils');

(function run() {
  section("Find & Test methods");
  const { nums, users, mixed } = base();

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
    const missing = users.findIndex(u => u.name === 'Zoe');
    show("index of 'Cid'", idx);
    show("index of 'Zoe'", missing);
  }

  sub("some(callback) — does ANY item pass? [mutates? NO]");
  {
    const anyEven = nums.some(n => n % 2 === 0);
    const gt10 = nums.some(n => n > 10);
    show("any even?", anyEven);
    show("> 10?", gt10);
  }

  sub("every(callback) — do ALL items pass? [mutates? NO]");
  {
    const allPositive = nums.every(n => n > 0);
    const allEven = nums.every(n => n % 2 === 0);
    show("all > 0?", allPositive);
    show("all even?", allEven);
  }

  sub("includes(value[, fromIndex]) — contains primitive? [mutates? NO]");
  {
    show("mixed.includes(10)", mixed.includes(10));
    show("mixed.includes('10')", mixed.includes('10'));
    show("nums.includes(3, 3)", nums.includes(3, 3)); // start search at index 3
  }

  sub("indexOf / lastIndexOf — position of value (===) [mutates? NO]");
  {
    show("indexOf 30", mixed.indexOf(30));
    show("lastIndexOf 30", mixed.lastIndexOf(30));
    show("indexOf '10'", mixed.indexOf('10'));
  }

  sub("at(index) — supports negative indices [mutates? NO]");
  {
    show("nums.at(0)", nums.at(0));
    show("nums.at(-1)", nums.at(-1));
  }
})();