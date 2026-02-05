function replicate(latencyMs) {
  const budget = 2000;
  return latencyMs <= budget ? 'healthy' : 'lagging';
}

console.log(replicate(1500));
// Output:
// healthy
