# 05. Approximation Quality

Overview: measure how well your ANN setup matches brute-force results and expose knobs for consumers to trade precision vs latency.

### Description
- Compare recall@k from ANN queries against exact cosine search on a sampled set.
- Track quality over time as data evolves; watch for drift when adding new document types.
- Offer API parameters (`quality=high/low`) that adjust ef/nprobe or candidate counts.

### History Snapshot
- ANN adoption initially lacked clear metrics, leading to guesswork.
- Benchmarks like ANN-Benchmarks standardized recall comparisons.
- Production teams now bake recall dashboards and canaries into releases.

### Pros
- Confidence that speedups are not hurting relevance.
- Ability to offer user-configurable quality tiers.
- Early warning when indexes need rebuilds.

### Cons
- Running brute-force baselines can be costly.
- Recall depends on ground-truth labels, which may be scarce.
- Many knobs confuse API consumers without guidance.

### Production Apps
- Search APIs expose `precision=best_effort` vs `precision=high` flags.
- Streaming services monitor recall before/after quantization tweaks.
- Fraud detection uses canary datasets to ensure similar-case retrieval stays ≥95% recall.

### Tiny Example
- **Input:** 100 sampled queries.
- **Output steps:**
	1. Run brute-force search to get true top 10.
	2. Run ANN with `ef=32` and compute recall@10.
	3. If recall < 0.95, increase `ef` or rebuild index.
