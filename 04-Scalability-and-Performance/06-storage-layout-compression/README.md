# 06. Storage Layout & Compression

Pick how documents sit on disk and which compression level fits so you don’t run out of space or burn too much CPU. Think of it as packing your suitcase neatly.

-### History Snapshot
- Early clusters stuck with default compression and stored every field the same way, so disks filled up fast.
- Teams started watching segment sizes and marking fields “hot” or “cold” so they could tweak doc_values and codecs.
- Now it’s common to mix codecs (e.g., LZ4 for hot data, ZSTD for cold archives) and write down the trade-offs.
	- *LZ4 = fast but modest compression; great for hot data.*
	- *ZSTD = slower but higher compression; great for cold archives.*

### Pros
- Saves storage money so you can keep data longer.
- Smaller segments make snapshots and replicas finish faster.
- Writing down the layout per field avoids accidentally enabling doc_values everywhere.

### Cons
- Heavy compression can spike CPU and slow queries.
- If you mislabel a field, you may wonder why it’s missing from searches or aggregations.
- Needs occasional audits as schemas evolve so settings stay relevant.

### Production Apps Optimizing Storage
- Observability teams keep fresh logs on SSD with LZ4 and push week-old data to ZSTD on slower disks.
- Retailers turn off doc_values on descriptive text that never gets sorted.
- *(doc_values = columnar copies of fields used for sorting and aggregations; keeping them off for display-only fields saves space.)*
- Geo apps store lat/lon as columnar fields to speed up range queries.

### Tiny Example
- **Input:** hot tier budget = 10 TB, raw index size = 14 TB, codec choice = LZ4 (1.4x reduction → divide size by 1.4) vs. ZSTD (2.2x reduction → divide size by 2.2) for cold tier.
- **Output:**
	1. Compress the last 7 days with LZ4 so it fits in ~10 TB (14 / 1.4).
	2. Move older data to a cold tier with ZSTD, shrinking it to ~6.3 TB (14 / 2.2).
	3. Document which fields have doc_values and which don’t so future audits stay easy.
