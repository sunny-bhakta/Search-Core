# Elasticsearch Basics

Quick notes for standing up, configuring, and operating Elasticsearch clusters.

## 1. Cluster Fundamentals
- Understand node roles (master, data, ingest, coordinating) and responsibilities.
- Configure discovery, quorum, and cluster-level settings (watermarks, GC, thread pools).
- Monitor cluster health states (green/yellow/red) and required actions.

## 2. Index & Mapping Basics
- Define mappings with correct data types, analyzers, and dynamic field policies.
- Use templates/component templates for consistent schema rollout.
- Validate mappings with sample documents before production.

## 3. Query DSL Essentials
- Practice match/multi-match, bool queries, term-level filters, and aggregations.
- Understand scoring, explain output, and query rewrite phases.
- Leverage search templates or stored scripts for reuse.

## 4. Ingestion Pipelines
- Build ingest pipelines with processors (grok, set, rename, enrich, etc.).
- Handle retries, DLQs, and idempotent upserts for reprocessing.
- Benchmark pipeline throughput and latency impact.

## 5. Aggregations & Analytics
- Use bucket vs. metric aggs, pipeline aggs, and composite aggregations for pagination.
- Watch for memory usage (shard_size, circuit breakers) when running heavy aggs.
- Cache or precompute where feasible.

## 6. Scaling & Sharding Practices
- Choose shard/replica counts relative to data size and retention.
- Use ILM or rollover APIs to control shard sizes and performance.
- Rebalance shards proactively with `cluster.reroute` or shrink/split workflows.

## 7. Observability & Management Tools
- Install Metricbeat/Filebeat or Elastic Agent for telemetry.
- Use Kibana/Console for debugging queries and monitoring nodes.
- Capture snapshots and keep disaster-recovery scripts nearby.

## 8. Security Features
- Enable TLS, user/role management, and auditing via Elastic security features.
- Configure field- and document-level security where licensed.
- Keep watch for CVEs and patch recommendations.

## 9. Upgrades & Compatibility
- Follow rolling upgrade guides; test in staging with representative data.
- Track breaking changes between major versions (APIs, defaults, plugins).
- Use Upgrade Assistant or `deprecation` APIs to prepare ahead of time.

## 10. Ecosystem Integrations
- Connect with Logstash, Beats, Kafka, or custom producers.
- Expose data to Kibana, Canvas, Lens, and other visualization tools.
- Evaluate hosted offerings (Elastic Cloud, OpenSearch Service) vs. self-managing.

### Suggested Next Steps
- Spin up a local or sandbox cluster and practice key APIs from the list above.
- Document your default index template and ILM policy for reuse.
- Schedule regular health checks covering cluster stats, security, and backups.
