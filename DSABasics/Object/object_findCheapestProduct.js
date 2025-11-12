function findCheapestProduct(products) {
  let cheapestProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if(products[i].price < cheapestProduct.price){
        cheapestProduct = products[i]
    }
  }
  return cheapestProduct;
}

// Usage
const products = [
  { name: "Laptop", price: 2000 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Headphones", price: 150 },
];

console.log(findCheapestProduct(products));
// Output: { name: 'Headphones', price: 150 }
