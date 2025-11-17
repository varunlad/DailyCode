function sortProductsByPrice(products) {
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length - 1; j++) {
      if (products[i].price > products[j].price) {
        let temp = products[i];
        products[i] = products[j];
        products[j] = temp;
      }
    }
  }
  return products;
}

////Alternate approach
// function sortProductsByPrice(products) {
//   return products.sort((a, b) => a.price - b.price);
// }


// Usage
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Headphones", price: 150 },
];

console.log(sortProductsByPrice(products));
