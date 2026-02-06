# 09. Multi-Tenancy & Access Control

Overview: enforce tenant boundaries and permissions so users only see data they are allowed to view.

### Description
- Index tenant IDs, locale tags, and access control lists (ACLs) alongside each document.
- Use filtered queries or precomputed permission bitsets to restrict results per request.
- Audit access logs for compliance and incident response.

### History Snapshot
- Single-tenant search clusters duplicated indexes for each customer.
- Filtered aliases and document-level security reduced duplication.
- Cloud providers now offer attribute-based access control integrated with search APIs.

### Pros
- Saves infrastructure by sharing clusters safely among tenants.
- Simplifies compliance reporting.
- Enables per-tenant customization without separate deployments.

### Cons
- ACL indexing increases document size and update cost.
- Misconfigured filters can leak data if not tested thoroughly.
- Harder to debug because results vary per user.

### Production Apps
- SaaS CRMs filter records by account/team membership automatically.
- Document collaboration tools enforce sharing permissions in search.
- Managed search services host multi-tenant e-commerce catalogs securely.

### Tiny Example
- **Input:** user belongs to tenant "acme" and role "manager".
- **Output steps:**
	1. Query adds filters tenant=acme AND roles contains manager.
	2. Engine returns only docs matching both attributes.
	3. Access log records user, time, and allowed docs.
