const latencies = [120, 180, 210, 260, 280, 310, 330];

function calculateP95(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.floor(sorted.length * 0.95) || sorted.length - 1;
  return sorted[Math.min(index, sorted.length - 1)];
}

const p95 = calculateP95(latencies);
console.log(`p95 latency: ${p95} ms`);
// Output:
// p95 latency: 330 ms
