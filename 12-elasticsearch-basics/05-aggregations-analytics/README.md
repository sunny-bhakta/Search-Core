# 05. Aggregations & Analytics

Overview: turn search responses into analytics by layering bucket and metric aggregations.

### Description
- Use bucket aggregations (terms, date_histogram, composite) to partition data, and metric aggregations (avg, sum, percentile) to summarize.
- Pipe bucket outputs into pipeline aggregations (derivative, moving_avg) for trends.
- Apply `shard_size`, `min_doc_count`, and circuit breaker limits to keep memory predictable.

### History Snapshot
- 1.x introduced aggregations to replace faceting with a more flexible tree structure.
- 5.x delivered pipeline aggregations and scripted metrics.
- 7.x+ added composite aggs for pagination and matrix stats, plus async search for heavy jobs.

### Pros
- Rich analytics without leaving Elasticsearch.
- Aggregations share the same request as queries, reducing latency.
- Pipeline aggs allow time-series analysis directly in the cluster.

### Cons
- Large cardinality buckets can exhaust heap and trigger circuit breakers.
- Precision loss occurs when sampling or using early termination.
- Slow aggs tie up coordinating nodes and reduce cluster throughput.

### Production Apps
- Observability stacks compute percentiles over latency indexes.
- Retail dashboards use composite aggs to paginate millions of SKUs.
- Fintech risk teams run scripted-metric aggs for anomaly scoring.

### Tiny Example
1. Build a `date_histogram` on `order_date` with an `avg` sub-agg for purchase value.
2. Add a `derivative` pipeline aggregation to compute day-over-day change.
3. Inspect the response to confirm bucket keys, doc counts, and calculated metrics.
