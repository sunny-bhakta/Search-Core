# 04. Ingestion Pipelines

Overview: preprocess documents with ingest nodes before they land in an index.

### Description
- Chain processors (grok, dissect, set, rename, lowercase, remove, enrichment) to clean documents.
- Handle branching logic with conditionals and route failures into dead-letter queues.
- Keep pipelines idempotent so replays do not create duplicates.

### History Snapshot
- Initially, ingest logic lived outside Elasticsearch (Logstash, custom ETL scripts).
- Ingest nodes arrived in 5.0, bringing pipelines closer to the cluster.
- Newer releases added enrich processors, geo-IP databases, and s3/gcs DLQ integrations.

### Pros
- Centralizes transformation logic for simplified operations.
- Reduces load on external ETL services.
- Lets you test pipelines via `_simulate` before production rollouts.

### Cons
- Resource-heavy pipelines can starve data nodes if ingest and data roles are shared.
- Debugging nested processors is tricky when errors are swallowed.
- Conditional logic can become complex spaghetti.

### Production Apps
- Log analytics normalize heterogeneous log formats via grok + rename.
- E-commerce pipelines enrich products with category lookups before indexing.
- Customer data platforms geocode addresses and expand lat/long fields.

### Tiny Example
1. Define a pipeline with grok parsing `"GET /cart"` logs and setting `http.method`.
2. Add a `set` processor to flag VIP traffic if the user ID matches a list.
3. Run `_ingest/pipeline/_simulate` with sample payload to ensure the output fields are correct.
