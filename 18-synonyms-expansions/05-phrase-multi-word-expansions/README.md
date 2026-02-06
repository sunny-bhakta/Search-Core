# 05. Phrase & Multi-Word Expansions

Overview: handle multi-word phrases so variations like "nyc" ↔ "new york city" match smoothly.

### Description
- Define ordered and unordered phrase pairs.
- Use token graphs or shingles to preserve word order and scoring.
- Write tests to ensure phrase expansions do not break analyzers.

### History Snapshot
- Simple synonym filters struggled with spaces and punctuation.
- Token graph analyzers in Lucene/Elasticsearch introduced phrase-aware expansions.
- Modern systems test multi-word rules automatically before rollout.

### Pros
- Captures common abbreviations and nicknames.
- Improves recall for complex search terms like product model numbers.
- Works well with autocomplete when precomputed.

### Cons
- Misconfigured graphs can inflate token counts.
- Harder to debug because expansions span multiple tokens.
- Requires analyzer expertise to implement safely.

### Production Apps
- Travel sites map "nyc" ↔ "new york city" and "lax" ↔ "los angeles".
- Media apps expand "got" ↔ "game of thrones".
- Retailers map "bogo" ↔ "buy one get one".

### Tiny Example
- **Input:** query "nyc hotels".
- **Output steps:**
	1. Expand to ["nyc", "new york city"].
	2. Run search for both phrases.
	3. Merge results and boost the exact match phrase.
