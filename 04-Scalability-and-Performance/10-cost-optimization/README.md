# 10. Cost Optimization

Know what each node or storage tier costs, then trim the fat (right-size, compress, cache) without breaking SLAs.
It’s thrift shopping for search infra.

### History Snapshot
- Early teams only cared about uptime, so clusters ran half-empty.
- Finance asked for proof of spend, so tagging and cost reports emerged.
- Now FinOps dashboards show spend per product, and teams quantify ROI for each tweak.

### Pros
- Frees budget for new features.
- Encourages healthy utilization targets (60–70% instead of 20%).
- Builds a shared language between finance and engineering.

### Cons
- Cutting too much hurts reliability.
- Needs accurate cost tagging, which takes effort to maintain.
- Savings experiments need rollback plans if performance drops.

### Production Apps Optimizing Cost
- Hosted search offerings use spot nodes for stateless tiers with auto replacement.
- E-commerce teams archive “cold” indices to object storage and rehydrate only when needed.
- Analytics vendors compare query rewrites vs. adding hardware and pick the cheaper win.

### Tiny Example
- **Input:** monthly cost per data node = $800, fleet = 12 nodes at 45% average CPU, target utilization = 65%.
- **Output steps:**
	1. Divide 12 nodes × 45% = 540 “CPU points.” To hit 65%, you need 540 / 65% ≈ 8.3 nodes.
	2. Round up to 9 nodes, so you can remove 3 nodes if you consolidate shards + enable a cache tweak.
	3. Savings = 3 nodes × $800 = $2,400/month while still meeting the 65% goal.
