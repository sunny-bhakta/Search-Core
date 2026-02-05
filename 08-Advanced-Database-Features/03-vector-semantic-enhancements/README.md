# 03. Vector & Semantic Enhancements

Overview: add embeddings alongside keyword indexes so results understand meaning instead of just exact words.

### Description
- Store dense vectors for documents and queries, plus sparse scores for BM25.
- Route similar vector matches through ANN indexes and blend scores.

### History Snapshot
- Keyword-only search struggled with synonyms and intent.
- Word2Vec and sentence transformers introduced semantic scoring.
- Managed vector databases and hybrid search APIs now make deployment easier.

### Pros
- Finds relevant items even when users phrase things differently.
- Boosts long-tail recall without huge rule sets.
- Enables personalization via user embedding matching.

### Cons
- Requires model training or vendor dependency.
- ANN indexes need tuning for recall vs. latency.
- Embedding drift demands reindexing when models update.

### Production Apps
- Retailers embed product descriptions + queries for “looks like” search.
- Support centers surface similar solved tickets using vector similarity.
- Media apps recommend videos using joint text + image embeddings.

### Tiny Example
- **Input:** query vector `[0.1, 0.8, 0.2]`.
- **Output steps:**
	1. ANN search finds nearest neighbors with cosine similarity.
	2. Combine vector score with BM25 text score.
	3. Return ranked list with both scores attached for debugging.
