# 09. Sustainability & GreenOps for Search

Overview: design search infrastructure to use fewer resources, shift workloads to renewable-friendly regions, and report carbon metrics.

### Description
- Right-size indexes, replicas, and retention periods so unused capacity is recycled.
- Schedule heavy reindexing and embedding refreshes when renewable energy is abundant.
- Publish power metrics per query so product teams understand the cost of extra features.

### History Snapshot
- Search farms once ran at full tilt 24/7 regardless of demand.
- Cloud platforms introduced carbon-aware regions and workload placement APIs.
- GreenOps teams now align SLAs with sustainability targets, sharing dashboards with leadership.

### Pros
- Cuts infrastructure bills alongside carbon emissions.
- Builds brand trust for eco-conscious customers.
- Forces thoughtful retention, improving data governance.

### Cons
- Requires accurate telemetry across datacenters and clouds.
- May limit burst capacity if you aggressively right-size clusters.
- Trade-offs between latency and green energy availability can be contentious.

### Production Apps
- Media platforms shift nightly video reindexing to renewable-powered regions.
- Enterprise search clusters auto-scale down on weekends to conserve energy.
- SaaS vendors expose "carbon per search" metrics inside admin portals.

### Tiny Example
- **Input:** reindex job needs 100 CPU-hours.
- **Output steps:**
	1. Scheduler looks up hourly carbon intensity per region.
	2. Chooses the lowest-emission window (e.g., 2 AM in Oregon) and runs there.
	3. Dashboard logs energy saved versus default region choice.
