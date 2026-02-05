function combineModalities(textScore, imageScore) {
  return (textScore * 0.6) + (imageScore * 0.4);
}

console.log('Combined score:', combineModalities(0.8, 0.9).toFixed(2));
// Output:
// Combined score: 0.84
