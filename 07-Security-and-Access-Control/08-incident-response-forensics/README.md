# 08. Incident Response & Forensics

Overview: know how to detect, contain, investigate, and recover from security events affecting search.

### Description
- Define severity levels, on-call rotations, and communication channels.
- Keep forensic kits: snapshot scripts, access revocation steps, evidence storage.

### History Snapshot
- Ad-hoc responses led to long outages and missing data.
- Runbooks plus blameless postmortems improved learning loops.
- Tabletop exercises now test readiness quarterly.

### Pros
- Faster containment reduces damage.
- Clear roles limit confusion during stressful events.
- Preserved evidence helps legal and compliance teams.

### Cons
- Maintaining runbooks takes discipline.
- Simulations consume engineering time.
- Poor tooling can corrupt evidence.

### Production Apps
- Search providers snapshot affected indexes before cleanup.
- Enterprises maintain “kill switch” scripts for compromised API keys.
- Support teams have canned customer comms for breaches.

### Tiny Example
- **Input:** alert says API key leaked on GitHub.
- **Output steps:**
	1. On-call uses runbook to revoke key and rotate credentials.
	2. Trigger snapshot + log export for forensic review.
	3. Open incident ticket, assign follow-up tasks, send customer notice template.
