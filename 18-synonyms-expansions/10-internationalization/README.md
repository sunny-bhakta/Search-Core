# 10. Internationalization

Overview: adapt synonyms per language and culture so expansions stay accurate globally.

### Description
- Localize synonym pairs with native speakers; avoid literal translations when meaning shifts.
- Handle gendered terms, inflections, and formal vs informal variants.
- Maintain locale-specific files or tables with shared tooling for deployment.

### History Snapshot
- Global rollouts re-used English synonyms, confusing international users.
- Localization teams added per-locale dictionaries in translation workflows.
- Modern platforms manage synonyms alongside i18n glossaries and CLDR data.

### Pros
- Improves relevance for non-English markets.
- Respects cultural nuances and regulatory requirements.
- Enables locale-based metrics and experiments.

### Cons
- Requires ongoing collaboration with regional experts.
- Multiple versions increase maintenance overhead.
- Automated translations can introduce errors if unchecked.

### Production Apps
- Fashion retailers map "chaussure" ↔ "shoe" in French catalogs.
- Banking apps add synonyms for local account terms.
- Travel marketplaces tailor city nicknames per language.

### Tiny Example
- **Input:** locale = fr, term = "ordinateur".
- **Output steps:**
	1. Look up French synonym list.
	2. Add "ordinateur" ↔ "pc" for fr only.
	3. Deploy locale-specific file to EU clusters.
