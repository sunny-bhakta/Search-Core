// const scalingRule = {
//   cpuThreshold: 70,
//   queueLagThreshold: 500,
//   addNodes: 2,
// };

// const currentMetrics = {
//   cpuPercent: 76,
//   queueLag: 640,
// };

// function evaluateRule(metrics, rule) {
//   const trigger =
//     metrics.cpuPercent > rule.cpuThreshold && metrics.queueLag > rule.queueLagThreshold;
//   return {
//     trigger,
//     nodesToAdd: trigger ? rule.addNodes : 0,
//     reason: trigger ? 'CPU and lag above target' : 'Within limits',
//   };
// }

// function reportDecision(decision) {
//   console.log(`Scale trigger fired? ${decision.trigger ? 'yes' : 'no'}`);
//   console.log(`Nodes to add: ${decision.nodesToAdd}`);
//   console.log(`Reason: ${decision.reason}`);
// }

// if (require.main === module) {
//   const decision = evaluateRule(currentMetrics, scalingRule);
//   reportDecision(decision);
// }

// module.exports = { evaluateRule, currentMetrics, scalingRule };

// /*
// Sample output
// =============
// Scale trigger fired? yes
// Nodes to add: 2
// Reason: CPU and lag above target
// */
