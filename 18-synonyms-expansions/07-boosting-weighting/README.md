# 07. Boosting & Weighting

Overview: control how much each synonym influences scoring so preferred terms rank higher than loose matches.

### Description
- Assign boost values when adding synonyms (e.g., main term = 1.0, expansion = 0.5).
- Limit how many expansions fire per query to reduce noise.
- Monitor precision metrics when tweaking boosts.

### History Snapshot
- Early synonym filters treated all expansions equally, hurting relevance.
- Search engines exposed payload weights and per-term boosts.
- Today, teams log the effect of each synonym via observability dashboards.

### Pros
- Keeps precision by favoring strong matches.
- Allows experimentation with minimal risk.
- Works with query-time expansion to toggle boosts dynamically.

### Cons
- Requires tuning per domain.
- Too many low boosts still add latency.
- Hard to explain to stakeholders if not documented.

### Production Apps
- Retailers boost official brand names higher than casual nicknames.
- Media search gives more weight to full show titles than abbreviations.
- B2B portals boost regulatory terms while still matching synonyms.

### Tiny Example
- **Input:** query "macbook" with synonym "apple laptop" weight 0.4.
- **Output steps:**
	1. Score = base term 1.0 for exact matches.
	2. Synonym adds 0.4 for broader matches.
	3. Ranking uses sum to keep exact hits on top.
