# 08. Caching & Edge Integration

Plain-English version: store repeat answers closer to users (browser, CDN, gateway) so fewer requests hit the search cluster.

### Description
- Decide which endpoints are cacheable, how long to keep entries, and how to bust them.
- Include tenant/user context in cache keys to avoid data leaks.

### History Snapshot
- Apps once cached everything for minutes, causing stale results and angry merchants.
- Smarter strategies mix short TTLs, ETags, and background refresh.
- Edge compute now runs small personalization steps before falling back to origin.

### Pros
- Huge latency reduction for global users.
- Lowers backend QPS so clusters run cheaper.
- Shields the origin during traffic spikes.

### Cons
- Stale cache entries can hide new products or price changes.
- Complex invalidation rules are easy to misconfigure.
- Edge vendors add another billing line and require observability hooks.

### Production Apps
- Marketplaces cache autocomplete lists at the CDN with 30-second TTLs.
- News sites prewarm headlines during push alerts so CDNs serve most traffic.
- B2B portals cache tenant dashboards in Redis with per-tenant keys.

### Tiny Example
- **Input:** cache key `tenantA:search:q=laptop`, TTL 20 seconds, user repeats query at 5 seconds.
- **Output steps:**
	1. First request misses cache, hits origin, and stores response for 20 seconds.
	2. Second request within 5 seconds is served from cache in ~10 ms.
	3. When TTL expires, the next request refreshes the entry with fresh data.
