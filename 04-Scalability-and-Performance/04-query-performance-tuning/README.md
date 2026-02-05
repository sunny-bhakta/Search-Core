# 04. Query Performance Tuning

Spot slow searches, trim their work, and cache what you can so users get answers fast.
It’s like tuning an engine.

### History Snapshot
- Early teams relied on default analyzers and sort orders, causing random slowdowns.
- Profilers and explain plans became available, so engineers could see exactly which clause was slow.
- Now teams pair tracing, caching, and circuit breakers to keep p95/p99 latency in check.

### Pros
- Faster responses improve conversion and user satisfaction.
- Lower CPU per query means you can serve more traffic on the same hardware.
- Observability from profiling helps prioritize roadmap work.

### Cons
- Over-optimizing one query can hurt another if they share caches or resources.
- Requires ongoing monitoring because data distributions change.
- Tuning often depends on search expertise that’s hard to hire.

### Production Apps With Tuned Queries
- Retailers pre-warm bestseller queries in caches before promotions.
- Dev-docs search limits complex regex clauses to protect cluster health.
- Streaming apps add circuit breakers so playlist searches time out instead of crashing shards.

### Tiny Example
- **Input:** slow query filter stack = `brand:Acme AND price:<50 AND color:blue`, measured p95 = 420 ms.
- **Output steps:**
	1. Turn on a filter cache for `brand:Acme` so repeated brand filters hit memory instead of disk.
	2. Remove an unused sort clause so Lucene (the search engine library underneath Elasticsearch/Solr/OpenSearch) doesn’t build extra priority queues.
	3. Add a 300 ms timeout/circuit breaker that logs a warning if the query still overruns.
	4. After the tweaks, p95 drops to ~180 ms, and any timeouts now show up in logs with the query ID.
