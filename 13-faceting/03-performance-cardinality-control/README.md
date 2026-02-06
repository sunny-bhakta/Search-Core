# 03. Performance & Cardinality Control

Overview: keep facet queries fast by managing how many unique values exist and how they are computed.

### Description
- Measure unique values per facet; split huge ones into buckets or ranges.
- Cache popular facet combinations or precompute summaries for homepages.
- Tune shard sizes, sampling, or result window settings to balance accuracy and speed.

### History Snapshot
- Early faceting engines crashed when asked for millions of unique values.
- Search vendors added `shard_size`, `execution_hint`, and caching knobs.
- Edge caches and query planners now pre-warm common filter combos.

### Pros
- Stable latency even during peak traffic.
- Predictable resource usage for scaling decisions.
- Better UX because facet panels populate instantly.

### Cons
- Bucketing can hide rare but important values.
- Caching stale data leads to incorrect counts.
- Requires continuous monitoring as catalogs grow.

### Production Apps
- Retailers bucket price facets into 0-25, 25-50, etc. for speed.
- SaaS dashboards precompute top filter combos for landing pages.
- News sites cache "today" filters every few minutes.

### Tiny Example
- **Input:** raw "color" facet has 5,000 unique shades.
- **Output steps:**
	1. Split into buckets ("red family", "blue family").
	2. Cache the summarized counts.
	3. UI returns grouped counts in under 50 ms.
