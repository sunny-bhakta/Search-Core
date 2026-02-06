function catalogSynonym(term, variant, type) {
  return { term, variant, type };
}

console.log(catalogSynonym('sneaker', 'trainer', 'two-way'));
// Output: { term: 'sneaker', variant: 'trainer', type: 'two-way' }
