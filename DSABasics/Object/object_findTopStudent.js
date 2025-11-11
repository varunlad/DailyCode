function findTopStudent(students) {
  let topStudent = { name: "", marks: 0 };
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > topStudent.marks) {
      topStudent = students[i]
    }
  }
  return topStudent;
}

// Usage
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 90 },
  { name: "David", marks: 60 },
];

console.log(findTopStudent(students));
// Output: { name: "Charlie", marks: 90 }
