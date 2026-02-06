# 03. Index Structures

Overview: store vectors in approximate-nearest-neighbor (ANN) structures that balance recall, latency, and cost.

### Description
- Compare algorithms: HNSW graph indexes, IVF inverted lists, PQ product quantization, ScaNN hybrids.
- Tune hyperparameters such as `ef_construction`, `M`, `nprobe`, or list counts to match dataset size.
- Plan for rebuilds when embedding models change, since vectors must be regenerated.

### History Snapshot
- Brute-force cosine search worked only for tiny datasets.
- Facebook’s Faiss popularized GPU-accelerated ANN, while HNSW won recall benchmarks.
- Managed services (Pinecone, Milvus, Weaviate) now expose ANN primitives with autoscaling.

### Pros
- Query large corpora (millions of vectors) within milliseconds.
- Flexible trade-offs: more recall with higher ef, lower latency with tighter bounds.
- Compression (PQ, OPQ) reduces memory footprint.

### Cons
- Complex tuning; wrong settings hurt quality.
- Rebuilds are heavy during model upgrades.
- Some algorithms demand lots of RAM or GPU memory.

### Production Apps
- Retail similarity search runs on HNSW for fast outfit recommendations.
- Security log search uses IVF-PQ to store billions of vectors economically.
- Video platforms index frame embeddings with ScaNN for near-duplicate detection.

### Tiny Example
- **Input:** 1M vectors.
- **Output steps:**
	1. Build HNSW with `M=32`, `ef_construction=200`.
	2. Store index on SSD-backed instance.
	3. Query with `ef=64` to balance recall vs latency.
