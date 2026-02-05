const metrics = [
  { name: 'indexSizeGb', value: 120, budget: 150 },
  { name: 'cacheHitRate', value: 0.82, budget: 0.8 },
  { name: 'avgLatencyMs', value: 210, budget: 200 },
  { name: 'storageCostUsd', value: 950, budget: 900 },
];

function evaluateMetrics() {
  return metrics.map((metric) => ({
    metric: metric.name,
    value: metric.value,
    budget: metric.budget,
    status:
      metric.name === 'cacheHitRate'
        ? metric.value >= metric.budget
          ? 'good'
          : 'breach'
        : metric.value <= metric.budget
          ? 'good'
          : 'breach',
  }));
}

if (require.main === module) {
  console.table(evaluateMetrics());
}

module.exports = { metrics, evaluateMetrics };

/*
Sample Output
=============
┌─────────┬──────────────────┬────────┬────────┬────────┐
│ (index) │      metric      │ value  │ budget │ status │
├─────────┼──────────────────┼────────┼────────┼────────┤
│    0    │  'indexSizeGb'   │  120   │  150   │ 'good' │
│    1    │  'cacheHitRate'  │ 0.82   │  0.8   │ 'good' │
│    2    │  'avgLatencyMs'  │  210   │  200   │'breach'│
│    3    │ 'storageCostUsd' │  950   │  900   │'breach'│
└─────────┴──────────────────┴────────┴────────┴────────┘
*/
