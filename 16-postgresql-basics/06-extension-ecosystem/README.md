# 06. Extension Ecosystem

Overview: extend PostgreSQL with extra search power via extensions like `pg_trgm`, `pgvector`, `ltree`, and `postgis`.

### Description
- Install extensions per database using `CREATE EXTENSION`.
- Track versions in migrations to keep environments aligned.
- Evaluate third-party extensions for support, license, and upgrade cadence.

### History Snapshot
- PostgreSQL’s contrib modules grew into first-class extensions (9.1+).
- `pg_trgm` boosted fuzzy matching; `postgis` drove geospatial adoption.
- Recent years introduced vector search (`pgvector`) for semantic workloads.

### Pros
- Unlocks advanced search features without leaving PostgreSQL.
- Modular: enable only what you need.
- Large community around popular extensions.

### Cons
- Requires upgrade/testing when PostgreSQL versions change.
- Third-party extensions may lag in security patches.
- Some hosting providers restrict custom extensions.

### Production Apps
- `pg_trgm` powering fuzzy name search in CRMs.
- `postgis` storing store locations for “near me” filters.
- `pgvector` enabling hybrid semantic search directly in SQL.

### Tiny Example
- **Input:** wanting cosine similarity search.
- **Output steps:**
	1. Install `pgvector`.
	2. Create `vector(3)` column.
	3. Query with `<#>` operator to find nearest neighbor.
