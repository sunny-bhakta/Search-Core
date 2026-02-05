# 03. CI/CD Pipelines

Overview: automate builds, tests, and deploys so schema changes and code ship the same way every time.

### Description
- Include unit, integration, synthetic load, and canary steps before production.
- Canary deploy = roll out to a small slice (for example 10% of nodes) and watch latency/error metrics before pushing to everyone.
- Support blue/green or rolling rollouts plus feature flags for gating.

### History Snapshot
- Manual deploys caused downtime from missed steps.
- Jenkins/GitLab pipelines standardized build + deploy flows.
- Progressive delivery platforms now provide automatic canary analysis.

### Pros
- Safer releases with repeatable gates.
- Faster iteration because pipelines run on every PR.
- Easy rollbacks using stored artifacts and scripted undo steps.

### Cons
- Complex pipelines can be slow or flaky.
- Requires maintenance when dependency versions change.
- Secrets in pipelines must be guarded.

### Production Apps
- Search platforms run analyzer regression tests in CI before pushing configs.
- Hosted services deploy new schemas via blue/green to limit impact.
- Feature flag systems integrate with pipelines to flip toggles post-canary.

### Tiny Example
- **Input:** new analyzer config PR merges.
- **Output steps:**
	1. Pipeline runs unit + integration tests.
	2. Canary deploy updates 10% of nodes, monitors latency.
	3. If metrics stay green, pipeline promotes change to 100% and tags release.
