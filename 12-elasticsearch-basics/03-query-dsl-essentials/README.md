# 03. Query DSL Essentials

Overview: compose match, filter, and aggregation clauses that balance relevance and performance.

### Description
- Combine `bool` query clauses (must/should/filter/must_not) to separate scoring logic from filtering.
- Use `match`, `multi_match`, `term`, and `range` queries according to field types.
- Add aggregations in the same request when you need counts, histograms, or top hits.

### History Snapshot
- Early ES versions exposed Lucene query strings; the structured JSON DSL arrived to prevent parsing bugs.
- Function score queries added painless scripting hooks, later complemented by rank_feature and knn search.
- Query rewrite phases improved in 7.x+ to better optimize shards before execution.

### Pros
- Consistent JSON structure makes queries easy to test and templatize.
- Filters use bitsets, so frequently-used filters become very fast.
- Aggregations share the same request, reducing extra round-trips.

### Cons
- Deeply nested bool clauses can be hard to debug.
- Expensive aggregations can time out if shard sizes are huge.
- Scripting inside queries may hurt cache hit rates and slow coordination nodes.

### Production Apps
- News sites combine `must` (topic), `should` (recency boosts), and `filter` (language) clauses.
- Security products blend exact IP filters with text-based `match` clauses for analyst consoles.
- Retail search exposes faceted navigation by attaching aggregations to search queries.

### Tiny Example
1. Build a bool query with `must: match title`, `filter: term category`, and an inline `range` on price.
2. Attach a `terms` aggregation on `brand.keyword`.
3. Review the `_explain` output to confirm why the top hit scored highest.
