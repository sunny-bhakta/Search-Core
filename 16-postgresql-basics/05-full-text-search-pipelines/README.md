# 05. Full-Text Search Pipelines

Overview: keep `tsvector` columns fresh using triggers or materialized views so PostgreSQL FTS stays accurate.

### Description
- Create `tsvector` columns computed from text fields.
- Use triggers on INSERT/UPDATE to regenerate vectors.
- Optionally build materialized views for heavy aggregations and refresh on schedule.

### History Snapshot
- Early setups ran nightly jobs to refresh `tsvector` columns manually.
- Triggers and generated columns automated FTS pipelines.
- Tools like `pg_cron` and logical decoding now feed external search systems too.

### Pros
- Automates indexing inside PostgreSQL.
- Supports highlight/snippet generation in the same query.
- Simplifies read models for moderate datasets.

### Cons
- Trigger overhead slows heavy write workloads.
- Materialized view refreshes must be scheduled carefully.
- No built-in ranking learning; manual tuning needed.

### Production Apps
- Helpdesk apps maintain `tsvector` for tickets.
- ERP modules search invoices with combined filters + FTS.
- Developer tools run `ts_headline` to highlight code snippets.

### Tiny Example
- **Input:** new support article.
- **Output steps:**
	1. Trigger updates `tsvector` column.
	2. Query `tsquery` finds article instantly.
	3. `ts_headline` highlights matches in UI.
