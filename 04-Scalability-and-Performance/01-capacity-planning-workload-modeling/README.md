# 01. Capacity Planning & Workload Modeling

Count how many searches, writes, and bytes you expect, then size the cluster so it can handle the load with a little headroom.
It’s the budgeting step before touching hardware.

### History Snapshot
- Early search launches guessed hardware needs and hoped for the best, leading to surprise outages.
- Teams began logging query-per-second (QPS) and indexing throughput so capacity could be forecast instead of guessed.
- Mature orgs now run rolling workload models and keep them in the repo next to the infrastructure code.

### Pros
- Prevents over/under-provisioning by tying hardware to real demand.
- Makes finance conversations easier because you can show the math behind each node.
- Gives SREs and product teams a shared view of peak vs. steady-state traffic.

### Cons
- Requires discipline to keep workload data fresh; stale models mislead.
- Unexpected product launches or marketing spikes can still blow past forecasts.
- Takes time to model mixed workloads (search, aggregations, autocomplete, ingestion) accurately.

### Production Apps Using Capacity Models
- Retail search teams forecast Black Friday spikes to know how many hot nodes to spin up.
- SaaS logging platforms model ingest volume by customer tier to plan shard counts.
- Travel sites simulate seasonal spikes (summer, holidays) to lock in extra capacity.

### Tiny Example
- **Input:** baseline search QPS = 800, p95 latency goal = 200 ms, each node comfortably handles 250 QPS.
- **Output:** need `ceil(800 / 250) = 4` search nodes + 1 spare for headroom; document the assumption so everyone knows why five nodes were ordered.
