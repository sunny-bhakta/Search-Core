# 08. Security Features

Overview: secure clusters with TLS, users/roles, and fine-grained controls to protect data.

### Description
- Enable transport + HTTP TLS, configure certificates, and enforce mutual auth between nodes.
- Manage users, roles, role mappings, and API keys via the security APIs or Kibana.
- Apply document-level and field-level security, audit logging, and IP filtering where licensing allows.

### History Snapshot
- Shield plugin introduced security to self-managed clusters; later merged into X-Pack.
- 6.x made basic authentication free, expanding adoption.
- 8.x defaults to security ON with built-in enrollment, Fleet integration, and API key improvements.

### Pros
- TLS + auth stop eavesdropping and unauthorized writes.
- Role-based access lets multi-team clusters coexist safely.
- Audit logs help satisfy compliance requirements.

### Cons
- Certificate rotation and enrollment add operational overhead.
- Field-level filters can slow searches due to extra filtering.
- Misconfigured roles can lock teams out or expose too much data.

### Production Apps
- Regulated industries enforce document-level controls for tenant isolation.
- Internal clusters use API keys for ephemeral CI/CD jobs.
- Managed services rotate certs automatically but still expose audit logs for customer review.

### Tiny Example
1. Create a role `support_reader` with read-only privileges on `tickets-*` indices.
2. Add user `support-bot` and assign the role.
3. Generate an API key and use it in a curl request to verify limited access.
