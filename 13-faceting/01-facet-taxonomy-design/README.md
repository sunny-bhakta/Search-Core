# 01. Facet Taxonomy Design

Overview: plan which filters exist, how they relate, and what names users see so browsing feels natural.

### Description
- Map out top-level categories, subcategories, brands, tags, and decide which ones are global vs. page-specific.
- Document labels, tooltips, and grouping rules so UI and backend stay in sync.
- Set governance for adding/removing facets to keep the taxonomy clean.

### History Snapshot
- Early e-commerce sites copied catalog department trees directly into search.
- UX research later highlighted the need for simpler labels and fewer levels.
- Today, taxonomy councils or content strategists manage shared libraries across products.

### Pros
- Gives users predictable navigation.
- Simplifies analytics because names are standardized.
- Makes personalization easier since each facet has clear meaning.

### Cons
- Requires cross-team agreement; debates can stall launches.
- Overly deep hierarchies overwhelm shoppers on mobile.
- Keeping translations aligned with taxonomy changes is tedious.

### Production Apps
- Grocery apps expose aisle → shelf → brand hierarchies.
- Travel search separates region → country → city facets.
- B2B marketplaces maintain industry-specific taxonomies managed by specialists.

### Tiny Example
- **Input:** user opens "Electronics" → "Laptops" facet path.
- **Output steps:**
	1. Taxonomy defines the path and label text.
	2. UI shows breadcrumbs and available sub-facets.
	3. Search API filters results to the chosen branch without extra queries.
