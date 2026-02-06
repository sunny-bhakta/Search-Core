# 09. Testing & Validation

Overview: test synonym changes offline and online before rolling them to everyone.

### Description
- Maintain regression suites for critical queries (brand names, compliance terms).
- Use canary clusters or feature flags to validate live traffic impact.
- Track click-through, conversion, and zero-result metrics tied to synonym usage.

### History Snapshot
- Synonyms once launched straight to production without checks.
- Canary clusters and query replay frameworks improved safety.
- Teams now bundle automated tests and dashboards with every change.

### Pros
- Prevents regressions on important queries.
- Gives stakeholders confidence via data.
- Faster rollback when issues arise.

### Cons
- Requires infrastructure for replay and metrics.
- Feature flags add complexity if not cleaned up.
- Tests need constant updates as catalogs change.

### Production Apps
- Retailers replay last week’s top 1k queries with new synonyms before launch.
- Legal search uses feature flags to expose expansions to internal users first.
- Streaming services monitor CTR before moving from canary to full rollout.

### Tiny Example
- **Input:** new synonym set.
- **Output steps:**
	1. Replay sample queries in staging.
	2. Launch to 10% traffic via flag.
	3. Promote to 100% only if metrics stay healthy.
