# 04. JSON & Document Support

Overview: use `jsonb` plus expression/GIN indexes to store semi-structured documents and query them quickly.

### Description
- Store raw payloads in `jsonb` columns.
- Create expression indexes on frequently accessed paths or use GIN `jsonb_path_ops` for general filtering.
- Enforce shape with CHECK constraints or generated columns referencing JSON fields.

### History Snapshot
- `json` type arrived in 9.2, `jsonb` (binary) in 9.4 enabling efficient indexing.
- Subsequent releases added JSON path, subscripting, and better GIN performance.
- Today, many teams use PostgreSQL as a document store with moderate scale.

### Pros
- Mix relational and document data in one database.
- Easy to ingest arbitrary fields without schema migrations.
- Works well for search metadata or feature flags.

### Cons
- Poorly designed indexes lead to slow queries.
- Large JSON payloads bloat tables if not archived.
- Validation logic is manual compared to schema-first stores.

### Production Apps
- Event logging tables storing request context.
- Search metadata caches storing facet stats per tenant.
- Feature rollout configs shared between services.

### Tiny Example
- **Input:** `jsonb` doc `{ "category": "eco", "price": 45 }`.
- **Output steps:**
	1. Generated column `category_text = (doc->>'category')`.
	2. Create B-tree index on `category_text`.
	3. Query filters use index even though source is JSON.
