# Scalability & Performance

A field guide for keeping search clusters fast, stable, and predictable as traffic and data scale.

## 1. Capacity Planning & Workload Modeling
- Track QPS, payload size, and latency SLOs for both search and indexing traffic.
- Build load mix models (read/write ratio, heavy aggregations, autocomplete, etc.).
- Translate forecasts into CPU, RAM, disk, and network budgets per node role.

## 2. Sharding & Routing Strategy
- Choose shard counts based on data volume, retention, and hotspot isolation.
- Evaluate routing keys (tenant, geography, doc type) vs. random/distributed routing.
- Document how shard resizing, split/merge, and rebalancing procedures run.

## 3. Replication & Failover
- Decide replica factors per index and per availability zone.
- Clarify leader/follower or primary/secondary semantics (write quorum, read preference).
- Exercise failover drills and simulate degraded replica pools.

## 4. Query Performance Tuning
- Profile slow queries with explain plans and trace spans.
- Tune caches (filter, query, document) and warm them during deployments.
- Apply circuit breakers, timeout tiers, and pagination caps for abusive patterns.

## 5. Indexing Throughput & Backpressure
- Measure ingest pipelines (batch size, commit frequency, refresh interval).
- Implement backpressure signals: queue depth, lag alerts, dynamic throttling.
- Capture retry policies and dead-letter queues for persistent failures.

## 6. Storage Layout & Compression
- Track segment sizes, columnar vs. row stores, and doc_values usage.
- Compare compression codecs (LZ4, ZSTD) and their CPU vs. size tradeoffs.
- Plan cold storage tiers and snapshot costs for historical data.

## 7. Autoscaling & Elastic Capacity
- Define metrics that trigger scale-out/in (CPU, heap, queue lag, error rate).
- Use predictive scaling for seasonal spikes; fall back to manual overrides.
- Keep runbooks for balancing stateful services without data loss.

## 8. Benchmarking & Load Testing
- Maintain reproducible load scenarios with realistic datasets.
- Stress test query spikes, indexing bursts, and mixed workloads.
- Capture regression baselines so performance drift is surfaced quickly.

## 9. Observability & Alerting Hooks
- Instrument p95/p99 latency, resource saturation, GC pressure, cache hit ratio.
- Correlate alerts to actionable runbooks (scale up, flush cache, drop heavy query).
- Feed metrics into capacity planning loops for continuous improvement.

## 10. Cost Optimization
- Monitor utilization per node role and right-size instances/storage tiers.
- Evaluate spot/preemptible nodes with graceful eviction strategies.
- Quantify ROI of optimizations (query rewrite, cache tuning, compression tweaks).

### Suggested Next Steps
- Capture current workload profile and compare to the topics above.
- Prioritize two quick wins (e.g., cache tuning, shard rebalancing) and document outcomes.
- Schedule a game-day or load test covering at least one failure scenario per quarter.
