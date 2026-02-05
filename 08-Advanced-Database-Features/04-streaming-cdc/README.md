# 04. Streaming & Change Data Capture

Overview: stream row changes into search so indexes stay fresh without full rebuilds.

### Description
- Tap database logs (CDC) to capture inserts, updates, deletes.
- Replay events into search queues with ordering guarantees.

### History Snapshot
- Nightly batch reindexes left data stale for hours.
- Tools like Debezium and Dynamo Streams delivered near-real-time feeds.
- Branchable pipelines now let teams test schema changes safely.

### Pros
- Keeps search results in sync within seconds.
- Reduces expensive full reindex jobs.
- Enables rewind/replay for debugging.

### Cons
- Requires careful handling of schema evolution.
- Back-pressure can build if consumers lag.
- Duplicate or out-of-order events need dedupe logic.

### Production Apps
- E-commerce sites stream price changes straight to search.
- Banking apps feed transaction CDC into fraud filters plus search.
- Analytics tools branch CDC streams to experiment with new analyzers.

### Tiny Example
- **Input:** CDC event `{ op: 'update', sku: 'SKU123', price: 19.99 }`.
- **Output steps:**
	1. Event lands in Kafka topic.
	2. Indexer updates document `SKU123` with new price.
	3. Success metric logs lag time so ops can watch freshness.
