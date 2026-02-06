function normalizeTokens(tokens) {
  const stopwords = new Set(['for', 'the']);
  return tokens
    .map(token => token.toLowerCase())
    .filter(token => !stopwords.has(token))
    .map(token => token.replace(/ing$/, ''));
}

console.log(normalizeTokens(['Running', 'Shoes', 'for', 'Kids']));
// Output: ['runn', 'shoes', 'kids']
