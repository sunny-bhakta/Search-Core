# 07. Quality Gates in CI/CD

run automatic checks before deployment so bad configs never reach production.

### Description
- Add schema validation, analyzer snapshots, and fixture queries to your pipeline.
- Fail the build if metrics or logs drift outside safe ranges.

### History Snapshot
- Manual deploys skipped tests and caused long nights.
- CI hooks started running smoke suites per commit.
- Today, pipelines compare telemetry before vs. after and pause if risky.

### Pros
- Reduces incidents from obvious mistakes.
- Gives confidence to ship faster.
- Creates a paper trail for audits.

### Cons
- Slower pipelines if gates take too long.
- False positives frustrate engineers.
- Requires upkeep as schemas evolve.

### Production Apps
- Search teams replay top 50 user queries in CI and diff the results.
- Pipelines block deploys if bundle size or qps budget regresses.
- Feature flags only flip after gates report green.

### Tiny Example
- **Input:** CI job runs `npm test search-smoke` on new branch.
- **Output steps:**
	1. Fixture query `"red shoes"` now returns zero results.
	2. Gate fails the build, posting comment on the PR.
	3. Developer fixes analyzer config, reruns pipeline, gate passes and deploy proceeds.
