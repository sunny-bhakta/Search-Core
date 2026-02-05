# 05. Multi-Tenancy Isolation

Overview: keep each customer’s data and traffic separate even when sharing hardware.

### Description
- Choose between per-tenant clusters, namespaces, or filtered aliases.
- Enforce quotas on CPU, queries per second, and storage per tenant.

### History Snapshot
- Early SaaS platforms dumped everyone into one index with no guardrails.
- Routing keys and filtered aliases reduced accidental leaks.
- Chaos drills now prove isolation works before auditors ask.

### Pros
- Enables efficient shared clusters without mixing sensitive data.
- Lets you sell premium tiers with higher limits.
- Simplifies takedowns or exports per customer.

### Cons
- Complex routing logic can introduce bugs.
- Quotas must scale with growth to avoid noisy-neighbor tickets.
- Audits require evidence showing isolation in practice.

### Production Apps
- Analytics vendors hash by tenant ID to keep caches warm per customer.
- Commerce APIs cap each tenant at X QPS with burst allowances.
- Enterprise search offers dedicated clusters for regulated industries.

### Tiny Example
- **Input:** tenant `A` hits 120 QPS, limit is 100.
- **Output steps:**
	1. Rate limiter detects sustained overage.
	2. Requests return `429` to tenant `A` only; others unaffected.
	3. Ops reviews usage and upsells more capacity or enforces burst policy.
