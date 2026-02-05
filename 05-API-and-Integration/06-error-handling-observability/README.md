# 06. Error Handling & Observability

Return clear error codes and log enough context so you can replay what happened.

### Description
- Map failures to readable messages (`422 validation_failed`, `504 upstream_timeout`).
- Emit structured logs and traces with correlation IDs for every hop.

### History Snapshot
- Early APIs replied “500” with no hints, forcing teams to tail logs manually.
- JSON error envelopes and log aggregators made debugging faster.
- Today, traces link front-end clicks to backend shards so on-call can pinpoint issues quickly.

### Pros
- Faster MTTR because you can see error rate spikes and reproduce them.
- Clients can show nice error messages or fallbacks instead of blank screens.
- Aggregated logs power anomaly detection and audit reviews.

### Cons
- Too much logging raises storage bills and may leak sensitive data.
- Extra tracing headers add bytes to every request.
- If schemas drift, dashboards may break until updated.

### Production Apps
- APIs return `errors: [{ code, message, traceId }]` objects for every failure.
- Support teams paste `traceId` into dashboards to see timeline and raw query.
- Edge gateways sample traces (e.g., 10%) to keep costs manageable.

### Tiny Example
- **Input:** backend shard timeouts after 2 seconds.
- **Output steps:**
	1. API returns `504` with body `{ code: "upstream_timeout", traceId: "abc123" }`.
	2. Client displays “Search is slow, please retry” plus traceId for support.
	3. On-call uses `traceId` to view logs showing shard `products-3` was overloaded and spins up a new replica.
