# Index Maintenance
- Index maintenance keeps search data fresh without slowing queries.
- It means adding/removing documents, compacting segments, and evolving schemas safely.
- Imagine a warehouse where you keep shelving new boxes, tossing expired ones, and rearranging aisles without blocking shoppers.

## Tiny Example (Input → Output)

```
Initial daily buckets:
	logs_2024-05-01 -> 2 GB
	logs_2024-05-02 -> 3 GB
	logs_2024-05-03 -> 1 GB

New events arrive:
	+0.5 GB for 2024-05-03
	+0.2 GB for 2024-05-04 (new bucket)

Maintenance steps:
1. Flush 2024-05-03 in-memory buffer to disk (now 1.5 GB)
2. Create logs_2024-05-04 segment and start writing into it
3. Retention policy “keep 3 days” → delete logs_2024-05-01
4. Update alias `current_logs` to point at 2024-05-02…04

Final layout:
	logs_2024-05-02 -> 3 GB
	logs_2024-05-03 -> 1.5 GB
	logs_2024-05-04 -> 0.2 GB (open segment)
```

Result: hot data stays in small, fast buckets, old data is reclaimed, and queries keep flowing.

## Use Cases
- Search engines ingesting nonstop crawls or event streams.
- E-commerce catalogs refreshing price and inventory every few minutes.
- Log pipelines rolling hourly/daily indexes and expiring old data.
- Compliance “forget me” requests that delete specific docs.
- Schema migrations when new fields or analyzers go live.

## History
- Early search stacks rebuilt the entire index overnight (batch jobs).
- Lucene introduced segment append + background merges.
- Cloud search (Elasticsearch/OpenSearch) layered on aliases, snapshots, rolling upgrades.
- Near-real-time indexing (refresh intervals, translogs) brought latency down to seconds.

## Production Applications
- Elasticsearch hot-warm-cold architectures with ILM policies
- Algolia/SaaS search offering atomic index swaps via replicas
- Splunk/Datadog log retention policies auto-expiring cold data
- GitHub code search reindexing repos incrementally when pushes land

## Pros
- Keeps search results in sync with source-of-truth systems
- Segment/merge strategies optimize disk usage and query speed
- Schema evolution allows experimentation without downtime

## Cons
- Bad merge policies can blow up disk/CPU usage
- Incomplete deletions risk compliance issues
- Schema changes may require reindexing billions of docs
- Operational mistakes (wrong alias, dropped index) can cause outages

## Hands-on Objectives
1. Simulate append-only segments + background merge thresholds; track disk vs. query latency.
2. Implement document delete/tombstone handling and verify queries reflect removals.
3. Practice a schema migration by cloning an index, reindexing with a new mapping, and swapping aliases.