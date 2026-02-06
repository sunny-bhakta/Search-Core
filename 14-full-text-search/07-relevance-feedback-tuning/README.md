# 07. Relevance Feedback & Tuning

Overview: use user feedback (clicks, dwell time, ratings) and offline labels to improve search quality continuously.

### Description
- Capture implicit signals like clicks and dwell time, plus explicit ratings when available.
- Build evaluation sets and run offline metrics (NDCG, MRR) for proposed changes.
- Classify queries by intent (navigational, informational, transactional) to set expectations.

### History Snapshot
- Manual QA teams once reviewed rankings by hand.
- Click models (CTR, dwell) enabled large-scale, near-real-time feedback loops.
- Quality platforms now blend automated alerts with human review workflows.

### Pros
- Keeps rankings aligned with actual user behavior.
- Produces labeled data for machine learning rankers.
- Detects regressions early via dashboards and alerts.

### Cons
- Biased feedback (bots, promotions) can mislead models.
- Requires robust data pipelines and storage.
- Offline evaluation takes time to build and maintain.

### Production Apps
- Ecommerce sites monitor click-through and add-to-cart rates per query segment.
- Documentation portals gather thumbs-up/down on answers.
- Customer support search records escalations to flag bad results.

### Tiny Example
- **Input:** query "reset router" has CTR drop from 45% to 30%.
- **Output steps:**
	1. Alert fires because drop exceeds threshold.
	2. Analyst reviews queries, finds outdated article.
	3. Content updated and ranking rules tweaked, CTR recovers.
