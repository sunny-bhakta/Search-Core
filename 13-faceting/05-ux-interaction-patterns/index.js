function activeChips(filters) {
  return filters.map(filter => `${filter.name}: ${filter.value}`);
}

console.log(activeChips([
  { name: 'brand', value: 'A' },
  { name: 'color', value: 'red' }
]));
// Output: ['brand: A', 'color: red']
