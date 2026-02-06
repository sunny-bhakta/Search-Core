# 02. Index & Mapping Basics

Overview: build stable schemas so documents are searchable, analyzable, and upgrade-friendly.

### Description
- Pick field types (keyword, text, date, scaled_float, dense_vector) that match usage patterns.
- Attach analyzers, normalizers, and multi-fields to capture both full-text and exact-match behavior.
- Lock down dynamic mapping rules (strict vs. runtime fields) to catch typos early.

### History Snapshot
- Elasticsearch 1.x inferred types implicitly; 2.x added stricter dynamic mapping controls.
- 5.x introduced the index template API; 7.x added composable templates and data streams.
- 8.x keeps evolving runtime fields and adds vector-native field types.

### Pros
- Predictable analyzers yield consistent scoring between clusters.
- Validated mappings prevent data corruption during ingestion.
- Templates speed up rollout across many indices.

### Cons
- Schema drift requires reindexing or aliases to fix.
- Too many fields inflate heap usage and slow cluster state updates.
- Misconfigured analyzers can silently degrade relevance.

### Production Apps
- E-commerce catalogs maintain strict multi-field mappings for SKU, title, and category.
- Security analytics teams store parsed logs with runtime fields for rare attributes.
- SaaS platforms template tenant-specific indices with shared mappings.

### Tiny Example
1. Define a mapping where `title` is `text` with `keyword` sub-field, and `price` is `scaled_float`.
2. Index `{ title: "Blue mug", price: 23.5 }` and confirm the analyzer tokenizes correctly.
3. Run a `term` query on `title.keyword` to verify exact matching.
