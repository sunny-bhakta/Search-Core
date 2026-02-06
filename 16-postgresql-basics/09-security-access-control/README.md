# 09. Security & Access Control

Overview: protect PostgreSQL search data with least privilege roles, encryption, and auditing.

### Description
- Grant roles with minimal privileges and use row-level security for tenant isolation.
- Enforce TLS on connections and manage credentials via vault/secret stores.
- Enable logging or extensions (pgaudit) to track access.

### History Snapshot
- Early installs relied on trust/local auth, causing leaks.
- pg_hba.conf improvements and SSL defaults tightened security.
- Row-level security (9.5) and auditing extensions expanded control.

### Pros
- Prevents data leaks across tenants.
- Auditable trail for compliance (HIPAA, SOC2).
- TLS + secret rotation blocks many attacks.

### Cons
- Misconfigured RLS can hide bugs until production.
- TLS adds slight CPU overhead.
- Auditing can generate large log volumes.

### Production Apps
- Multi-tenant SaaS uses RLS to isolate customer rows.
- Financial services enforce TLS mutual auth and log all accesses.
- Healthcare portals store credentials in secure vaults and rotate keys.

### Tiny Example
- **Input:** user from tenant A queries table.
- **Output steps:**
	1. RLS policy filters rows where `tenant_id = 'A'`.
	2. TLS encrypts connection.
	3. Audit log records query with user ID.
