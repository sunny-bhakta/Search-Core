# 01. Hybrid Storage Models

Overview: keep hot data in fast stores and cold data in cheap stores so search stays quick without wasting money.

### Description
- Mix row, column, document, and object stores based on access patterns.
- Define how data flows between hot (SSD), warm (HDD), and cold (object) tiers.

### History Snapshot
- Early systems stuffed everything into one database until it slowed down.
- Tiered storage plus lifecycle policies made archives cheaper.
- Modern architectures stream data between tiers automatically with audit logs.

### Pros
- Saves storage cost while keeping critical data fast.
- Lets you tune durability and replication per tier.
- Simplifies compliance by isolating PII to encrypted tiers.

### Cons
- Data movement adds complexity and failure modes.
- Queries that span tiers may have uneven latency.
- Requires monitoring so hot tiers do not silently fill up.

### Production Apps
- Retailers keep last 30 days of products in search SSDs and archive older catalog to object storage.
- Media companies pin trending videos in fast CDN caches and leave the rest in cold buckets.
- SaaS analytics vendors snapshot daily indices to cheap storage for legal hold.

### Tiny Example
- **Input:** 1 TB of hot data, 9 TB cold archive.
- **Output steps:**
	1. Keep 1 TB in a fast cluster for sub-100 ms searches.
	2. Move older docs to cold storage with a nightly job.
	3. When a user asks for old records, fetch from cold storage and rehydrate temporarily.
