# 04. Facet Ordering & Relevance

Overview: decide which facets appear first and how their values are sorted so users see the most helpful options.

### Description
- Choose ordering rules: count descending, alphabetical, curated list, or personalized.
- Hide irrelevant facets based on the current query or user segment.
- Allow merchandisers to pin or demote specific facet values.

### History Snapshot
- Early UIs always sorted alphabetically, even when counts were zero.
- Analytics later showed that high-count facets drive engagement.
- Personalization services now reorder facets per user intent.

### Pros
- Speeds up discovery because top options match intent.
- Keeps panels clean by hiding empty or low-signal facets.
- Supports campaigns by pinning strategic filters.

### Cons
- Dynamic ordering can confuse users if it changes too often.
- Requires reliable counts; missing telemetry breaks logic.
- Personalization must respect privacy and explainability rules.

### Production Apps
- Marketplaces sort brands by popularity for trending queries.
- Travel sites pin "Free cancellation" when user searches last-minute.
- Streaming services surface "Continue Watching" facet at the top for logged-in users.

### Tiny Example
- **Input:** counts for brands = `{ Alpha: 120, Beta: 15, Gamma: 80 }`.
- **Output steps:**
	1. Sort by count descending (Alpha, Gamma, Beta).
	2. Hide any brand with count < 5.
	3. UI renders the ordered list.
