# 01. Threat Modeling & Trust Boundaries

Overview: list who can touch your search stack, what they might break, and how to block them.

### Description
- Diagram actors (customers, admins, batch jobs) and every entry point (APIs, consoles, ingestion).
- Highlight high-value assets like PII indices and superuser endpoints so controls focus there.

### History Snapshot
- Early search teams shipped features first and chased exploits later.
- Lightweight STRIDE-style workshops exposed spoofing, tampering, data leaks.
- Now, threat models live next to design docs and get refreshed each release.

### Pros
- Prevents blind spots before attackers find them.
- Creates a shared checklist for product and security.
- Guides budget toward real risks instead of guesses.

### Cons
- Requires time with many stakeholders.
- Models get stale if not revisited.
- Can feel theoretical without follow-up actions.

### Production Apps
- SaaS search vendors map trust zones (edge, API, core cluster) and limit cross-zone calls.
- Marketplaces track insider vs. external threat scenarios for admin consoles.
- Fintech teams run quarterly reviews to keep regulatory auditors happy.

### Tiny Example
- **Input:** model shows public API can hit `/admin/reindex` through a forgotten route.
- **Output steps:**
	1. Add auth middleware so only service accounts reach that route.
	2. Update firewall to block the path from the internet entirely.
	3. Document the fix in the threat model so future reviews confirm it stays closed.
