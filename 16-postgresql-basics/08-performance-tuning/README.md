# 08. Performance Tuning

Overview: tune PostgreSQL configs and queries (EXPLAIN, memory settings, pooling) so search-related workloads stay fast.

### Description
- Use `EXPLAIN (ANALYZE, BUFFERS)` to inspect query plans.
- Adjust `work_mem`, `shared_buffers`, `effective_cache_size` based on workload.
- Add PgBouncer or prepared statements to control connections.

### History Snapshot
- Default configs were conservative, forcing manual tuning.
- Extensions like `pg_stat_statements` improved visibility.
- Cloud services now provide auto-tuning hints but understanding fundamentals still matters.

### Pros
- Correct memory settings reduce temp disk usage.
- Connection pooling prevents backend exhaustion.
- Query plan analysis guides index strategy.

### Cons
- Mis-tuning can cause instability.
- Requires continuous monitoring as data grows.
- Tuning knobs differ across hosting providers.

### Production Apps
- Search APIs pool connections and reuse prepared statements for repeated filters.
- Analytics teams monitor top queries via `pg_stat_statements` for index suggestions.
- Multi-tenant SaaS tunes per-tenant work_mem for heavy filters.

### Tiny Example
- **Input:** slow query.
- **Output steps:**
	1. Run `EXPLAIN ANALYZE`.
	2. See Seq Scan on large table.
	3. Add index or increase `work_mem`, re-check plan.
