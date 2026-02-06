# 06. Morphological & Spelling Variants

Overview: cover stemming, lemmatization exceptions, and locale-specific spellings so users find results even when words change form.

### Description
- Maintain exception lists where built-in stemmers fall short.
- Capture US vs. UK spellings ("color" ↔ "colour"), transliterations, and diacritics.
- Blend fuzzy matching thresholds with explicit variants for high-value terms.

### History Snapshot
- Basic stemmers chopped words aggressively, hurting precision.
- Custom exception dictionaries improved quality for domain-specific terms.
- Modern systems mix morphological analyzers with manual overrides and machine-learned suggestions.

### Pros
- Reduces zero-result queries caused by minor spelling differences.
- Keeps critical terms (brand names, acronyms) intact via exceptions.
- Works alongside autocomplete and spellcheck tools.

### Cons
- Exception lists need constant maintenance.
- Too many fuzzy matches can slow queries.
- Transliteration requires locale expertise.

### Production Apps
- Retailers map "color" ↔ "colour" and "favorite" ↔ "favourite".
- Education portals handle plural/singular course names.
- Music apps include transliterations of artist names.

### Tiny Example
- **Input:** query "favourite".
- **Output steps:**
	1. Lookup variant list and add "favorite".
	2. Search runs with both forms.
	3. Results include US and UK spellings.
