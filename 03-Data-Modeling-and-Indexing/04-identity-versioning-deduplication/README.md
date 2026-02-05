# 04. Identity, Versioning & Deduplication

pick a predictable ID, track which update is newest, and block duplicate documents before they clutter the index.

### History Snapshot
- Early systems reused DB auto-increment IDs, so regions overwrote each other.
- Streaming feeds delivered events out of order, so engineers started comparing `version` or `updated_at`.
- Dedupe logic moved from scripts to built-in hash/signature checks inside ingest jobs.

### Pros
- Consistent IDs make joins, analytics, and API lookups easy.
- Version checks stop stale updates from clobbering fresh data.
- Dedupe keeps the index smaller and avoids ranking copy-paste spam.

### Cons
- All services must agree on the ID plan.
- Clock drift or missing versions can block real updates.
- Overzealous dedupe may hide valid near-duplicates like localized copies.

### Production Apps Using These Patterns
- News aggregators hash stories and drop duplicates to keep feeds clean.
- Marketplaces stick to deterministic product IDs plus version counters from the catalog system.
- Social apps store version numbers so device edits don’t stomp each other.

### Tiny Example
- **Input events:**
	- `Product v1`: `{ id: 'p-1', version: 1, title: 'Red Jacket' }`
	- Later, stale update: `{ id: 'p-1', version: 0, title: 'Red Jacket ' }`
	- New document with same title: `{ id: 'p-2', version: 1, title: 'red jacket' }`
- **Output decisions:**
	- Accept the first doc, reject the stale one because `version 0 < 1`.
	- Lowercase + trim the titles, hash them, and spot that `p-2` matches `p-1`, so drop it.

## Quick Checklist
- Pick an ID format and collision policy (overwrite, reject, merge).
- Store `version`, `updated_at`, or sequence numbers to spot stale payloads.
- Normalize fields (trim, lowercase, strip markup) before dedupe checks.
- Flag near-duplicates using hashes, shingles, or signature functions.

## Mini Exercise
1. Generate ULIDs for a sample payload and simulate an update arriving late.
2. Compare `version` numbers to decide whether to apply the update.
3. Hash the document body and detect if two entries are effectively the same.
