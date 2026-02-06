function cascadeFacets(parentSelection) {
  const lookup = {
    Shoes: ['BrandA', 'BrandB'],
    Jackets: ['BrandC']
  };
  return lookup[parentSelection] || [];
}

console.log(cascadeFacets('Shoes'));
// Output: ['BrandA', 'BrandB']
