# 01. Cluster Fundamentals

Overview: understand node roles, discovery, and health states so the cluster stays stable.

### Description
- Master nodes handle cluster metadata, data nodes store shards, ingest nodes run pipelines, coordinating nodes fan queries out.
- Configure discovery and quorum settings so masters elect cleanly, and set watermarks/GC/thread pools per hardware.
- Track cluster health color (green/yellow/red) and know required actions.

### History Snapshot
- Early deployments ran single nodes with no dedicated roles, leading to split brains.
- Elastic introduced dedicated master roles, bootstrap checks, and discovery.seed_hosts to prevent misconfiguration.
- Today, autoscaling and composable roles allow flexible topologies across regions.

### Pros
- Fewer outages because responsibilities are well-defined.
- Easier scaling: add data nodes without touching masters.
- Faster incident response when health states have playbooks.

### Cons
- More nodes = more cost and monitoring overhead.
- Mislabeling roles can still cause downtime.
- Requires documentation so new engineers grasp the layout.

### Production Apps
- Retail search clusters run three dedicated masters, dozens of data nodes, and ingest nodes for log processing.
- SaaS analytics use coordinating nodes to shield clients from shard fan-out.
- News sites split hot and warm nodes to optimize cost.

### Tiny Example
- **Input:** cluster plan = 3 master nodes, 6 data nodes, 2 ingest nodes.
- **Output steps:**
	1. Configure discovery.seed_hosts with all master IPs.
	2. Set watermarks on data nodes to 85%/90%.
	3. Monitor health API for green status before onboarding traffic.
