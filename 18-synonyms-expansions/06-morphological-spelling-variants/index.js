function addVariant(query, variants) {
  return variants[query] ? [query, ...variants[query]] : [query];
}

console.log(addVariant('favourite', { favourite: ['favorite'] }));
// Output: ['favourite', 'favorite']
