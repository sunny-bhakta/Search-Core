# 05. Indexing Throughput & Backpressure

Measure how fast documents enter the index and add brakes so bad payloads or spikes don’t topple the cluster.
It’s cruise control for ingestion.

### History Snapshot
- Nightly batch jobs used to push millions of docs without feedback—if something broke, you found out hours later.
- Streaming systems introduced ACK/NACK semantics and queue depth metrics.
- Modern stacks expose lag alerts, dynamic throttling, and dead-letter queues to keep ingest healthy.

### Pros
- Keeps indexing latency predictable even when upstream spikes.
- Protects clusters from bad documents by rerouting them to dead-letter queues.
- Makes it easier to plan SLAs because you know how long a doc takes to become searchable.

### Cons
- More backpressure signals mean more things to monitor.
- Throttling too aggressively can delay urgent updates.
- Requires coordination with upstream teams to honor rate limits.

### Production Apps Managing Throughput
- Marketplaces throttle partner feeds if queue lag exceeds a minute.
- Security logs drop to a "sampling" mode when ingest nodes saturate.
- Social networks send broken posts to a DLQ and alert content moderators.

### Tiny Example
- **Input:** batch job sends 1,000 docs/min, streaming feed sends 200 docs/min, ingest tier safely handles 1,100 docs/min.
- **Output steps:**
	1. Controller sums inputs (1,200 docs/min) and flags that it exceeds the safe 1,100 docs/min budget.
	2. Batch path is throttled to 900 docs/min so total load drops back under budget while streaming stays untouched (real-time requirements win and batch updates are usually more tolerant of slower delivery).
	3. Warning log fires (“batch throttled by 100 docs/min”), and a DLQ counter stays at zero because no docs failed—just slowed.
