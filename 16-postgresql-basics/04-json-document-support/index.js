function extractField(doc, field) {
  return doc[field];
}

console.log(extractField({ category: 'eco', price: 45 }, 'category'));
// Output: 'eco'
