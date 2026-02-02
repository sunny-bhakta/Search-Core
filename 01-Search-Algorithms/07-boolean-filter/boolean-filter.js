// Boolean Filter Search Example
const products = [
	{ name: "Red Shoes", color: "red", type: "shoes", price: 50 },
	{ name: "Blue Sneakers", color: "blue", type: "sneakers", price: 60 },
	{ name: "Red Sneakers", color: "red", type: "sneakers", price: 70 },
	{ name: "Green Sandals", color: "green", type: "sandals", price: 30 }
];

// Example: Find all red products that are either shoes or sneakers and price <= 60
const results = products.filter(
	p => p.color === "red" && (p.type === "shoes" || p.type === "sneakers") && p.price <= 60
);

console.log("Boolean filter results:", results);
// Output:
// Boolean filter results: [ { name: 'Red Shoes', color: 'red', type: 'shoes', price: 50 } ]
