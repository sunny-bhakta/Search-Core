// const shardPlan = {
//   dataSizeGb: 12000,
//   targetShardSizeGb: 50,
//   tenants: ['tenant-a', 'tenant-b', 'tenant-c'],
// };

// function calcShardCount(plan) {
//   return Math.ceil(plan.dataSizeGb / plan.targetShardSizeGb);
// }

// function pickShardId(routingKey, shardCount) {
//   const hash = [...routingKey].reduce((acc, char) => acc + char.charCodeAt(0), 0);
//   return hash % shardCount;
// }

// function describeRouting(plan) {
//   const shardCount = calcShardCount(plan);
//   console.log(`Shard count needed: ${shardCount}`);
//   // We still create all shards (0-239). The table just shows where the listed tenants land.
//   console.table(
//     plan.tenants.map((tenant) => ({
//       tenant,
//       shard: pickShardId(tenant, shardCount),
//     }))
//   );
// }

// if (require.main === module) {
//   describeRouting(shardPlan);
// }

// module.exports = { shardPlan, calcShardCount, pickShardId };

// /*
// Sample output
// =============
// Shard count needed: 240
// ┌─────────┬────────────┬───────┐
// │ (index) │  tenant    │ shard │
// ├─────────┼────────────┼───────┤
// │    0    │ 'tenant-a' │   72  │
// │    1    │ 'tenant-b' │   73  │
// │    2    │ 'tenant-c' │   74  │
// └─────────┴────────────┴───────┘
// // Note: only three tenants are shown here, but shards 0-239 all exist because shard count = 240.
// */
