function normalizeFacet(doc) {
  return {
    brand: doc.brand.toLowerCase(),
    colors: doc.colors.map(color => color.toLowerCase())
  };
}

console.log(normalizeFacet({ brand: 'Acme', colors: ['Red', 'Blue'] }));
// Output: { brand: 'acme', colors: ['red', 'blue'] }
