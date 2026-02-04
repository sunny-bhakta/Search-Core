# Normalization & Preprocessing
- Normalization is just cleaning and standardizing text before it hits the index (search engine’s lookup table—the structure that holds all normalized tokens (plus their stats) so queries can fetch matching documents without rereading every file).
- Think of it as spell-check + lowercasing + removing junk so “Search”, “search!”, and “SEARCH” all look the same.
- Preprocessing can also add extra signals like synonyms or language tags to make later ranking smarter.

## Tiny Example (Input → Output)

```
Raw text:  "Search!!!  Sêarch?  tv = television  :)  "

Pipeline steps:
1. Trim whitespace + collapse spaces → "Search!!! Sêarch? tv = television :)"
2. Lowercase + strip punctuation → "search search tv television"
3. Fold accents (ê → e) → "search search tv television"
4. Remove stopwords + map synonyms ("tv" → "television")

Final tokens: ["search", "search", "television", "television"]
```

Now the index sees one clean form of the word, boosting recall and reducing junk variants.

## Use Cases
- Get text ready before search, ML, or analytics touch it.
- Strip noise from chats, reviews, or transcripts so signals pop.
- Make messy user content (case flips, emojis, slang) look consistent.
- Expand synonyms or abbreviations for e-commerce/enterprise search.
- Clean multilingual corpora before training vectors or LLMs.

## History
- Early IR systems (1960s–1980s) used simple lowercasing + stemming (Porter stemmer)
- 1990s introduced language-specific stemmers and stopword lists for search engines
- 2010s added lemmatizers, diacritic folding, and Unicode-normalization libraries (ICU)
- 2020s incorporate ML-based spell correction and contextual synonym expansion

## Production Applications
- Lucene/Elasticsearch analyzers (lowercase, ASCIIFolding, stop, Snowball)
- Gmail/Outlook spam filters cleaning headers/body text
- Voice assistant transcripts normalized before intent detection
- E-commerce search synonyms ("tv" ↔ "television")
- Social media moderation pipelines removing noise before classification

## Pros
- Improves recall/precision by keeping equivalent tokens consistent
- Reduces index bloat from duplicate variants of the same word
- Enables business rules (brand-specific synonyms, banned terms)
- Makes downstream ML features (embeddings, classifiers) more stable

## Cons
- Aggressive normalization can destroy meaning (e.g., stemming “user” → “us” in some languages)
- Maintaining custom synonym/stopword lists requires ongoing curation
- Language-specific logic increases complexity and testing surface
- Real-time systems must balance CPU cost vs. normalization depth

## Hands-on Objectives
1. Build a normalization pipeline that lowercases, trims punctuation, folds accents, and removes configurable stopwords.
2. Compare stemming vs. lemmatization on a sample corpus; record accuracy/recall trade-offs.
3. Implement a synonym expander that maps custom dictionaries (YAML/JSON) into the pipeline and benchmarks impact on recall.
