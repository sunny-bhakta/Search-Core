# 02. Structured Logging

 log every request as tidy JSON so you can search, filter, and replay issues quickly.

### Description
- Include request IDs, tenant IDs, and key query parameters.
- Keep field names consistent so log pipelines stay simple.

### History Snapshot
- Plain text logs were hard to parse and lost context.
- JSON loggers plus centralized storage made searching easy.
- Modern teams add sampling + retention rules to control costs.

### Pros
- Faster debugging because you can filter by user, shard, or feature.
- Feeds security and compliance audits.
- Makes incident timelines precise.

### Cons
- More data volume means higher storage bills.
- Forgetting to redact secrets can leak PII.
- Schema drift breaks dashboards until updated.

### Production Apps
- Search APIs log `{ requestId, tenantId, latency_ms }` for every call.
- Support teams query logs to replay a user’s last search.
- Compliance teams export JSON logs into SIEM tools daily.

### Tiny Example
- **Input:** user reports “search is blank at 3:04 PM.”
- **Output steps:**
	1. Filter logs by `userId` and timestamp.
	2. See entries with `error_code=timeout` and `shard=products-3`.
	3. Restart shard `products-3`, confirm new logs show `status=ok`.
