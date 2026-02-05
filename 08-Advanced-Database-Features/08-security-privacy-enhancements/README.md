# 08. Security & Privacy Enhancements

Overview: use built-in DB features like row security, masking, and geo-fencing to protect sensitive search data.

### Description
- Enable row/column security policies, tokenization, and masking functions.
- Enforce region-aware storage so data stays within legal boundaries.

### History Snapshot
- Apps once implemented their own filters and often missed edge cases.
- Databases added native RLS, masking, and encryption features.
- Privacy regulations pushed teams to adopt geo-fenced clusters.

### Pros
- Less custom code to enforce policies.
- Auditable controls that satisfy regulators.
- Helps win enterprise deals with strict privacy needs.

### Cons
- Misconfigured policies may block valid users.
- Feature sets differ across vendors, complicating portability.
- Geo-fencing limits failover options.

### Production Apps
- Financial search uses row-level security so analysts see only assigned accounts.
- Healthcare platforms mask SSNs unless “break glass” is approved.
- Global SaaS providers pin EU data to EU clusters with automated checks.

### Tiny Example
- **Input:** user from EU requests profile stored in US cluster.
- **Output steps:**
	1. Policy engine detects region mismatch.
	2. Request routed to EU replica holding allowed subset.
	3. Audit log notes the geo decision for compliance.
