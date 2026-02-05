# 08. Automated Maintenance Jobs

Overview: let schedulers run routine chores—segment merges, snapshot cleanup, index rollovers—without waiting for humans.

### Description
- Track job success metrics and pause automatically if errors spike.
- Provide override buttons when operators need to intervene.

### History Snapshot
- Cron scripts ran on admin laptops and failed silently.
- Orchestrators (Airflow, Argo) centralized scheduling and monitoring.
- Self-healing jobs now auto-open tickets if retries fail.

### Pros
- Keeps clusters healthy around the clock.
- Reduces toil and off-hours paging.
- Makes maintenance timelines predictable.

### Cons
- Buggy automation can delete data fast.
- Scheduling windows must respect peak traffic.
- Needs observability to prove jobs are working.

### Production Apps
- Search vendors rotate indices nightly and purge snapshots older than 30 days.
- Data teams run vacuum/optimize tasks when heap usage crosses thresholds.
- Managed services alert operators if maintenance backlog exceeds SLA.

### Tiny Example
- **Input:** policy says run snapshot cleanup every Sunday at 02:00.
- **Output steps:**
	1. Scheduler enqueues cleanup job at set time.
	2. Job removes snapshots older than 30 days and logs counts.
	3. Dashboard shows job success; if it fails twice, alert triggers.
