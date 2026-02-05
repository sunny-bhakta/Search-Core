const cache = new Map();

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, idx) => sum + val * b[idx], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return +(dot / (magA * magB)).toFixed(3);
}

function semanticCacheLookup(queryVector) {
  for (const [key, value] of cache.entries()) {
    if (cosineSimilarity(key, queryVector) >= 0.9) {
      return { cacheHit: true, value };
    }
  }
  const answer = { docs: ['reset-policy'], summary: 'Follow 3-step reset flow.' };
  cache.set(queryVector, answer);
  return { cacheHit: false, value: answer };
}

const seedVector = [0.1, 0.2, 0.3];
cache.set(seedVector, { docs: ['faq-123'], summary: 'Use self-service portal.' });

console.log(semanticCacheLookup([0.11, 0.19, 0.29]));
// Output: { cacheHit: true, value: { docs: [ 'faq-123' ], summary: 'Use self-service portal.' } }
