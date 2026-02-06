# 07. Dependent & Cascading Facets

Overview: update downstream facets when an upstream choice changes so filters stay accurate.

### Description
- Define parent-child relationships (e.g., category → brand → size).
- Recompute dependent facet counts on the server when parents change.
- Cache intermediate states or use incremental updates to avoid full recomputation.

### History Snapshot
- Early faceting systems recalculated everything on the client, causing stale counts.
- AJAX requests later pulled new facet data on each change.
- Today, search APIs support "filter context" queries that return multiple facet panels at once.

### Pros
- Keeps users from seeing invalid options.
- Reduces confusion because counts match the current selection.
- Enables progressive disclosure, showing only relevant filters.

### Cons
- More API calls or heavier responses per interaction.
- Complex caching logic to avoid redundant work.
- Need to handle race conditions if users click quickly.

### Production Apps
- Auto part catalogs update compatible models after selecting make/year.
- Real estate sites refresh neighborhood lists after selecting a city.
- SaaS log search shows service names only after choosing environment.

### Tiny Example
- **Input:** user picks category=Shoes.
- **Output steps:**
	1. Server recalculates brand facet filtered to Shoes.
	2. Response includes new counts only for relevant brands.
	3. UI replaces the brand list immediately.
