# 07. Scaling & Replication

Overview: scale PostgreSQL read capacity and availability using streaming replicas, logical decoding, and sharding options like Citus.

### Description
- Configure streaming replication for hot standbys and read scaling.
- Use logical decoding or FDWs for selective data sharing.
- Partition or shard large tables via declarative partitioning, pg_partman, or Citus.

### History Snapshot
- Warm standby via PITR preceded streaming replication (9.0).
- Logical replication (10) enabled selective tables and versioned data feeds.
- Extensions like Citus turned PostgreSQL into a distributed cluster.

### Pros
- Reads offload from primaries, improving search query throughput.
- Logical feeds power search indexing pipelines.
- Partitioning keeps indexes manageable.

### Cons
- Replication lag can surface stale data.
- Complex failover orchestration required.
- Sharding complicates maintenance and query planning.

### Production Apps
- SaaS apps run OLTP on primary, analytics/search on replicas.
- Data engineering teams stream logical changes into Kafka for indexing.
- Massive catalog tables partitioned by month or tenant.

### Tiny Example
- **Input:** new search-heavy workload.
- **Output steps:**
	1. Add read replica.
	2. Point search API to replica with lag monitoring.
	3. Logical slot feeds change events to external index job.
