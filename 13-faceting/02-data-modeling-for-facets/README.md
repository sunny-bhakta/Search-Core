# 02. Data Modeling for Facets

Overview: store facet values in the index so filters stay fast, accurate, and easy to aggregate.

### Description
- Choose field types: keyword arrays for tags, nested docs for attributes, numeric fields for ranges.
- Normalize every value (case, accents, plural) before indexing.
- Keep source-of-truth schema docs so ingestion jobs know how to map data.

### History Snapshot
- Legacy systems stuffed all metadata into one text blob, making facets impossible.
- Columnar stores and document databases added arrays + nested types for filtering.
- Modern pipelines validate documents against JSON Schemas or Avro before indexing.

### Pros
- Accurate counts because fields match data types.
- Simplifies ingestion debugging since schemas are clear.
- Enables advanced filters like ranges or multi-select without hacks.

### Cons
- Schema migrations can be painful if data volume is huge.
- Nested fields may increase index size.
- Requires strict validation; bad data corrupts aggregation results.

### Production Apps
- Marketplaces store color/size arrays for apparel.
- Real estate portals model nested features (rooms, amenities) per listing.
- Streaming services store genre arrays and maturity ratings for filtering.

### Tiny Example
- **Input:** product document with `{ "brand": "Acme", "colors": ["red", "blue"] }`.
- **Output steps:**
	1. Ingestion maps brand to keyword field, colors to keyword array.
	2. Index stores normalized values (lowercase, trimmed).
	3. Facet query counts red vs. blue accurately.
