# 09. User Feedback & Support Signals
listen to users (tickets, CSAT, abandonment) and wire those signals into monitoring.

### Description
- Tag support tickets with feature + severity.
- Combine CSAT, NPS, and search abandonment metrics for context.

### History Snapshot
- Feedback once lived only in support inboxes.
- Dashboards started showing ticket counts next to latency charts.
- Today, alert pages include “open tickets for this feature” by default.

### Pros
- Helps prioritize fixes that matter most to customers.
- Reduces noise by linking monitoring data to real complaints.
- Gives on-call quick insight during incidents.

### Cons
- Manual tagging can be inconsistent.
- Negative feedback may lag behind real-time metrics.
- Privacy rules limit how much data you can copy into dashboards.

### Production Apps
- SaaS search teams feed Zendesk tags into BI charts.
- Mobile apps log “search abandoned” events when no result is clicked.
- Product managers review weekly “top pain points” exports.

### Tiny Example
- **Input:** week shows 30 tickets tagged `search_slow` and abandonment rate rises to 18%.
- **Output steps:**
	1. Dashboard correlates slowdown with new feature rollout.
	2. Team pauses rollout, adds cache, sends update to support.
	3. Tickets drop to 5, abandonment returns to 10%.
