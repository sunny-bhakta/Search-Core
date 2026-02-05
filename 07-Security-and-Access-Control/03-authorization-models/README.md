# 03. Authorization Models

Overview: decide which documents, fields, and queries each role may touch, then enforce it everywhere.

### Description
- Combine RBAC (roles) and ABAC (attributes) to guard data down to shard level.
- Cache check results but invalidate quickly when roles change.

### History Snapshot
- Early apps only had “admin” vs “user” toggles.
- Field-level security and filtered aliases became common in search engines.
- Attribute-based policies now mix geography, tenant, and data labels.

### Pros
- Keeps sensitive documents hidden even if someone guesses an ID.
- Aligns legal/compliance rules with code.
- Supports multi-tenant offerings on shared clusters.

### Cons
- Complex rules are hard to reason about.
- Cache bugs can leak or block data.
- Policy stores must stay highly available.

### Production Apps
- B2B search exposes only documents tagged with the requester’s tenant ID.
- Newsrooms hide embargoed articles via field-level masks until go-live.
- Healthcare portals map `doctor`, `nurse`, `billing` roles to different views.

### Tiny Example
- **Input:** request from role `support`, document has `classification=confidential`.
- **Output steps:**
	1. Policy engine checks table: `support` cannot read `confidential`.
	2. Engine strips the doc from results or redacts fields.
	3. Audit log records the denied access for later review.
