# 09. Observability & Cost Guardrails

watch the few metrics that tell you whether search is healthy and cheap enough, and set alerts/runbooks before things blow up.
It’s the dashboard + budget side of search operations.

### History Snapshot
- Early teams watched CPU/disk charts and missed search-specific problems.
- Engines exposed stats APIs, but dashboards were ad hoc and alerts had no owners.
- Now mature teams define SLOs, cost budgets, and runbooks in code repos.

### Pros
- Catches index bloat, latency spikes, or spend issues before customers notice.
- Shared dashboards keep product and infra folks aligned.
- Alerts with runbooks make on-call response faster.

### Cons
- Tracking everything leads to noisy alerts; you must pick the vital few.
- Cost tracking usually means wiring into billing APIs.
- If nobody owns an alert, people start ignoring it.

### Production Apps Using Guardrails
- Hosted search services show per-tenant dashboards for QPS, latency, and spend caps.
- News orgs watch “hot” tags (breaking news) to pre-scale clusters.
- SaaS backends auto-create tickets when storage growth blows past budget so archiving kicks in.

### Tiny Example
- **Input metrics:** `indexSize=120GB (budget 150)`, `cacheHit=0.82 (budget 0.8)`, `avgLatency=210ms (budget 200)`, `storageCost=$950 (budget $900)`.
- **Output:**
	1. Dashboard table marks `indexSize` and `cacheHit` as ✅ (within budget).
	2. `avgLatency` and `storageCost` get ❌ plus alert badges.
	3. Linked runbook steps say “scale cache nodes” for latency and “archive/delete old indices” for cost.

## Quick Checklist
- Track index size, segment compression, cache hit rate, and query latency.
- Watch “hot” fields that dominate CPU or heap.
- Set budgets for storage, ingest throughput, and reindex windows.
- Alert on trend lines, not just hard failures.
- Tie every alert to a small runbook.

## Mini Exercise
1. Mock up a dashboard with the four most important metrics for your cluster.
2. Flag a field with high cardinality and sketch a mitigation plan.
3. Write a short runbook entry for a storage budget breach.
