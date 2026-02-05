# 07. Write Patterns & Update Paths

decide how documents get into the index (batch, streaming, append-only) and what happens when an update fails so nothing corrupts the data.
It’s your traffic plan for writes.

### History Snapshot
- Nightly full reindexes used to be the norm; if one doc broke, the whole job stopped.
- Real-time apps demanded streaming upserts and append-only logs.
- Dead-letter queues (DLQs) and replay buttons appeared so bad docs could be quarantined while the rest kept flowing.

### Pros
- Matching the write path to freshness needs keeps cost in check.
- DLQs trap broken docs instead of letting them poison the index.
- Clear update diagrams prevent caches or analytics from going stale.

### Cons
- More pipelines = more ops work to monitor.
- Partial updates can miss fields if upstream forgets to send them.
- You still need slower reindex jobs for schema migrations.

### Production Apps Using Mixed Write Patterns
- Retailers combine nightly full catalog loads with live price/stock feeds.
- Fraud systems stream behavior events yet replay archives for backfills.
- SaaS vendors keep append-only audit logs and compact them into search-ready docs later.

### Tiny Example
- **Input:** batch payload `[p-1, p-2 (fails validation), p-3]` plus streaming event `p-stream-1`.
- **Output flow:**
	1. Batch pipeline ingests in chunks of two, indexes `p-1`, hits `p-2` error, diverts it to the DLQ with reason metadata, then resumes to index `p-3`.
	2. Streaming pipeline ingests `p-stream-1` instantly because it doesn’t wait for batches.
	3. Shared log prints the successful IDs, the DLQ entry (`p-2`, failure reason), and a link/runbook so an operator can replay once fixed.

## Quick Checklist
- Document when you run full reindexes vs. partial updates vs. append-only writes.
- Pick batch sizes and retry rules for ingestion jobs.
- Define dead-letter handling for documents that keep failing.
- Capture how updates flow to caches, downstream analytics, and replicas.
- Track latency from source change to searchable document.

## Mini Exercise
1. Simulate a batch pipeline and an event-driven pipeline.
2. Measure how many docs per second each path handles before throttling.
3. Note where failures should land for manual inspection.
