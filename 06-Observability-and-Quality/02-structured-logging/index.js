function logSearchEvent(event) {
  console.log(JSON.stringify(event));
}

logSearchEvent({ requestId: 'req-1', tenantId: 'tenantA', latencyMs: 210, status: 'ok' });
// Output:
// {"requestId":"req-1","tenantId":"tenantA","latencyMs":210,"status":"ok"}
