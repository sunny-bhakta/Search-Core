function facetPath(path) {
  return {
    breadcrumb: path.join(' > '),
    activeFacet: path[path.length - 1]
  };
}

console.log(facetPath(['Electronics', 'Laptops']));
// Output: { breadcrumb: 'Electronics > Laptops', activeFacet: 'Laptops' }
