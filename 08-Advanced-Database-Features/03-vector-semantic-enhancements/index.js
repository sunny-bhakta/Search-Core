function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, idx) => sum + val * b[idx], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

const query = [0.1, 0.8, 0.2];
const doc = [0.2, 0.7, 0.1];
console.log('Similarity:', cosineSimilarity(query, doc).toFixed(3));
// Output:
// Similarity: 0.991
