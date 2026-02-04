# Indexing

End-to-end practices for ingesting, transforming, and storing searchable documents.

## 1. Source Discovery & Connectivity
- Enumerate upstream systems (DBs, object stores, APIs) and auth patterns.
- Define change detection (CDC, webhooks, polling) and freshness targets.
- Capture SLAs for source availability and latency.

## 2. Data Transformation Pipelines
- Normalize fields, enforce schemas, and derive computed values.
- Handle enrichment (taxonomies, geocoding, ML classification).
- Keep transformations idempotent and version-controlled.

## 3. Batch vs. Streaming Strategies
- Choose ingestion mode per dataset (full reindex, delta batch, streaming events).
- Manage ordering guarantees and backpressure signals.
- Support replay/recovery paths for missed updates.

## 4. Document Identity & Routing
- Decide on primary key format and partition routing logic.
- Ensure deterministic routing for updates/deletes.
- Record lineage metadata (source ID, sequence number).

## 5. Validation & Quality Gates
- Run schema validation, referential integrity, and PII checks before indexing.
- Sample documents post-index to confirm analyzers and boosts.
- Block deployments when validation fails.

## 6. Refresh & Commit Policies
- Tune refresh intervals per index (realtime vs. batch workloads).
- Coordinate flush/commit cycles with traffic patterns.
- Monitor translog/queue growth to detect stuck writers.

## 7. Error Handling & Dead-Letter Queues
- Categorize failures (transient, permanent) with retry strategies.
- Persist failed payloads + metadata for replay/debugging.
- Alert on error-rate thresholds.

## 8. Resource Management
- Allocate ingestion-specific nodes or pipelines separate from query path.
- Track CPU, heap, disk IO during heavy indexing windows.
- Scale horizontally/vertically ahead of major ingests.

## 9. Schema & Mapping Evolution
- Plan rolling migrations (alias swap, dual-write, reindex-from-remote).
- Version schemas and keep compatibility layers for old readers.
- Automate deprecation of unused fields/indexes.

## 10. Observability & Reporting
- Instrument throughput (docs/sec), latency, and lag metrics.
- Maintain dashboards for pipeline health and backlog.
- Provide executive-friendly reports (freshness, coverage, error trends).

### Suggested Next Steps
- Diagram your current indexing flow and map it to this checklist.
- Implement one automated validation step (schema or quality) if missing.
- Schedule periodic reindex readiness drills to ensure smooth migrations.
