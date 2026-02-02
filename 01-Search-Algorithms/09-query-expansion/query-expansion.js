// Basic Query Expansion Example
const documents = [
	"The car is fast",
	"Automobile industry is growing",
	"He bought a new vehicle",
    "This won't match",
	"She drives a red car"
];

const query = "car";
// Simple curated thesaurus for expansion
const thesaurus = {
	car: ["automobile", "vehicle"]
};

// Expand query with synonyms
const expandedTerms = [query, ...(thesaurus[query] || [])];

// Find documents containing any expanded term
const results = documents.filter(doc =>
	expandedTerms.some(term => doc.toLowerCase().includes(term))
);

console.log("Expanded query terms:", expandedTerms);
console.log("Query expansion results:", results);
// Output:
// Expanded query terms: [ 'car', 'automobile', 'vehicle' ]
// Query expansion results: [
//   'The car is fast',
//   'Automobile industry is growing',
//   'He bought a new vehicle',
//   'She drives a red car'
// ]
