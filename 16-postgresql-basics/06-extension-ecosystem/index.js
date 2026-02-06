function listExtensions(useCase) {
  if (useCase === 'fuzzy') return ['pg_trgm'];
  if (useCase === 'vector') return ['pgvector'];
  return ['postgis'];
}

console.log(listExtensions('vector'));
// Output: ['pgvector']
