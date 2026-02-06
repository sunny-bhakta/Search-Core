# 10. Maintenance & Backups

Overview: keep PostgreSQL healthy with vacuum/analyze routines and reliable backup/restore drills.

### Description
- Tune autovacuum thresholds, run manual `VACUUM (FULL)` or `ANALYZE` when needed.
- Schedule REINDEX or `pg_repack` to combat bloat.
- Implement PITR by archiving WAL and running periodic base backups.

### History Snapshot
- Manual vacuuming was common pre-8.3; autovacuum matured later.
- Tools like `pg_repack`, `timescaledb-tune`, and cloud backups simplified ops.
- Chaos-style restore drills became best practice for compliance.

### Pros
- Prevents bloat and keeps indexes performant.
- Backups + PITR protect against deletes or corruption.
- Restore rehearsals prove RTO/RPO targets.

### Cons
- Vacuum misconfiguration leads to table bloats or autovacuum storms.
- Backups consume storage and bandwidth.
- Testing restores requires downtime or staging envs.

### Production Apps
- Retailers run nightly `VACUUM ANALYZE` on order tables.
- SaaS vendors store WAL archives on object storage for PITR.
- Compliance-driven teams run monthly restore drills.

### Tiny Example
- **Input:** weekly maintenance window.
- **Output steps:**
	1. Run `VACUUM ANALYZE products`.
	2. Trigger base backup + WAL archive rotation.
	3. Restore backup on staging to confirm success.
