# 07. Freshness & Updates

Overview: keep vectors synchronized with document changes through incremental inserts, deletes, and rebuilds.

### Description
- Capture document changes via CDC, webhooks, or queues and regenerate embeddings on the fly.
- Support delta indexes or staging indexes so you can merge without blocking queries.
- Track version numbers per vector so stale entries can be purged quickly.

### History Snapshot
- Early deployments rebuilt the entire vector index weekly, leaving stale results.
- Near-real-time pipelines emerged with streaming embeddings and background merges.
- Modern systems pair vector stores with change logs to guarantee eventual consistency.

### Pros
- Users see newly published or edited content quickly.
- Delta rebuilds avoid full reindex downtime.
- Version tracking simplifies audits.

### Cons
- Streaming updates consume GPU/CPU continuously.
- Deletes require tombstones or reference counting to avoid ghost hits.
- Background merges must be throttled to prevent latency spikes.

### Production Apps
- News search regenerates embeddings whenever journalists update headlines.
- SaaS knowledge bases re-embed documents nightly plus streaming hotfixes.
- Ecommerce similarity search rebuilds category-specific indexes during low-traffic windows.

### Tiny Example
- **Input:** doc `FAQ-9` edited at 10:00.
- **Output steps:**
	1. Change log triggers re-embedding job.
	2. New vector upserts into delta index with version `v3`.
	3. Old vector marked deleted and cleaned during merge.
