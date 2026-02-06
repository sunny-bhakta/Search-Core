# 10. Tooling & Ecosystem

Overview: pick the right libraries or managed services, provide migration scripts, and document fallbacks when vector infra hiccups.

### Description
- Evaluate open-source (Faiss, Annoy, Milvus, Vespa) vs hosted (Pinecone, Weaviate, Azure AI Search) for cost, ops, and features.
- Build tooling to sync indexes between local dev, staging, and prod, including schema + metadata scripts.
- Define fallback paths (e.g., keyword-only mode) if the vector service degrades.

### History Snapshot
- Teams initially hand-rolled ANN code; maintenance was painful.
- Faiss + Annoy matured, enabling in-house stacks with shared tooling.
- Managed platforms now offer SOC2, autoscaling, and hybrid features out of the box.

### Pros
- Ecosystem tools accelerate experimentation and migrations.
- Managed services reduce ops toil for smaller teams.
- Fallbacks keep search online during outages.

### Cons
- Vendor lock-in or proprietary formats complicate migrations.
- Self-hosted clusters require upgrades, security patches, and monitoring.
- Multiple environments demand careful version control.

### Production Apps
- Startups begin on Pinecone, then migrate to self-hosted Milvus when scale grows.
- Enterprises script Faiss index exports/imports between regions.
- SaaS search exposes a switch that falls back to BM25 if vector nodes fail health checks.

### Tiny Example
- **Input:** deployment pipeline push.
- **Output steps:**
	1. Run script `export-index --env=staging`.
	2. Apply migration to prod cluster.
	3. If health check fails, flip feature flag to keyword-only until resolved.
