# 01. Core Architecture

Overview: grasp how PostgreSQL stores and updates data (MVCC, WAL, vacuum) so search workloads stay healthy.

### Description
- MVCC keeps multiple row versions so reads do not block writes.
- WAL (write-ahead log) records every change before it hits disk for durability and replication.
- Autovacuum removes dead tuples and frees space so indexes stay efficient.

### History Snapshot
- PostgreSQL inherited MVCC concepts from Ingres and matured through the 8.x releases.
- Streaming replication arrived in 9.0, making WAL central to scaling.
- Newer releases improved autovacuum tuning and logical decoding for integrations.

### Pros
- Snapshot isolation keeps query consistency without heavy locks.
- WAL enables PITR backups and replicas.
- Vacuum automation reduces manual chores.

### Cons
- Misconfigured autovacuum leads to bloat.
- Heavy WAL write volume requires fast disks.
- MVCC snapshots can grow memory usage under long transactions.

### Production Apps
- SaaS CRMs run OLTP on primary nodes and analytics on replicas.
- Search services stream WAL into change pipelines for index updates.
- Finance apps rely on MVCC to audit historical row versions.

### Tiny Example
- **Input:** user updates a product row.
- **Output steps:**
	1. PostgreSQL writes change to WAL.
	2. A new tuple version appears, old version stays for readers.
	3. Autovacuum later reclaims the old tuple when no query needs it.
