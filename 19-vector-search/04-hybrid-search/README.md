# 04. Hybrid Search

Overview: blend vector scores with keyword scores so users get both semantic and exact matches.

### Description
- Retrieve sparse results (BM25) and dense candidates, then combine with weighted sums or reciprocal rank fusion.
- Apply filters/facets by intersecting sparse posting lists with vector hits.
- Optionally cascade: run BM25 first, then re-rank top N with vectors to save compute.

### History Snapshot
- Traditional search relied on TF-IDF alone.
- Dense retrieval improved semantic recall but missed exact names.
- Hybrid scoring emerged as the best of both worlds, now standard in production RAG/search stacks.

### Pros
- Handles misspellings and synonyms while still respecting precise filters.
- Gradual rollout: turn vector scoring on for a slice of traffic.
- Easy to explain: final score = `alpha * sparse + beta * dense`.

### Cons
- Requires tuning weights per domain.
- Doubles infrastructure: both inverted index and vector service.
- Cascade adds latency if not carefully optimized.

### Production Apps
- E-commerce search surfaces exact brand matches + similar styles.
- Customer support bots merge FAQ keyword hits with semantic context.
- Developer docs highlight exact API names while surfacing conceptual matches.

### Tiny Example
- **Input:** sparse score 1.2, dense score 0.8, weights 0.7/0.3.
- **Output steps:**
	1. Compute final score = 0.7*1.2 + 0.3*0.8 = 1.08.
	2. Sort by final score.
	3. Return docs with top blended scores.
