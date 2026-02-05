# 02. Sharding & Routing Strategy

Decide how many slices your index should have and how documents/queries are routed so hotspots stay isolated.
Think of it as seating charts for data.

### History Snapshot
- Early clusters defaulted to a handful of shards, which later proved too small or too large.
- Engineers began sizing shards by data volume and retention window, not just defaults.
- Mature teams document routing keys (tenant, geography, doc type) and rehearse split/merge procedures.

### Pros
- Right-sized shards keep heap usage balanced and search latency predictable.
- Deterministic routing (like `tenantId`) keeps related data on the same shards, improving cache hits.
- Clear runbooks for splitting/merging reduce downtime during growth.

### Cons
- Too many shards waste memory and slow cluster coordination.
- Poor routing keys can create hotspots that force emergency rebalancing.
- Resharding requires careful planning, especially for large historical indexes.

### Production Apps Using Smart Sharding
- Multi-tenant SaaS products hash on tenant ID to guarantee noisy neighbors stay isolated.
- News sites route by geography to keep local content warm in cache.
- Analytics platforms split shards by time window (daily, weekly) for easier archiving.

### Tiny Example
- **Input:** 12 TB of data, goal of ~50 GB per shard, heavy traffic from tenants A and B.
- **Output:**
	1. Compute shard count: `ceil(12,000 GB / 50 GB) = 240` total shards.
	2. Set routing key = `tenantId` so each tenant sticks to a predictable shard subset (improves cache locality).
	3. Add a runbook note: if any tenant consumes >30% of its shard, split or rehash that tenant to new shards before it becomes a hotspot.
	4. When you print sample tenants, you might only see a few shard IDs (e.g., 72–74), but all shards 0–239 still exist in the cluster.
