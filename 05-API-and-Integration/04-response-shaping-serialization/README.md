# 04. Response Shaping & Serialization

Send back only the fields clients need, wrapped in a tidy envelope, and keep payloads small.

### Description
- Standardize on `{ data, meta, errors }` so frontends know where to look.
- Support field masks or projections to avoid overfetching and reduce mobile bandwidth.

### History Snapshot
- Early APIs dumped entire documents, causing 2 MB payloads for tiny screens.
- Teams adopted envelopes, compression, and streaming chunks for large aggregations.
- Now, response adapters live in shared libraries so every endpoint looks the same.

### Pros
- Faster page loads and cheaper egress bills.
- Easier to add metadata like trace IDs or pagination cursors.
- Clients can render partial data (first chunk) while the rest streams.

### Cons
- More logic is needed to trim fields and redact sensitive data.
- Streaming adds complexity to SDKs that expect a single blob.
- Different clients may disagree on what the “right” shape is.

### Production Apps
- Marketplaces return `{ data: [...], meta: { total, page } }` in every search list.
- Analytics tools stream chart points as NDJSON to keep dashboards responsive.
- News apps send lighter “card” objects to mobile, heavier payloads to desktop.

### Tiny Example
- **Input:** client asks for `fields=[title, price]` and `page=2`.
- **Output steps:**
	1. Fetch full document but project only title + price.
	2. Wrap in `{ data: projectedDocs, meta: { page: 2, nextPage: 3 } }` plus `traceId`.
	3. Compress JSON to keep payload under 50 KB and log the content-length for later tuning.
