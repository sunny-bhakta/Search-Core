# 06. Columnar Analytics & Aggregations

Overview: offload heavy group-bys and dashboards to columnar engines while search handles fast filtering.

### Description
- Mirror raw events into an OLAP store (ClickHouse, Druid, DuckDB) for aggregations.
- Share lookup tables or cache layers between search and analytics.

### History Snapshot
- Search clusters once served both queries and analytics, causing slowdowns.
- Columnar companions separated workloads with better compression.
- Unified APIs now stitch row-level hits with summary charts.

### Pros
- Keeps search latency low during reporting spikes.
- Columnar storage compresses metrics cheaply.
- Enables richer dashboards without hurting user queries.

### Cons
- Data duplication means more ETL.
- Lag between search and analytics copies can confuse users.
- Developers must maintain two query paths.

### Production Apps
- Marketplaces stream click logs into Druid for merch dashboards.
- SaaS platforms use ClickHouse to aggregate per-tenant search KPIs.
- Newsrooms power “most read” widgets via OLAP while search stays lean.

### Tiny Example
- **Input:** need top categories sold today plus live search results.
- **Output steps:**
	1. Search API returns current hits.
	2. Columnar query counts items per category.
	3. Frontend merges lists so users see both detail and summary.
