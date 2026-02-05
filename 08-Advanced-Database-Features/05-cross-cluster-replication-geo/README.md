# 05. Cross-Cluster Replication & Geo Distribution

Overview: keep copies of search data in multiple regions so users get low latency and disasters do not take you offline.

### Description
- Configure leader/follower or multi-master replication between clusters.
- Decide consistency policy (async, semi-sync) per workload.

### History Snapshot
- Single-region clusters went dark during outages.
- Async followers added read-only DR copies.
- Bi-directional replication now powers active-active footprints.

### Pros
- Better latency for global users.
- Higher availability when one region fails.
- Lets you meet data residency regulations.

### Cons
- Conflict resolution is tricky with multi-master writes.
- Replication lag can show stale data.
- Operational cost rises with more clusters.

### Production Apps
- Streaming platforms host search in Americas, EU, APAC with traffic steering.
- Payment providers keep hot-standby clusters for compliance zones.
- Collaboration tools run active-active clusters with vector clocks.

### Tiny Example
- **Input:** write lands in region A, replication lag target 2 seconds.
- **Output steps:**
	1. Region A logs change and ships to region B.
	2. Region B applies update within 1.5 seconds and marks checkpoint.
	3. Health dashboard shows `lag=1.5s`, still below budget.
