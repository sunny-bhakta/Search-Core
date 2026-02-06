# 08. Pagination & Deep Paging

Overview: deliver multiple pages of results without overloading the cluster or slowing users down.

### Description
- Choose the right pattern: simple from/size, search_after for deep paging, or scroll APIs for exports.
- Implement UI patterns like infinite scroll or “load more” with caching of prior pages.
- Set guardrails to block extremely deep requests unless justified.

### History Snapshot
- Early search used `from + size` only, which forced engines to skip large offsets.
- Search_after and cursor-based APIs reduced expensive deep skips.
- Today, hybrid approaches combine caching plus streaming for analytics exports.

### Pros
- Protects infrastructure while still supporting legitimate deep dives.
- Improves UX with smooth loading experiences.
- Enables exports or aggregations without timeouts.

### Cons
- Cursor logic is harder to implement and test.
- Infinite scroll can hurt accessibility and sharable URLs.
- Need to handle data mutations between page requests.

### Production Apps
- Retailers offer infinite scroll up to a limit, then a “view all” export.
- Log search tools use scroll APIs for large downloads.
- Real estate portals use search_after to let power users browse hundreds of listings.

### Tiny Example
- **Input:** user on page 3 wants page 4.
- **Output steps:**
	1. UI uses search_after token from page 3’s last item.
	2. Backend fetches next batch using that token.
	3. Results show immediately without reprocessing earlier pages.
