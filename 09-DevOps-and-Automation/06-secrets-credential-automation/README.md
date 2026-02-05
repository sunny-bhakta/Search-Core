# 06. Secrets & Credential Automation

Overview: rotate API keys, service accounts, and certificates automatically so nothing sensitive lives hard-coded.

### Description
- Store secrets in vaults or secret managers, never in repos.
- Generate short-lived tokens and rotate them on schedules with alerts for drift.

### History Snapshot
- Early systems baked passwords into config files.
- Central vaults and parameter stores reduced leaks.
- Automatic rotation plus workload identity (OIDC, SPIFFE) now minimize manual handling.

### Pros
- Limits blast radius if a key leaks.
- Auditable rotations help with compliance.
- Short-lived tokens reduce manual revocation work.

### Cons
- Vault outages can break pipelines.
- Rotation misconfigurations may lock out services.
- Requires tight coordination with dependency teams.

### Production Apps
- Search APIs fetch credentials at runtime from AWS Secrets Manager.
- Certificates rotate weekly using ACME or internal PKI bots.
- CI pipelines inject secrets via ephemeral runners that self-destruct after use.

### Tiny Example
- **Input:** API key expires every 24 hours.
- **Output steps:**
	1. Rotation job requests new key from provider.
	2. Vault updates the entry and notifies dependent services.
	3. Services reload tokens without redeploy; old key is revoked.
