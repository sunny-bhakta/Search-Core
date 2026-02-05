# 04. Alerting & Runbooks

teach alarms what to watch and give humans a short checklist to fix it.

### Description
- Pair each alert with owner, severity, and first actions.
- Cover both resource saturation (CPU, heap) and functional SLOs (p95 latency).

### History Snapshot
- Pager alerts once screamed for every minor spike.
- Teams added severity tiers and on-call rotations.
- Runbooks with screenshots and scripts made responses repeatable.

### Pros
- Faster response because people know exactly what to do.
- Prevents duplicate slack pings when multiple alerts stem from same root cause.
- Helps new teammates ramp into on-call safely.

### Cons
- Stale runbooks waste time.
- Too many alerts cause “ignore everything” behavior.
- Auto-mitigation steps may hide real bugs if overused.

### Production Apps
- Search SLO alerts ping `#search-incidents` with links to Grafana + doc.
- Caches auto-flush if hit rate drops under 60% but still notify a human.
- Traffic-split alerts show suggested scaling command inline.

### Tiny Example
- **Input:** alert rule `name=p95_latency_high`, threshold `300 ms` for 5 minutes.
- **Output steps:**
	1. Pager fires, includes runbook link.
	2. On-call runs step 1: check cache hit chart; sees drop.
	3. They restart cache tier per runbook step 2; alert clears.
