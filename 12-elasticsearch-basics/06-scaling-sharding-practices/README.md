# 06. Scaling & Sharding Practices

Overview: right-size primary shards, replicas, and lifecycle policies as data volume grows.

### Description
- Estimate shard size targets (20-50 GB hot shards) and choose primary counts to match retention windows.
- Use Index Lifecycle Management (ILM) or manual rollover to keep shard counts balanced.
- Employ `cluster.reroute`, shrink/split APIs, and shard allocation filters to redistribute load.

### History Snapshot
- Early clusters over-sharded by default (5 primaries) and suffered from tiny shards.
- ILM debuted in 6.6, automating rollover and warm/cold transitions.
- 7.x+ improved autoscaling hints and searchable snapshot tiers.

### Pros
- Predictable shard sizes prevent hot spotting and GC storms.
- Replicas deliver high availability and faster search throughput.
- Shrink/split workflows let you migrate between hot and warm tiers with minimal downtime.

### Cons
- Changing shard counts usually requires reindexing or rollovers.
- Too many small shards waste heap and CPU.
- Cross-cluster replication and searchable snapshots add operational complexity.

### Production Apps
- Logging clusters roll daily indices with ILM to age into warm object storage.
- Commerce search rotates monthly catalog indices and shrinks old ones for archive queries.
- SaaS multi-tenant setups pin shards to hardware pools using allocation filters.

### Tiny Example
1. Forecast that 300 GB/month needs 6 shards at 50 GB each.
2. Configure rollover at 45 GB or 25 days, whichever comes first.
3. Schedule a `cluster.reroute` command to move shards off nodes before adding replacements.
