function createTrace(traceId) {
  return {
    traceId,
    spans: [
      { name: 'gateway', durationMs: 40 },
      { name: 'fetch_shards', durationMs: 320 },
      { name: 'rank', durationMs: 90 }
    ]
  };
}

const trace = createTrace('trace-123');
const total = trace.spans.reduce((sum, span) => sum + span.durationMs, 0);
console.log(`Trace ${trace.traceId} total duration: ${total} ms`);
// Output:
// Trace trace-123 total duration: 450 ms
