function weightedScore(baseScore, synonymScore, weight) {
  return +(baseScore + synonymScore * weight).toFixed(2);
}

console.log(weightedScore(1, 0.8, 0.4));
// Output: 1.32
