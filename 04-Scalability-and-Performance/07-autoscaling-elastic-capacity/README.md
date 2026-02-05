# 07. Autoscaling & Elastic Capacity

Let a script add or remove search nodes when metrics say the cluster is too busy or wasting money.
Think of it as cruise control for capacity.

### History Snapshot
- Early teams paged humans to add nodes manually, so bursts caused stress.
- Cloud APIs let scripts add nodes when CPU crossed a threshold.
- Mature shops now predict spikes (seasonality) and include drain/rollback steps so scaling is safe.

### Pros
- Saves money by shrinking during quiet hours.
- Improves uptime because bursts are handled automatically.
- Forces you to document which signals (CPU, heap, queue lag) matter most.

### Cons
- Broken metrics or bugs can cause constant scale up/down (thrash).
- Stateful services need drain steps, which complicates automation.
- Needs strict IAM so only the scaler can touch nodes.

### Production Apps Using Autoscaling
- Hosted search services add nodes when p95 latency exceeds 250 ms for 5 minutes.
- Retailers pre-scale every Friday night before weekend spikes.
- Analytics vendors shrink cold tiers overnight to save on storage costs.

### Tiny Example
- **Input:** rule = “add 2 data nodes when CPU > 70% and queue lag > 500 for 10 minutes.” Current metrics: CPU 76%, lag 640.
- **Output steps:**
	1. Rule fires because CPU and queue lag are both over the threshold for 10+ minutes.
	2. Autoscaler API call spins up 2 nodes, tags ticket `AUTO-42` for traceability.
	3. Slack message posts “Scaled by +2 nodes (CPU 76%, lag 640)” so humans know a burst is in progress.
