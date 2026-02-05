function checkLatency(latencies) {
  const threshold = 300;
  const average = latencies.reduce((sum, value) => sum + value, 0) / latencies.length;
  if (average > threshold) {
    return 'Alert: follow runbook step 1 (check cache).';
  }
  return 'All good: no alert.';
}

console.log(checkLatency([320, 310, 305]));
// Output:
// Alert: follow runbook step 1 (check cache).
