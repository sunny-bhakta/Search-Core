function mockTsRank(doc, queryTerms) {
  const hits = queryTerms.filter(term => doc.includes(term)).length;
  return hits / queryTerms.length;
}

console.log(mockTsRank(['reset', 'smart', 'lock'], ['reset', 'lock']));
// Output: 1
