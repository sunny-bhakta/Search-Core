// const workloads = {
//   searchQps: 800,
//   indexingRps: 220,
//   latencyGoalMs: 200,
//   headroomPercent: 20,
// };

// const nodeLimits = {
//   searchQps: 250,
//   indexingRps: 80,
// };

// function nodesNeeded(current, limit, headroomPercent) {
//   const raw = current / limit;
//   const withHeadroom = raw * (1 + headroomPercent / 100);
//   return Math.ceil(withHeadroom);
// }

// function buildPlan(workload, limits) {
//   return {
//     searchNodes: nodesNeeded(workload.searchQps, limits.searchQps, workload.headroomPercent),
//     ingestNodes: nodesNeeded(workload.indexingRps, limits.indexingRps, workload.headroomPercent),
//     latencyGoalMs: workload.latencyGoalMs,
//   };
// }

// function summarizePlan(plan, workload) {
//   console.log('Capacity Plan Summary');
//   console.table([
//     {
//       component: 'Search tier',
//       currentLoad: `${workload.searchQps} QPS`,
//       perNodeLimit: `${nodeLimits.searchQps} QPS`,
//       nodesRequested: plan.searchNodes,
//     },
//     {
//       component: 'Ingest tier',
//       currentLoad: `${workload.indexingRps} docs/s`,
//       perNodeLimit: `${nodeLimits.indexingRps} docs/s`,
//       nodesRequested: plan.ingestNodes,
//     },
//   ]);
//   console.log(`Latency SLO target: p95 <= ${plan.latencyGoalMs} ms`);
// }

// if (require.main === module) {
//   const plan = buildPlan(workloads, nodeLimits);
//   summarizePlan(plan, workloads);
// }

// module.exports = { workloads, nodeLimits, buildPlan, summarizePlan };

// /*
// Sample output
// =============
// Capacity Plan Summary
// ┌─────────┬───────────────┬─────────────┬────────────────┬────────────────┐
// │ (index) │   component   │ currentLoad │ perNodeLimit   │ nodesRequested │
// ├─────────┼───────────────┼─────────────┼────────────────┼────────────────┤
// │    0    │ 'Search tier' │ '800 QPS'   │ '250 QPS'      │       4        │
// │    1    │ 'Ingest tier' │ '220 docs/s'│ '80 docs/s'    │       4        │
// └─────────┴───────────────┴─────────────┴────────────────┴────────────────┘
// Latency SLO target: p95 <= 200 ms
// */
