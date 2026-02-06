# 09. Upgrades & Compatibility

Overview: plan rolling upgrades, test breaking changes, and keep clients aligned with server versions.

### Description
- Review release notes, deprecations, and plugin compatibility before touching production.
- Run Upgrade Assistant, `_migration/deprecations`, or Kibana’s UI to find risky configs.
- Use rolling restarts (disable shard allocation, stop node, upgrade, rejoin) to avoid downtime.

### History Snapshot
- Early upgrades were painful due to index format changes and no rolling strategy.
- 5.x introduced the migration plugin; 6.x brought rolling upgrades for minor versions.
- 8.x automates enrollment tokens, security bootstrap, and compatibility headers.

### Pros
- Rolling upgrades keep clusters searchable while nodes rotate.
- Compatibility headers protect mixed-version clients.
- Advance deprecation warnings reduce surprises at cutover.

### Cons
- Major-version jumps may still require reindexing old indices.
- Plugins and custom scripts often break first.
- Long-running rolling upgrades tie up SRE capacity.

### Production Apps
- SaaS providers stage upgrades in dev, staging, and canary clusters before full rollout.
- Observability platforms run compatibility tests on ingest pipelines and saved objects.
- Managed services expose upgrade wizards but still require customer scheduling.

### Tiny Example
1. Run `_migration/deprecations` to list indices needing changes.
2. Disable shard allocation, stop node 1, install the new version, and restart.
3. Re-enable allocation and monitor `cluster.health` before rotating the next node.
