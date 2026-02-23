const original = {
  name: "Laptop",
  details: { color: "silver", price: 1000 }
};

const copy = { ...original };
copy.name = "Phone";
copy.details.color = "blue";  ////Reference address (object Non primitive data type)
console.log(copy)
console.log(original);


const colors = [["red", "green"], "blue"];
const newColors = [...colors];

newColors[0].push("yellow"); ////Refence address (Array Non primitive data type)
newColors[1] = "purple";

console.log(colors[0]); 
console.log(colors[1]);
