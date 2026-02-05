# 09. Chaos & Resilience Testing

Overview: practice failure by deliberately breaking nodes, disks, or networks so you know how search behaves when things go wrong.

### Description
- Use chaos tools to kill pods, throttle traffic, or cut clusters off from dependencies.
- Score game-day runs and capture follow-up fixes.

### History Snapshot
- Outages exposed that failover steps were untested.
- Chaos Monkey-style tooling normalized proactive failure testing.
- Modern platforms integrate chaos experiments into CI/CD or scheduled drills.

### Pros
- Builds confidence that runbooks work.
- Surfaces single points of failure before real incidents.
- Strengthens on-call muscle memory.

### Cons
- Poorly planned experiments can cause real user impact.
- Requires strict guardrails and approvals.
- Hard to simulate third-party outages perfectly.

### Production Apps
- Search managed services run weekly node-kill tests in staging.
- Retailers script region-failover drills before peak season.
- Fintech companies rehearse index-corruption scenarios with read-only mirrors.

### Tiny Example
- **Input:** plan to drop one replica in staging.
- **Output steps:**
	1. Chaos job terminates replica pod.
	2. Monitoring alerts confirm failover happened within SLA.
	3. Post-drill notes capture gaps and assign owners for fixes.
