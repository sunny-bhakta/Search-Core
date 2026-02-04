# Vector Search

Building blocks for semantic retrieval using dense representations.

## 1. Embedding Strategy
- Pick base models (OpenAI, Cohere, in-house) and dimensionality.
- Define per-field or multi-modal embedding needs.
- Version models and document training data lineage.

## 2. Data Preparation & Chunking
- Decide chunk sizes (sentences, paragraphs) and overlap strategies.
- Normalize text (lowercase, punctuation) consistently before embedding.
- Store metadata (document id, section, tags) alongside vectors.

## 3. Index Structures
- Evaluate ANN algorithms (HNSW, IVF, PQ, ScaNN) for recall vs. latency.
- Tune hyperparameters (ef_construction, nprobe, list count) based on datasets.
- Plan for reindexing overhead when models change.

## 4. Hybrid Search
- Combine sparse (BM25) and dense scores via weighted sum, reciprocal rank fusion, or cascade.
- Support filters/facets by intersecting sparse posting lists with vector candidates.
- Experiment with learned fusion models for tougher queries.

## 5. Approximation Quality
- Measure recall@k against brute-force baselines.
- Track drift when data or models evolve.
- Provide knobs (precision, latency) for API consumers.

## 6. Hardware & Deployment Considerations
- Decide on CPU vs. GPU serving, batching, and quantization.
- Monitor memory footprint; consider disk-backed or streaming indexes.
- Use autoscaling aware of model load time and warmup.

## 7. Freshness & Updates
- Handle incremental inserts, deletes, and updates efficiently.
- Implement background rebuilds or delta indexes + merges.
- Keep embeddings in sync with document changes via change capture.

## 8. Safety & Filtering
- Apply content filters and ACL checks before returning results.
- Detect embedding outliers or adversarial inputs.
- Log queries/vectors responsibly to avoid privacy leaks.

## 9. Evaluation & Experimentation
- Collect semantic relevance judgments distinct from keyword tests.
- Run AB tests comparing hybrid strategies and thresholding.
- Visualize embedding spaces to debug clusters.

## 10. Tooling & Ecosystem
- Leverage libraries (Faiss, Annoy, Milvus, Pinecone, Vespa) as fits your needs.
- Provide migration scripts between local/dev/prod vector stores.
- Document fallbacks when vector services are degraded.

### Suggested Next Steps
- Embed a representative corpus and benchmark two ANN configs.
- Prototype a hybrid ranking function and log improvements/regressions.
- Draft an ops checklist covering model rollouts and index rebuilds.
