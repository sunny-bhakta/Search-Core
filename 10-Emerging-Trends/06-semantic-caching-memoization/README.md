# 06. Semantic Caching & Memoization

Overview: store recent answers plus their embedding signatures so similar questions can reuse results instantly.

### Description
- Hash each query by its vector embedding and keep the top documents + answer in a short-lived cache.
- When a new query arrives, compare embeddings; if cosine similarity is high, reuse the cached bundle.
- Record cache hits/misses to fine-tune TTL and similarity thresholds.

### History Snapshot
- Classic search caches matched literal keywords, so paraphrased questions caused duplicate work.
- Vector databases enabled approximate-nearest-neighbor lookups inside caches.
- Today, semantic caches sit in front of RAG pipelines to cut LLM spend dramatically.

### Pros
- Slashes latency because you skip retrieval + generation when a hit occurs.
- Reduces LLM token usage, saving budget.
- Provides deterministic answers for FAQs because cache entries can be audited.

### Cons
- Requires eviction logic so stale answers do not linger.
- Need guardrails to avoid leaking personalized data between users.
- Cache warm-up can be cold at product launches or breaking news.

### Production Apps
- Customer support bots reuse troubleshooting answers for similar phrased questions.
- Travel agencies cache visa requirement explanations that thousands of users ask daily.
- Internal IT portals reuse approval policy summaries for repeated audit checks.

### Tiny Example
- **Input:** query vector for "reset laptop password".
- **Output steps:**
	1. Compute cosine similarity against cache keys.
	2. If similarity ≥ 0.9, return cached answer + docs.
	3. Log a semantic cache hit and skip running the LLM.
