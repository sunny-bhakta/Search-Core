# 10. Cost & Efficiency Observability

 watch what each query, tenant, and replica costs so you can trim waste without surprises.

### Description
- Tag metrics with node type, tenant, and feature flag.
- Track cache hit rate, shard balance, and replica usage next to dollar signs.

### History Snapshot
- Infra teams once saw only total cloud bills at month end.
- Cost dashboards per service exposed hotspots.
- FinOps loops now tie alerts directly to spend anomalies.

### Pros
- Finds cheap wins (resize nodes, drop unused replicas).
- Informs pricing and capacity talks with finance.
- Stops silent cost creep after new features launch.

### Cons
- Needs tagging discipline across every resource.
- Cost data can lag behind real usage.
- Over-optimizing may hurt reliability.

### Production Apps
- Hosted search products chart cost/query and alert when it spikes >20%.
- Retailers monitor warm vs. cold tier storage spend per catalog.
- ML-powered search teams track GPU hours per experiment.

### Tiny Example
- **Input:** cost dashboard shows tenant B spends $0.12/query vs. average $0.05.
- **Output steps:**
	1. Drill down to see tenant B uses extra replicas due to bad shard balance.
	2. Rebalance shards + enable compression.
	3. Cost falls to $0.06/query, alert closes.
