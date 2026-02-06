# 04. Scoring Models

Overview: calculate how relevant each document is using formulas like TF-IDF and BM25, plus optional tie-breakers.

### Description
- Compute term frequency (TF) and inverse document frequency (IDF) for each term.
- Apply BM25 or other ranking functions that handle document length and saturation.
- Layer tie-breakers such as recency or authority when scores are close.

### History Snapshot
- Vector space models with TF-IDF dominated early web search.
- BM25 and probabilistic models improved scoring stability.
- Neural and hybrid scorers now sit on top of BM25 for reranking.

### Pros
- Provides consistent, explainable baseline relevance.
- Easy to tune via parameters like k1 and b.
- Works well even with limited training data.

### Cons
- Ignores semantic meaning beyond bag-of-words.
- Requires index-wide statistics; expensive to recompute often.
- Tuning parameters for each corpus can be tricky.

### Production Apps
- Documentation portals rely on BM25 for fast baseline ranking.
- News search adds recency boosts to the standard BM25 score.
- Developer portals rerank BM25 hits with neural scorers for final ordering.

### Tiny Example
- **Input:** query term appears 3 times in doc; term exists in 100 out of 10,000 docs.
- **Output steps:**
	1. TF = 3, IDF ≈ log(10,000 / 100) = 2.
	2. BM25 formula combines TF, IDF, and doc length.
	3. Score ~ 6 before adding any tie-breakers.
