# 03. Replication & Failover

Keep extra copies of your data and rehearse how traffic moves when nodes die.
It’s an insurance policy for search.

### History Snapshot
- Early clusters ran with a single replica, so hardware failures meant partial outages.
- Operators introduced per-zone replicas and quorum writes to shrug off node loss.
- Mature setups now run failover drills, chaos tests, and automated promotions.

### Pros
- Keeps search online during hardware or zone failures.
- Lets you patch or upgrade nodes without full downtime.
- Makes analytics and backups easier because secondaries can handle those reads.

### Cons
- Extra replicas cost hardware and storage.
- Split-brain scenarios can appear if quorum rules are misconfigured.
- *(Quorum = the minimum number of replicas that must agree before a write/read is considered valid. If the rule is wrong, replicas might diverge.)*
- Failover scripts can rot if you never rehearse them.

### Production Apps Using Robust Replication
- Payments search keeps three replicas per AZ and rehearses failover monthly.
- Streaming platforms run follower clusters in another region for disaster recovery.
- SaaS vendors dedicate one replica to running heavy analytics exports.

### Tiny Example
- **Input:** primary region with 3 data nodes, requirement = survive loss of one node without losing writes.
- **Output:** set replica count = 2 (total copies = 3). Configure write quorum = 2, run a quarterly drill that powers off a node and verifies traffic shifts automatically.
