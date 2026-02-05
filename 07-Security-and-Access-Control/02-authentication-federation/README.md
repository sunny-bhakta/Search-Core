# 02. Authentication & Federation

Overview: make every caller prove who they are using SSO, API keys, or certificates, then log it.

### Description
- Support SAML/OIDC for people, API keys or mTLS for services, and rotate secrets often.
- Record each login attempt with tenant, IP, device, and reason codes.

### History Snapshot
- Early clusters shared one admin password across the company.
- Federated identity let enterprises plug in their IdP and enforce MFA.
- Short-lived tokens plus automated rotation are now standard.

### Pros
- Locks down sensitive consoles and search APIs.
- Enables per-user throttles and behavior analytics.
- Simplifies onboarding/offboarding via central IdP.

### Cons
- Complex SSO setups can fail open if misconfigured.
- Token services become critical dependencies.
- Key rotation requires process discipline.

### Production Apps
- Hosted search dashboards rely on Okta/OIDC login.
- Partner APIs issue scoped keys that expire every 30 days.
- Internal pipelines use mutual TLS with auto-issued certificates.

### Tiny Example
- **Input:** user logs in via OIDC, IdP returns token with `role=analyst`.
- **Output steps:**
	1. Gateway verifies signature + expiry.
	2. Gateway logs `user_id`, `role`, `ip` to audit stream.
	3. Downstream services read `role=analyst` to limit capabilities.
