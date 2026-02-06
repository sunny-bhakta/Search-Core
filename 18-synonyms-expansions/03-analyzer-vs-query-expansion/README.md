# 03. Analyzer-Time vs. Query-Time Expansion

Overview: decide whether to apply synonyms while indexing documents, handling queries, or both.

### Description
- Analyzer-time: expand during indexing so documents already include synonyms.
- Query-time: expand user queries dynamically for flexible experiments.
- Hybrid: keep core synonyms baked into the index and try risky ones at query time.

### History Snapshot
- Early systems only supported index-time expansion, causing index bloat.
- Query-time hooks enabled A/B testing without full reindex.
- Today, teams mix both to balance storage, recall, and experimentation.

### Pros
- Index-time ensures consistent scoring and works offline.
- Query-time lets you turn synonyms on/off instantly.
- Hybrid captures the best of both worlds.

### Cons
- Index-time increases index size and reindex cost.
- Query-time adds latency and requires careful caching.
- Managing two pipelines can be complex.

### Production Apps
- Retailers bake color synonyms into indexes but test seasonal phrases at query time.
- Documentation search keeps legal synonyms only at query time for compliance control.
- Media apps store movie nicknames index-side, while promos use query-side toggle.

### Tiny Example
- **Input:** query = "tee".
- **Output steps:**
	1. Query layer adds synonym "t-shirt".
	2. Search runs for both terms.
	3. Results include items tagged with either word even if index lacks both.
