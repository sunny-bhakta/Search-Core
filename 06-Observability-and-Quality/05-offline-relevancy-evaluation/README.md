# 05. Offline Relevancy Evaluation

score your search results with labeled data before risky changes hit production.

### Description
- Keep judge sets (query + expected documents) per locale or product line.
- Run metrics like precision@k or NDCG whenever ranking code changes.

### History Snapshot
- Manual spot checks could not keep up with fast releases.
- Batch evaluators automated metric reports overnight.
- Today, dashboards highlight regressions and block merges if needed.

### Pros
- Catches bad ranking tweaks before users see them.
- Helps quantify improvements for stakeholders.
- Supports ML training and feature comparison.

### Cons
- Requires labeled data, which is expensive to collect.
- Metrics can drift if judge sets get stale.
- Offline wins do not always match online behavior.

### Production Apps
- Retailers maintain 1k judged queries per category.
- Travel sites compare “cheap flights” results weekly to protect SEO pages.
- SaaS search teams tie evaluation jobs to feature branches.

### Tiny Example
- **Input:** judged set says query `"wireless mouse"` should return doc IDs `[A, B, C]`.
- **Output steps:**
	1. New ranking produces `[B, A, D]`.
	2. Precision@2 = 1 (two correct in top two), but doc `C` is missing.
	3. Report flags the miss, engineers add synonym rule, rerun job, now `[A, B, C]` scores perfect.
