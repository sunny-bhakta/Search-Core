# 02. Authentication & Authorization

Prove who the caller is and what fields they can see before running their search.

### Description
- Accept API keys, OAuth tokens, or mTLS certs so machines identify themselves.
- Pass that identity into query builders to hide restricted documents or fields.

### History Snapshot
- Early clusters shared one admin key, so leaked credentials exposed everything.
- Scoped API keys and JWT claims added per-tenant and per-role controls.
- Modern stacks layer fine-grained field/document security plus audit logs.

### Pros
- Protects private data even if a client is compromised.
- Enables per-tenant throttles and usage reports.
- Audit trails help compliance teams answer “who accessed what.”

### Cons
- Token rotation and secret storage add operational work.
- Overly strict scopes can break legitimate requests until updated.
- Latency spikes if the auth service is slow or offline.

### Production Apps
- Search APIs issue short-lived OAuth tokens for web and native apps.
- Back-office dashboards use mTLS between trusted services.
- Customer support tools fetch “view only” keys that mask salary or health data fields.

### Tiny Example
- **Input:** request has header `Authorization: Bearer role=support agent`.
- **Output steps:**
	1. Validate the JWT signature and expiration.
	2. Attach `role=support` to the search context.
	3. Query only documents with `privacyLevel <= support` and strip forbidden fields before returning JSON.
