const original1 = {
  name: "Alice",
  address: { city: "New York" }
};

// Create a deep copy using the modern structuredClone API
const deepCopy = structuredClone(original1);

// Modify a nested property in the copy
deepCopy.address.city = "London";

console.log(original1.address.city);