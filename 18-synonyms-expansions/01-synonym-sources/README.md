# 01. Synonym Sources

Overview: gather synonyms from trusted places so expansions reflect real user language.

### Description
- Pull candidates from domain glossaries, analytics logs, chat transcripts, and vendor thesauri.
- Tag each entry with type (two-way, one-way, weighted) and confidence level.
- Set review cadences so outdated slang or brand names get refreshed.

### History Snapshot
- Early search teams hard-coded a few synonyms and rarely updated them.
- Analytics pipelines later surfaced user phrasing differences at scale.
- Today, product, marketing, and localization teams collaborate through shared synonym catalogs.

### Pros
- Better recall on varied user phrasing.
- Easier to justify changes because each synonym has provenance.
- Shared source list reduces duplication across teams.

### Cons
- Manual curation is time-consuming.
- Conflicting sources can cause noisy expansions.
- Without audits, outdated terms linger.

### Production Apps
- Retailers merge merchandising glossaries with customer support phrases.
- Healthcare portals rely on clinician-approved medical synonym lists.
- Travel sites blend IATA codes, city nicknames, and user-generated tags.

### Tiny Example
- **Input:** sources = glossary + analytics.
- **Output steps:**
	1. Glossary adds "sneaker" ↔ "trainer" (two-way).
	2. Analytics adds one-way "rbnb" → "airbnb".
	3. Catalog stores both entries with source labels.
