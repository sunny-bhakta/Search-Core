# 10. Compliance & Governance

tag sensitive fields, prove who approved schema changes, and keep audit logs so lawyers and regulators stay happy.
It’s the paperwork layer for search data.

### History Snapshot
- Early projects barely logged anything, so audits were nightmares.
- Laws like GDPR/CCPA forced teams to label PII, record consent, and prove deletions.
- Now schema changes and access policies live in version control with approvals just like code (think pull requests + reviewers before anything ships). For example, a developer proposes adding `email_hash`, opens a PR in the schema repo, legal/security reviewers approve, and the merge record becomes the audit log.

### Pros
- Clear owners for sensitive fields lower breach risk.
- Change logs make audits fast because evidence is ready.
- Deletion workflows prove you honored “right to be forgotten.”

### Cons
- Extra approvals can slow features.
- If tagging is wrong, you think you’re compliant when you’re not.
- Rules change often, so documentation must stay fresh.

### Production Apps Using Compliance Playbooks
- Banks mask PII fields and keep audit logs for years.
- Healthcare search requires approvals before schema changes reach prod.
- SaaS vendors tie schema repos to Jira/ServiceNow so every change has a ticket trail.

### Tiny Example
- **Input:** schema fields `[id, title, email]`, change ticket `SEC-42`.
- **Output:**
	- Tag `email` as “high sensitivity,” `id`/`title` as “low.”
	- Log `{ ticketId: 'SEC-42', action: 'Encrypt email field' }` with timestamp so auditors can trace it.

## Quick Checklist
- Label fields that contain PII/PCI and decide whether to encrypt, mask, or drop them.
- Log who can read/write each field and review regularly.
- Document deletion/retention rules (e.g., right to be forgotten) and how they execute.
- Tie schema changes to approvals, tickets, or change requests.
- Keep evidence (logs, reports) handy for audits.

## Mini Exercise
1. Tag every field in a sample schema with a sensitivity level.
2. Write down the steps for fulfilling a deletion request for a single user.
3. Capture a short change log entry linking a schema change to a ticket ID.
