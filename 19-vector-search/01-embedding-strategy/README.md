# 01. Embedding Strategy

Overview: choose the right embedding model, dimension, and coverage so semantic search understands your content.

### Description
- Select a base model (hosted API, open-source, or custom) and document its training data.
- Decide whether each field (title, body, metadata) gets its own embedding or shares one multi-modal vector.
- Version models and keep a changelog so you can trace ranking shifts back to model updates.

### History Snapshot
- Early semantic experiments used word2vec or GloVe averaged vectors.
- Transformer encoders like BERT raised accuracy but needed pooling tricks.
- Today, companies fine-tune domain models or adopt retrieval-specific embeddings like OpenAI text-embedding-3 or Cohere Embed v3.

### Pros
- Better intent matching for natural language queries.
- Works across languages and modalities when trained appropriately.
- Versioning allows safe rollbacks during regressions.

### Cons
- Larger vectors cost more to store and query.
- Vendor APIs can change availability or pricing.
- Requires governance to prevent training on sensitive data.

### Production Apps
- Help centers embed articles with domain-specific models for RAG workflows.
- Marketplaces embed product titles + descriptions for similar-item search.
- Media companies embed transcripts and thumbnails for cross-modal discovery.

### Tiny Example
- **Input:** sentence "Refund my order".
- **Output steps:**
	1. Send text to the embedding API.
	2. Receive a 1536-dimension vector.
	3. Store vector with `docId=FAQ-123` for later search.
