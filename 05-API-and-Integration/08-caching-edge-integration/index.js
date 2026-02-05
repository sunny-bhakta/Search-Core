const cache = new Map();

function fetchSearch(query) {
  const key = `tenantA:${query}`;
  if (cache.has(key)) {
    return { source: 'cache', result: cache.get(key) };
  }
  const result = `results for ${query}`;
  cache.set(key, result);
  return { source: 'origin', result };
}

console.log(fetchSearch('laptop'));
console.log(fetchSearch('laptop'));
// Output:
// { source: 'origin', result: 'results for laptop' }
// { source: 'cache', result: 'results for laptop' }
