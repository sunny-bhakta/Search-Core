// const cluster = {
//   nodes: ['node-a', 'node-b', 'node-c'],
//   replicaCount: 2,
//   writeQuorum: 2,
// };

// function simulateFailure(clusterState, failedNode) {
//   const remaining = clusterState.nodes.filter((node) => node !== failedNode);
//   const hasQuorum = remaining.length >= clusterState.writeQuorum;
//   return {
//     failedNode,
//     remainingNodes: remaining,
//     canAcceptWrites: hasQuorum,
//   };
// }

// function logDrill(result) {
//   console.log(`Failover drill: lost ${result.failedNode}`);
//   console.log('Remaining nodes:', result.remainingNodes.join(', '));
//   console.log(`Write quorum satisfied? ${result.canAcceptWrites ? 'yes' : 'no'}`);
// }

// if (require.main === module) {
//   const drill = simulateFailure(cluster, 'node-b');
//   logDrill(drill);
// }

// module.exports = { cluster, simulateFailure };

// /*
// Sample output
// =============
// Failover drill: lost node-b
// Remaining nodes: node-a, node-c
// Write quorum satisfied? yes
// */
