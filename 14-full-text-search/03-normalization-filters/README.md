# 03. Normalization & Filters

Overview: clean and transform tokens (lowercase, stem, remove stopwords) so search handles variations of the same word.

### Description
- Configure analyzers with steps like lowercase, ASCII folding, stopword removal, stemming, or lemmatization.
- Maintain locale-specific stopword lists and synonym files.
- Use pipelines per field (title, body) to match how users query content.

### History Snapshot
- Classic search lowercased everything and called it done.
- Lucene analyzers and Snowball stemmers introduced pluggable filters.
- Today, custom NLP pipelines and ML-based normalizers handle complex languages.

### Pros
- Improves recall ("running" matches "run").
- Reduces index size because variants collapse to one token.
- Enables better synonym handling for branded terms.

### Cons
- Over-aggressive stemming can merge unrelated words.
- Stopword mistakes remove meaningful tokens in some contexts.
- Localization overhead grows with every new language.

### Production Apps
- Retail search normalizes size/color labels for consistent filtering.
- Legal research applies locale-aware stemming to case law.
- Support portals manage massive synonym lists for product names.

### Tiny Example
- **Input:** tokens ["Running", "Shoes", "for", "Kids"].
- **Output steps:**
	1. Lowercase all tokens.
	2. Remove stopwords like "for".
	3. Stem remaining tokens to ["run", "shoe", "kid"].
