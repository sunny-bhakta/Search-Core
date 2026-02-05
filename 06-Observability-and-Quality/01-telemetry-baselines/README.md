# 01. Telemetry Baselines

measure the basics (traffic, speed, errors, resources) so you notice weirdness fast.

### Description
- Define the must-have metrics for search requests, indexing jobs, and background tasks.
- Break them out by feature or tenant so you can spot who is in trouble.

### History Snapshot
- Early teams watched only CPU graphs and missed search-specific fires.
- Metric namespacing and percentiles made dashboards meaningful.
- Today, SLO scorecards map straight to user journeys and pager duty.

### Pros
- Gives early warning before users complain.
- Helps capacity planning with real numbers.
- Creates a shared language for product + ops.

### Cons
- Too many graphs create noise and alert fatigue.
- Badly labeled metrics confuse new teammates.
- Collecting high-cardinality tags can get expensive.

### Production Apps
- Marketplaces track `search.qps`, `p95_latency`, and `error_rate` per region.
- Streaming services graph ingest lag separately from query lag.
- SaaS vendors add tenant tags to every metric for per-customer SLAs.

### Tiny Example
- **Input:** latest telemetry snapshot shows `p95=320 ms` vs. budget `250 ms`.
- **Output steps:**
	1. Dashboard turns orange because p95 crossed the budget.
	2. On-call checks CPU vs. cache hit metrics to find the bottleneck.
	3. They scale read replicas, p95 drops to 210 ms, dashboard turns green.
