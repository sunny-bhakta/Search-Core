function hybridScore(sparse, dense, weights) {
  const score = sparse * weights.sparse + dense * weights.dense;
  return +score.toFixed(2);
}

console.log(hybridScore(1.2, 0.8, { sparse: 0.7, dense: 0.3 }));
// Output: 1.08
