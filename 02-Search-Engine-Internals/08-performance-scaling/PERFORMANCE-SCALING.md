# Performance & Scaling

- Performance and scaling work keeps queries fast even as data and traffic explode.
- You juggle caching, sharding, replication, and hardware knobs to stay within SLAs.
- Think of one search box being secretly powered by many nodes that take turns to keep things snappy.

## Tiny Example (Input → Output)

```
Starting state:
	• Single shard handles 2k QPS @ p95 = 250 ms

Traffic spike:
	• Load jumps to 6k QPS, latency rises to 600 ms

Scaling steps:
1. Split into 3 shards (hash by user ID)
2. Add 1 replica per shard for reads (now 6 nodes)
3. Enable query cache for top 20 hot terms

Result:
	• Each shard now serves ~1k QPS
	• Cached hits answer in 40 ms
	• p95 drops to 180 ms overall
```

By sharding + replicating + caching, the same workload becomes manageable again.

## Use Cases
- Web search engines serving millions of QPS globally
- Retail flash sales where query volume spikes 10×
- SaaS analytics dashboards running heavy aggregations
- Multi-tenant search clusters isolating noisy neighbors
- Disaster recovery setups needing cross-region replication

## History
- 2000s: Google’s early papers on shards/replicas inspired open-source systems
- 2010s: Elasticsearch/Solr popularized horizontal scaling on commodity hardware
- 2020s: Cloud-native managed search adds autoscaling, tiered storage, ARM/GPUs

## Production Applications
- Elasticsearch Routing + ILM + snapshot/restore features
- Algolia/Meilisearch multi-cluster deployments
- Cloud providers (OpenSearch Service, Azure Cognitive Search) with managed scaling knobs
- Streaming/log search (Splunk, Loki) balancing ingest vs. query workloads

## Pros
- Proper scaling keeps latency predictable and costs optimized
- Replication improves availability and read throughput
- Caching/filter bitsets reduce repeated work for hot queries

## Cons
- Shard mis-sizing leads to hotspots or wasted resources
- Cross-shard queries add coordination latency
- Replication/consistency settings complicate write paths
- Performance tuning is ongoing—workloads evolve

## Hands-on Objectives
1. Benchmark query latency with and without caching/filter-bitsets; record improvements.
2. Simulate sharding strategies (by doc ID, by tenant) and measure data skew + fan-out.
3. Experiment with replica counts / refresh intervals to balance write latency vs. read freshness.
