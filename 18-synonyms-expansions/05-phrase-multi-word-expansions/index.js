function phraseExpand(query, phrases) {
  return phrases[query] || [query];
}

console.log(phraseExpand('nyc hotels', { 'nyc hotels': ['nyc hotels', 'new york city hotels'] }));
// Output: ['nyc hotels', 'new york city hotels']
