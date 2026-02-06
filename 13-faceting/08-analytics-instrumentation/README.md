# 08. Analytics & Instrumentation

Overview: track how users interact with facets so you can improve taxonomy, ordering, and performance.

### Description
- Log facet impressions, clicks, clears, and abandonment events with context (query, session, device).
- Aggregate top combinations to find missing or confusing filters.
- Tie analytics back to business KPIs to justify changes.

### History Snapshot
- Analytics once focused only on search result clicks, ignoring filters entirely.
- Tag managers and event pipelines made it easy to capture UI interactions.
- Product analytics platforms now provide funnels and dashboards specific to faceting.

### Pros
- Data-backed decisions about which facets matter.
- Identifies dead facets to prune, improving performance.
- Highlights localization or accessibility issues through drop-off patterns.

### Cons
- Event sprawl can overwhelm analytics teams.
- Privacy rules require consent and data minimization.
- Instrumentation drift happens when UI changes but tracking does not.

### Production Apps
- Retailers monitor which filters correlate with conversions.
- Streaming services log facet combos that lead to play events.
- Enterprise portals watch for facets that cause zero-result abandonment.

### Tiny Example
- **Input:** user applies color=red and exits without clicking.
- **Output steps:**
	1. UI fires "facet_apply" and "no_click" events.
	2. Analytics pipeline stores them with session metadata.
	3. Dashboard shows high drop-off for color=red, prompting investigation.
