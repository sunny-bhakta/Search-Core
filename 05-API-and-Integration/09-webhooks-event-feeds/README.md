# 09. Webhooks & Event Feeds
let search push updates (document changes, feedback) to other systems instead of making them poll.

### Description
- Provide signed HTTP callbacks or message queues firing on specific events.
- Include retry + replay controls so receivers can recover from downtime.

### History Snapshot
- Batch exports once ran nightly, so downstream apps were always stale.
- Webhooks brought near-real-time updates but required signing secrets.
- Event buses with partitions and offsets now power analytics as well as notifications.

### Pros
- Immediate syncing keeps caches and downstream systems fresh.
- Reduces load on APIs because consumers no longer poll.
- Gives customers hooks for automation (e.g., trigger ticket when relevance dips).

### Cons
- Receivers must be online or implement dead-letter queues.
- Misconfigured signatures or URLs lead to silent drops.
- Delivery guarantees (at-least-once) mean receivers must deduplicate.

### Production Apps
- CMS platforms send `document.published` webhooks to CDN purge jobs.
- Personalization teams stream `click` + `conversion` events into Kafka for training.
- Support systems fire alerts when “zero results” events exceed a threshold.

### Tiny Example
- **Input:** webhook config `url=https://example.com/hook`, secret `abc`, event `document.updated`.
- **Output steps:**
	1. When a document changes, API POSTs a JSON payload plus signature header `HMAC(body, secret)`.
	2. Receiver verifies signature, updates its cache, and returns `200`.
	3. If response is not 200, the sender retries up to 3 times with exponential backoff.
