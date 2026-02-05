# 08. Incident Review & Knowledge Base

write down what broke, why, and how to stop it from happening again.

### Description
- Use a simple template: timeline, impact, root cause, fixes, owners.
- Store docs in a searchable place with tags and status.

### History Snapshot
- Postmortems lived in random docs and got lost.
- Central wikis made it easier to reference past lessons.
- Today, tooling tracks follow-up tasks and nags when overdue.

### Pros
- Prevents repeat incidents with the same root cause.
- Helps onboarding by showing real stories.
- Gives leadership clear status on follow-up work.

### Cons
- Takes time to run blameless reviews.
- Action items can pile up if nobody owns them.
- Sensitive details must be scrubbed before wide sharing.

### Production Apps
- Search teams hold weekly review meetings for any Sev-1/Sev-2 events.
- Templates auto-fill charts and links to traces.
- KB tags like `cache`, `indexing`, `network` make searching easy.

### Tiny Example
- **Input:** outage `search results empty for EU` lasting 12 minutes.
- **Output steps:**
	1. Postmortem doc captures timeline + metrics.
	2. Root cause: misconfigured CDN cache TTL.
	3. Action items: update runbook + add CI check; track until marked done.
