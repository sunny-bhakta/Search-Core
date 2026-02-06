// Simulates tracking ES cluster health and node roles.
const clusterPlan = {
  masters: 3,
  dataNodes: 6,
  ingestNodes: 2,
  coordinatingNodes: 1
};

const calculateQuorum = (masters) => Math.floor(masters / 2) + 1;
const watermarks = { low: 0.85, high: 0.9 };

const evaluateHealth = ({ activeMasters, relocatingShards }) => {
  if (activeMasters < calculateQuorum(clusterPlan.masters)) return "red";
  if (relocatingShards > 0) return "yellow";
  return "green";
};

const sampleState = {
  activeMasters: 3,
  relocatingShards: 0,
  diskUsage: 0.72
};

const healthColor = evaluateHealth(sampleState);

console.log("Cluster layout:", clusterPlan);
console.log("Quorum needed:", calculateQuorum(clusterPlan.masters));
console.log("Disk watermark thresholds:", watermarks);
console.log("Current health color:", healthColor);
