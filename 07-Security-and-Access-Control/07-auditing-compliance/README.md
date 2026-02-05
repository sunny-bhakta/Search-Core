# 07. Auditing & Compliance

Overview: capture who did what, when, and why so you can satisfy regulators and recreate events.

### Description
- Log authentication, schema changes, exports, and role updates in immutable stores.
- Map each log type to required controls (SOC 2, GDPR, HIPAA).

### History Snapshot
- Manual spreadsheets once tracked changes.
- Centralized audit buses replaced ad-hoc logs.
- Automated evidence packages now feed yearly audits.

### Pros
- Proves controls exist during compliance reviews.
- Speeds up investigations after incidents.
- Builds customer trust with transparent processes.

### Cons
- High-volume logs require storage planning.
- Redaction mistakes may leak sensitive data.
- Review fatigue if alerts trigger for every benign change.

### Production Apps
- Fintech search logs every reindex along with approver ID.
- Healthcare platforms store access logs in WORM storage for 7 years.
- SaaS vendors expose “download your audit log” endpoints to customers.

### Tiny Example
- **Input:** admin changes role of user `123` from `viewer` to `editor`.
- **Output steps:**
	1. Change service writes log `{ actor, target, oldRole, newRole, timestamp }`.
	2. Log replicates to immutable storage bucket.
	3. Weekly report flags admin changes for manager review.
