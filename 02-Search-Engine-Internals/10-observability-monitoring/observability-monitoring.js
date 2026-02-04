// Observability & Monitoring
// Simulate emitting metrics, logs, traces, and triggering an alert.

const metrics = [];
const logs = [];
const traces = [];
const alerts = [];

function emitMetric(name, value, labels = {}) {
  metrics.push({ name, value, labels, timestamp: Date.now() });
}

function emitLog(level, message, context = {}) {
  logs.push({ level, message, context, timestamp: Date.now() });
}

function startTrace(spanName) {
  const span = { spanName, events: [], start: Date.now() };
  traces.push(span);
  return span;
}

function endTrace(span) {
  span.end = Date.now();
}

function recordEvent(span, event) {
  span.events.push({ event, timestamp: Date.now() });
}

function evaluateAlerts() {
  const recentLatencies = metrics
    .filter((m) => m.name === 'search_latency_ms')
    .slice(-5)
    .map((m) => m.value);
  const avg =
    recentLatencies.reduce((sum, val) => sum + val, 0) /
    (recentLatencies.length || 1);
  if (avg > 200) {
    alerts.push({
      type: 'LATENCY_SLA_BREACH',
      details: { avgLatencyMs: avg.toFixed(1) },
      timestamp: Date.now(),
    });
  }
}

function ObservabilityMonitoringDemo() {
  console.log('Observability & Monitoring Demo');
  console.log('================================');

  const shardTrace = startTrace('search_request');
  recordEvent(span, 'dispatch_to_shard_2');
  emitLog('info', 'Shard 2 processing query', { shard: 'shard-2' });
  emitMetric('search_latency_ms', 220, { shard: 'shard-2' });
  recordEvent(span, 'cache_miss');
  emitLog('warn', 'Cache miss forcing upstream fetch', { shard: 'shard-2' });
  emitMetric('search_latency_ms', 210, { shard: 'shard-2' });
  endTrace(shardTrace);

  evaluateAlerts();

  console.log('\nMetrics');
  console.table(metrics.map((m) => ({
    name: m.name,
    value: m.value,
    shard: m.labels.shard,
  })));

  console.log('\nLogs');
  console.table(logs.map((l) => ({ level: l.level, message: l.message, shard: l.context.shard })));

  console.log('\nTraces');
  console.dir(traces, { depth: null });

  console.log('\nAlerts');
  console.dir(alerts, { depth: null });

  return { metrics, logs, traces, alerts };
}

if (require.main === module) {
  ObservabilityMonitoringDemo();
}

/* Sample Output (node observability-monitoring.js)

Metrics
┌─────────┬──────────────────┬───────┬─────────┐
│ (index) │       name       │ value │ shard   │
├─────────┼──────────────────┼───────┼─────────┤
│    0    │ 'search_latency_ms' │ 220 │ 'shard-2' │
│    1    │ 'search_latency_ms' │ 210 │ 'shard-2' │
└─────────┴──────────────────┴───────┴─────────┘

Logs
┌─────────┬───────┬─────────────────────────────┬─────────┐
│ (index) │ level │           message           │ shard   │
├─────────┼───────┼─────────────────────────────┼─────────┤
│    0    │ 'info'│ 'Shard 2 processing query'  │ 'shard-2' │
│    1    │ 'warn'│ 'Cache miss forcing upstream fetch' │ 'shard-2' │
└─────────┴───────┴─────────────────────────────┴─────────┘

Traces
[
  {
    spanName: 'search_request',
    events: [ { event: 'dispatch_to_shard_2', ... }, { event: 'cache_miss', ... } ],
    start: 1710000000000,
    end: 1710000000500
  }
]

Alerts
[
  { type: 'LATENCY_SLA_BREACH', details: { avgLatencyMs: '215.0' } }
]

*/

module.exports = { ObservabilityMonitoringDemo, emitMetric, emitLog, startTrace, evaluateAlerts };
