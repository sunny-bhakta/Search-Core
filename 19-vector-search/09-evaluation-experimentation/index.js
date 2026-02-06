function improvement(oldMetric, newMetric) {
  const delta = +((newMetric - oldMetric) / oldMetric * 100).toFixed(2);
  return { oldMetric, newMetric, delta };
}

console.log(improvement(0.5, 0.55));
// Output: { oldMetric: 0.5, newMetric: 0.55, delta: 10 }
