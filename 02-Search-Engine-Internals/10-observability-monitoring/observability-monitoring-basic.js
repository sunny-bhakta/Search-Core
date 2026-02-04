const metrics = [];
const logs = [];
const traces = [];
const alerts = [];

function recordSearchRequest(latencyMs, shard) {
  metrics.push({ name: 'search_latency_ms', value: latencyMs, shard });
  logs.push({ level: 'info', message: `Shard ${shard} handled request`, shard });
  traces.push({
    span: 'search_request',
    shard,
    latencyMs,
    events: [{ event: 'dispatch', shard }, { event: latencyMs > 200 ? 'cache_miss' : 'cache_hit' }],
  });

  if (latencyMs > 200) {
    alerts.push({ type: 'LATENCY_SLA_BREACH', shard, latencyMs });
  }
}

recordSearchRequest(180, 'shard-1');
recordSearchRequest(240, 'shard-2');

console.log('Metrics:', metrics);
console.log('Logs:', logs);
console.log('Traces:', traces);
console.log('Alerts:', alerts);

// Metrics: [
//   { name: 'search_latency_ms', value: 180, shard: 'shard-1' },
//   { name: 'search_latency_ms', value: 240, shard: 'shard-2' }
// ]
// Logs: [
//   { level: 'info', message: 'Shard shard-1 handled request', shard: 'shard-1' },
//   { level: 'info', message: 'Shard shard-2 handled request', shard: 'shard-2' }
// ]
// Traces: [
//   { span: 'search_request', shard: 'shard-1', latencyMs: 180, events: [Array] },
//   { span: 'search_request', shard: 'shard-2', latencyMs: 240, events: [Array] }
// ]
// Alerts: [
//   { type: 'LATENCY_SLA_BREACH', shard: 'shard-2', latencyMs: 240 }
// ]