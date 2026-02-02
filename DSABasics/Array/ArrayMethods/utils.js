// utils.js
// Shared helpers for demo scripts.

const line = () => console.log("".padEnd(70, "─"));
const section = (title) => { line(); console.log(`🔹 ${title}`); line(); };
const sub = (title) => console.log(`\n  • ${title}`);
const show = (label, value) => {
  const pretty = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  console.log(`    ${label}:`, pretty);
};
const base = () => ({
  nums: [1, 2, 3, 4, 5],
  mixed: [10, '10', 20, 30, 30, 20, 10],
  nested: [[1, 2], [3, [4, 5]], 6],
  users: [
    { id: 1, name: 'Ana', age: 20 },
    { id: 2, name: 'Ben', age: 30 },
    { id: 3, name: 'Cid', age: 25 },
  ],
});

module.exports = { line, section, sub, show, base };