function facetTestCase(results) {
  return results.length === 0
    ? 'No results but facets must still render.'
    : 'Results present, check counts.';
}

console.log(facetTestCase([]));
// Output: 'No results but facets must still render.'
