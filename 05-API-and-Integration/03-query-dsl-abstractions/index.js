function compileDsl(dsl) {
  const queryParts = [];
  if (dsl.text) queryParts.push(`match:${dsl.text}`);
  if (dsl.filters) {
    Object.entries(dsl.filters).forEach(([key, value]) => {
      queryParts.push(`term:${key}:${value}`);
    });
  }
  queryParts.push(`size:${dsl.limit || 10}`);
  return queryParts.join(' ');
}

const dslRequest = { text: 'laptop', filters: { brand: 'Acer' }, limit: 3 };
const compiledQuery = compileDsl(dslRequest);

console.log('Compiled query:', compiledQuery);
// Output:
// Compiled query: match:laptop term:brand:Acer size:3
