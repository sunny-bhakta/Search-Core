# 09. Evaluation & Experimentation

Overview: measure vector relevance with semantic judgments and run experiments to tune fusion thresholds or recall knobs.

### Description
- Build evaluation sets with question-answer pairs or similar-document labels distinct from keyword tests.
- Track metrics like MRR, nDCG, and hit@k for pure dense, pure sparse, and hybrid runs.
- Run online experiments (A/B or interleaving) to validate user impact before full rollout.

### History Snapshot
- Vector search initially piggybacked on keyword metrics, masking issues.
- Annotated semantic datasets and tools like BEIR enabled benchmark-driven tuning.
- Teams now maintain continuous evaluation pipelines with dashboards.

### Pros
- Quantifies improvements instead of guessing.
- Helps choose between ANN settings, fusion strategies, or model versions.
- Provides artifacts for compliance and leadership sign-off.

### Cons
- Building high-quality semantic labels is expensive.
- Online tests need enough traffic to detect small lifts.
- Multiple metrics can conflict, requiring prioritization.

### Production Apps
- RAG platforms track hit@k for grounding references.
- Retailers run interleaving tests for hybrid blending weights.
- Developer search monitors MRR for code snippet retrieval.

### Tiny Example
- **Input:** 50 labeled queries.
- **Output steps:**
	1. Run old vs new embedding model.
	2. Compute nDCG@10 for both.
	3. If new model ≥ +5% and online test passes, promote to prod.
