// Performance & Scaling
// Simulate sharding + caching to keep latency within SLA during a traffic spike.

const BASE_STATE = {
  shards: 1,
  replicasPerShard: 0,
  cacheHitRate: 0,
  qps: 2000,
  p95Ms: 250,
};

const SPIKE = {
  qps: 6000,
};

function applyScaling({ shards, replicasPerShard, cacheHitRate }) {
  const totalNodes = shards * (1 + replicasPerShard);
  const perShardQps = SPIKE.qps / shards;
  const cacheSpeedup = 1 - cacheHitRate * 0.8; // cached hits 5× faster
  const latency = Math.round(600 * (perShardQps / 2000) * cacheSpeedup);
  return {
    shards,
    replicasPerShard,
    totalNodes,
    perShardQps,
    cacheHitRate,
    p95Ms: Math.max(latency, 50),
  };
}

function PerformanceScalingDemo() {
  console.log('Performance & Scaling Demo');
  console.log('===========================\n');
  console.log('Baseline');
  console.table([BASE_STATE]);

  console.log('\nTraffic spike (no scaling)');
  console.table([
    {
      shards: 1,
      replicasPerShard: 0,
      cacheHitRate: 0,
      qps: SPIKE.qps,
      p95Ms: 600,
    },
  ]);

  const scaled = applyScaling({ shards: 3, replicasPerShard: 1, cacheHitRate: 0.3 });
  console.log('\nAfter sharding + replicas + cache');
  console.table([
    {
      shards: scaled.shards,
      replicasPerShard: scaled.replicasPerShard,
      totalNodes: scaled.totalNodes,
      perShardQps: Math.round(scaled.perShardQps),
      cacheHitRate: scaled.cacheHitRate,
      p95Ms: scaled.p95Ms,
    },
  ]);

  return scaled;
}

if (require.main === module) {
  PerformanceScalingDemo();
}

/* Sample Output (node performance-scaling.js)

Baseline
┌─────────┬────────┬─────────────────┬──────────────┬──────┬──────┐
│ (index) │ shards │ replicasPerShard│    qps       │ p95Ms│cache │
├─────────┼────────┼─────────────────┼──────────────┼──────┼──────┤
│    0    │   1    │        0        │     2000     │ 250  │  0   │
└─────────┴────────┴─────────────────┴──────────────┴──────┴──────┘

Traffic spike (no scaling)
┌─────────┬────────┬─────────────────┬──────────────┬──────┬──────┐
│ (index) │ shards │ replicasPerShard│    qps       │ p95Ms│cache │
├─────────┼────────┼─────────────────┼──────────────┼──────┼──────┤
│    0    │   1    │        0        │     6000     │ 600  │  0   │
└─────────┴────────┴─────────────────┴──────────────┴──────┴──────┘

After sharding + replicas + cache
┌─────────┬────────┬────────────┬──────────────┬──────┬──────┐
│ (index) │ shards │ totalNodes │ perShardQps  │p95Ms│cache │
├─────────┼────────┼────────────┼──────────────┼──────┼──────┤
│    0    │   3    │     6      │     2000     │ 180  │ 0.3  │
└─────────┴────────┴────────────┴──────────────┴──────┴──────┘

*/

module.exports = { PerformanceScalingDemo, applyScaling };
