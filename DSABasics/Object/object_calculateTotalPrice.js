function calculateTotalPrice(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        sum = sum + products[i].price;
    }
    return sum;
}

// Usage
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Headphones", price: 150 }
];

console.log("Total Price:", calculateTotalPrice(products));
