# Synonyms & Expansions

Guidelines for broadening recall without tanking precision.

## 1. Synonym Sources
- Collect domain glossaries, user feedback, analytics, and third-party thesauri.
- Classify synonyms as equivalent, one-way, or weighted.
- Track provenance and review cadence.

## 2. Data Structures & Storage
- Choose between inline mappings, external files, or API-driven dictionaries.
- Support versioning and staged rollouts.
- Provide tooling to diff changes over time.

## 3. Analyzer-Time vs. Query-Time Expansion
- Decide whether to expand during indexing, querying, or both.
- Understand trade-offs: index bloat vs. flexible experimentation.
- Combine strategies when necessary (e.g., core synonyms at index time, dynamic at query time).

## 4. Contextual Synonyms
- Scope expansions by field, locale, or category (“apple” fruit vs. brand).
- Use rules or ML classifiers to detect context before expanding.
- Prevent conflicts with negative keywords or stopwords.

## 5. Phrase & Multi-Word Expansions
- Handle ordered/unordered phrases (“nyc” ↔ “new york city”).
- Manage token graphs carefully to preserve scoring.
- Provide tests ensuring multi-word expansions behave as expected.

## 6. Morphological & Spelling Variants
- Include stemming/lemmatization exceptions and locale-specific spellings.
- Integrate fuzzy matching thresholds alongside synonyms.
- Capture transliteration variants (hiragana/katakana, Cyrillic/Latin).

## 7. Boosting & Weighting
- Assign boost values to preferred terms vs. fallback expansions.
- Limit expansions per query to avoid noise.
- Monitor precision impacts via relevancy dashboards.

## 8. Lifecycle & Governance
- Set up proposal/review workflows with SME approval.
- Log who changed what, when, and why.
- Retire unused or harmful expansions promptly.

## 9. Testing & Validation
- Run regression suites on critical queries before publishing changes.
- Use canary clusters or feature flags for live validation.
- Instrument click-through and conversion metrics tied to synonym usage.

## 10. Internationalization
- Localize synonyms per language/culture; avoid direct translations when meaning differs.
- Account for gendered/inflected forms.
- Partner with locale experts for ongoing curation.

### Suggested Next Steps
- Audit current synonym lists and tag them by source and confidence.
- Build a small approval workflow (even a spreadsheet + script) before production edits.
- Launch a canary test measuring how expansions affect CTR or relevancy.
