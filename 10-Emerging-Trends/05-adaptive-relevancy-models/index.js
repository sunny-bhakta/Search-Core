function adaptiveBoost(scores, feedback) {
  const adjustment = feedback === 'positive' ? 0.1 : -0.05;
  return scores.map(item => ({
    ...item,
    adjustedScore: +(item.baseScore + adjustment).toFixed(2)
  }));
}

const sample = adaptiveBoost([
  { query: 'green sneakers', baseScore: 0.8 },
  { query: 'blue sneakers', baseScore: 0.85 }
], 'positive');

console.log(sample);
// Output: [
//   { query: 'green sneakers', baseScore: 0.8, adjustedScore: 0.9 },
//   { query: 'blue sneakers', baseScore: 0.85, adjustedScore: 0.95 }
// ]
