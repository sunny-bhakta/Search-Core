# 05. Latency Budgets & Retries

set a time budget for each request, bail out when it is exceeded, and retry safely when it makes sense.

### Description
- Give every endpoint a target like “95% of calls under 300 ms.”
- Use idempotent request IDs so clients can retry without creating duplicate writes.

### History Snapshot
- Early APIs waited forever, so one stuck node froze entire apps.
- Deadlines, circuit breakers, and exponential backoff became common patterns.
- Today, SLAs are part of product docs, and dashboards prove they are met.

### Pros
- Protects the search cluster from overload by cutting off slow cascades.
- Clients know exactly how long to wait before showing a fallback UI.
- Retries improve reliability during short hiccups.

### Cons
- Too aggressive timeouts can drop valid work under heavy load.
- Retried writes without idempotency keys can mutate data twice.
- Multiple retrying layers may amplify traffic during an outage.

### Production Apps
- Commerce APIs set 200 ms budgets for autocomplete and 700 ms for full search.
- Fraud teams use request IDs so resubmitting a review does not double-charge.
- Mobile apps retry once over cellular and twice over Wi-Fi with longer deadlines.

### Tiny Example
- **Input:** SLA says “95% < 300 ms,” request takes 420 ms on first try.
- **Output steps:**
	1. Client cancels at 300 ms and tries again with the same `requestId=abc123`.
	2. Server sees duplicate `requestId` and returns cached result if the first try eventually finished.
	3. Metrics log the slow span so engineers can tune indexes causing the delay.
