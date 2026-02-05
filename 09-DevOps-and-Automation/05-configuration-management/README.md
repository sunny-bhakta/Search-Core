# 05. Configuration Management

Overview: store every cluster setting, feature flag, and runtime knob in a central, versioned system.

### Description
- Keep configs in Git or key-value stores with schema validation.
- Provide self-service toggles guarded by approval rules.

### History Snapshot
- Configs once lived in wikis or local files, causing drift.
- Central registries with audit logs replaced ad-hoc edits.
- Validation pipelines now block bad configs before rollout.

### Pros
- Easy rollback by reverting a commit.
- Consistent settings across environments.
- Clear audit trail of who changed what.

### Cons
- Central outages can block deploys.
- Requires tooling to prevent secret leakage.
- Review queues may slow urgent fixes.

### Production Apps
- Search ops store analyzers, stop words, and feature flags in GitOps repos.
- Mobile teams toggle autocomplete experiments via config service.
- Compliance teams review config diffs weekly.

### Tiny Example
- **Input:** need to raise `max_connections` from 500 to 600.
- **Output steps:**
	1. Edit config file, submit PR with reason.
	2. CI validates schema and tests staging rollout.
	3. Merge auto-syncs change to prod, audit log records the update.
