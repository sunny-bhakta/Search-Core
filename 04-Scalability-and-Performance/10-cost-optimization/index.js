// const fleet = {
//   nodes: 12,
//   costPerNode: 800,
//   avgCpu: 45,
//   targetCpu: 65,
// };

// function optimizationSuggestion(state) {
//   const newNodeCount = Math.ceil((state.nodes * state.avgCpu) / state.targetCpu);
//   const nodesToRemove = Math.max(state.nodes - newNodeCount, 0);
//   const monthlySavings = nodesToRemove * state.costPerNode;
//   return { newNodeCount, nodesToRemove, monthlySavings };
// }

// function logSuggestion(suggestion) {
//   console.log(`Nodes to remove: ${suggestion.nodesToRemove}`);
//   console.log(`New node count: ${suggestion.newNodeCount}`);
//   console.log(`Estimated savings: $${suggestion.monthlySavings}/month`);
// }

// if (require.main === module) {
//   const suggestion = optimizationSuggestion(fleet);
//   logSuggestion(suggestion);
// }

// module.exports = { fleet, optimizationSuggestion };

// /*
// Sample output
// =============
// Nodes to remove: 3
// New node count: 9
// Estimated savings: $2400/month
// */
