function expandQuery(query, synonyms) {
  const extra = synonyms[query] || [];
  return [query, ...extra];
}

console.log(expandQuery('tee', { tee: ['t-shirt'] }));
// Output: ['tee', 't-shirt']
