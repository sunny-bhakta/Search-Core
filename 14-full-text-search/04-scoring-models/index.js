function bm25(tf, docLength, avgDocLength, idf, k1 = 1.2, b = 0.75) {
  const numerator = tf * (k1 + 1);
  const denominator = tf + k1 * (1 - b + b * (docLength / avgDocLength));
  return +(idf * (numerator / denominator)).toFixed(3);
}

const score = bm25(3, 500, 400, Math.log(10000 / 100));

console.log({ score });
// Output: { score: 4.418 }
