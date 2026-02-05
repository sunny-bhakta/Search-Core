# 07. Advanced Query Optimizers

Overview: let the database pick the fastest plan by learning from stats, hints, and past runs.

### Description
- Collect cardinality stats and cost models for joins, filters, and aggregates.
- Observe runtime feedback to adjust future plans.

### History Snapshot
- Fixed rule-based planners often chose bad join orders.
- Cost-based optimizers improved using histograms and caching.
- Adaptive optimizers now re-plan mid-flight when estimates are wrong.

### Pros
- Faster queries without manual tuning.
- Better resource usage and concurrency.
- Explain plans help debug slow requests.

### Cons
- Stats drift causes wrong decisions.
- Adaptive logic adds unpredictability for compliance-critical flows.
- Developers may rely too much on magic and ignore schema design.

### Production Apps
- Analytics APIs surface `EXPLAIN` in dashboards so engineers see chosen plan.
- Cloud databases auto-hint queries based on workload capture.
- Search aggregators record plan latency to auto-tune caches.

### Tiny Example
- **Input:** query joins `products` + `inventory`.
- **Output steps:**
	1. Optimizer sees `products` small, `inventory` large.
	2. Chooses to scan `inventory` first with index filter.
	3. Stores new stats so next run is faster.
