# 03. Index Types

Overview: pick the right PostgreSQL index (B-tree, GIN, GiST, BRIN, SP-GiST) based on data shape and query patterns.

### Description
- B-tree covers equality and range on scalar columns.
- GIN excels at arrays, JSONB, and full-text search.
- GiST handles geometric, network, and custom types; BRIN suits append-only tables; SP-GiST targets partitioned key spaces.

### History Snapshot
- B-tree has existed since early releases.
- GIN/GiST matured through 8.x and 9.x, enabling FTS.
- BRIN (9.5) and SP-GiST expanded coverage for massive tables and specialized workloads.

### Pros
- Tuned indexes cut latency drastically.
- Partial indexes and covering indexes save space.
- Multiple index families let search workloads stay in Postgres.

### Cons
- Maintaining too many indexes slows writes.
- GIN indexes can bloat without vacuum care.
- Picking the wrong type wastes storage.

### Production Apps
- E-commerce stores use GIN on tags and JSON filters.
- Time-series workloads rely on BRIN for log tables.
- GIS apps use GiST/PostGIS for location queries.

### Tiny Example
- **Input:** table with `tags text[]`.
- **Output steps:**
	1. Create GIN index on tags.
	2. Query `WHERE tags @> ARRAY['eco']` uses index.
	3. Response returns quickly even on millions of rows.
