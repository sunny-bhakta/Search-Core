# 09. Internationalization & Localization

Overview: adapt facets to each locale with translated labels, proper sorting, and unit conversions.

### Description
- Translate facet names and values, including pluralization and gender where needed.
- Apply locale-aware sorting (accent rules, numeric formats).
- Convert units (currency, shoe size) per region and reflect them in both data and UI.

### History Snapshot
- Global launches often reused English labels, confusing users.
- Localization platforms added glossary + translation workflows for metadata.
- Modern search systems store locale-specific taxonomies and unit rules.

### Pros
- Improves trust and usability for non-English markets.
- Supports region-specific compliance (e.g., EU size charts).
- Enables localized analytics since facet values are consistent per locale.

### Cons
- Requires continuous translation maintenance.
- Unit conversions introduce rounding issues.
- Multiple taxonomies can drift apart if governance is weak.

### Production Apps
- Apparel retailers show EU/US/UK shoe sizes as separate facets.
- Travel sites rename facets ("Holiday" vs. "Vacation") by locale.
- B2B marketplaces adapt currency ranges for each country automatically.

### Tiny Example
- **Input:** facet label "Color" for French locale.
- **Output steps:**
	1. Localization file maps it to "Couleur".
	2. Sorting uses French collation rules.
	3. UI renders translated label and values.
