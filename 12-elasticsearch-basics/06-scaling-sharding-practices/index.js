// Calculates shard counts and suggests rollover strategy.
const monthlyGb = 300;
const targetShardGb = 50;
const safetyFactor = 0.9;

const shardCount = Math.ceil((monthlyGb / targetShardGb) / safetyFactor);
const rolloverGb = targetShardGb * safetyFactor;
const rolloverDays = 25;

const reroutePlan = {
  reason: "Add warm nodes",
  commands: [
    { move: { shard: 3, from_node: "hot-node-1", to_node: "warm-node-1" } },
    { move: { shard: 4, from_node: "hot-node-2", to_node: "warm-node-2" } }
  ]
};

console.log("Shard count target:", shardCount);
console.log("Rollover thresholds:", { gb: rolloverGb, days: rolloverDays });
console.log("Sample reroute commands:", reroutePlan);
