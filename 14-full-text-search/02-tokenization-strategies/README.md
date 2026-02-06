# 02. Tokenization Strategies

Overview: break text into searchable tokens using the right logic per language and use case.

### Description
- Compare whitespace, rule-based, statistical, and neural tokenizers.
- Support multilingual corpora, emojis, hashtags, and mixed scripts like English + Japanese.
- Decide when to add character n-grams for better fuzzy matching.

### History Snapshot
- Early search engines split on spaces only, failing on CJK languages.
- Lucene analyzers and ICU libraries added locale-aware tokenization.
- Modern systems adopt sentencepiece/BPE for neural and hybrid pipelines.

### Pros
- Improves recall and precision because tokens reflect real word boundaries.
- Enables better autocomplete, spellcheck, and highlighting.
- Fuzzy matching and typo tolerance become easier with n-grams.

### Cons
- Language packs increase index build time and complexity.
- Tokenization bugs ripple through the entire scoring pipeline.
- Large n-gram indexes consume more storage.

### Production Apps
- Social networks tokenize emojis and hashtags for trending search.
- Multilingual news portals choose analyzers per article language.
- Developer portals tokenize snake_case and camelCase identifiers differently.

### Tiny Example
- **Input:** text "Best-in-class café".
- **Output steps:**
	1. Lowercase and normalize accents → "best-in-class cafe".
	2. Tokenizer emits ["best", "in", "class", "cafe"].
	3. Index uses these tokens for search and highlighting.
