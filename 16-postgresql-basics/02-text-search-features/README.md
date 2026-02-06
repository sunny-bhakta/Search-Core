# 02. Text Search Features

Overview: use PostgreSQL built-in full-text search (fts) tools to index and rank text without external engines.

### Description
- Use `tsvector` to store tokenized documents and `tsquery` to search.
- Customize dictionaries, stopwords, and synonyms per language.
- Rank hits with `ts_rank` or `ts_rank_cd` and highlight with `ts_headline`.

### History Snapshot
- FTS landed in PostgreSQL 8.3 after living in contrib modules.
- Dictionaries and configurations expanded with 9.x releases.
- Extensions like `pg_trgm` and `pgvector` now complement built-in FTS.

### Pros
- Everything lives inside PostgreSQL; no extra infra.
- Rich language support via dictionaries.
- Combines structured filters and text search in one query.

### Cons
- Not as advanced as dedicated engines for very large corpora.
- Index build times grow with long documents.
- Requires manual trigger/materialized view upkeep.

### Production Apps
- Knowledge bases with moderate volume (hundreds of thousands of docs).
- Internal tools combining metadata filters with search.
- Feature flags or audit logs stored directly in PostgreSQL.

### Tiny Example
- **Input:** `tsvector` from "reset smart lock".
- **Output steps:**
	1. Query `tsquery='reset & lock'`.
	2. `ts_rank` returns relevance score.
	3. App shows snippet using `ts_headline`.
