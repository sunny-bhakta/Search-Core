// const budgets = {
//   latencyP95Ms: 200,
//   errorRate: 0.5,
//   heapPercent: 75,
// };

// const snapshot = {
//   latencyP95Ms: 210,
//   errorRate: 0.2,
//   heapPercent: 65,
// };

// function evaluate(snapshotMetrics, budget) {
//   const breaches = [];
//   if (snapshotMetrics.latencyP95Ms > budget.latencyP95Ms) {
//     breaches.push({ metric: 'latency_p95_ms', value: snapshotMetrics.latencyP95Ms, action: 'scale cache nodes' });
//   }
//   if (snapshotMetrics.errorRate > budget.errorRate) {
//     breaches.push({ metric: 'error_rate_%', value: snapshotMetrics.errorRate, action: 'roll back latest change' });
//   }
//   if (snapshotMetrics.heapPercent > budget.heapPercent) {
//     breaches.push({ metric: 'heap_percent', value: snapshotMetrics.heapPercent, action: 'increase heap / drop caches' });
//   }
//   return breaches;
// }

// function logAlerts(breaches) {
//   if (!breaches.length) {
//     console.log('All metrics within budget.');
//     return;
//   }
//   console.log('Alert(s) triggered:');
//   console.table(breaches);
// }

// if (require.main === module) {
//   const breaches = evaluate(snapshot, budgets);
//   logAlerts(breaches);
// }

// module.exports = { evaluate, snapshot, budgets };

// /*
// Sample output
// =============
// Alert(s) triggered:
// ┌─────────┬──────────────────┬───────┬─────────────────────┐
// │ (index) │     metric       │ value │       action        │
// ├─────────┼──────────────────┼───────┼─────────────────────┤
// │    0    │ 'latency_p95_ms' │  210  │ 'scale cache nodes' │
// └─────────┴──────────────────┴───────┴─────────────────────┘
// */
