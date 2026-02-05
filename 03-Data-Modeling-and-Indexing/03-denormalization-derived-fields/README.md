# 03. Denormalization & Derived Fields

copy lookup data and precompute handy numbers so your search query doesn’t need to call other services.

### History Snapshot
- First-gen systems pulled category names or seller ratings at query time, which blew up as data grew.
- Teams began copying that lookup info straight into each document to skip remote calls.
- Modern stacks run ETL/stream jobs that enrich docs with both reference fields and calculated scores before indexing.

### Pros
- Faster queries because all the juicy fields are already in the doc.
- Easy boosts: use `sellerRating` or `popularityScore` right away.
- Fewer runtime dependencies on slow or flaky databases.

### Cons
- Documents get larger, so storage and bandwidth go up.
- If the enrichment job pauses, copied data can become stale.
- Someone has to own each derived field so it gets rebuilt after schema tweaks.

### Production Apps Using Denormalization
- Marketplaces stash seller name, rating, and badges in every product doc.
- Streaming apps precompute “trending score” or “skip rate” per track/video.
- Travel sites keep both airport codes and city names on each itinerary offer.

### Tiny Example
- **Input:**
	- Base product doc: `{ id: 'p-100', categoryId: 'cat-01', sellerId: 'seller-9', price: 25, salesLast7Days: 42 }`
	- Lookup tables: `categories[cat-01] = "Outdoor Gear"`, `sellers[seller-9] = { rating: 4.8, tier: 'gold' }`
- **Output:**
	- Enriched doc: `{ ..., categoryName: "Outdoor Gear", sellerRating: 4.8, sellerTier: 'gold', popularityScore: 42 / 25 = 1.68 }`
	- Queries can now filter on `categoryName`, boost on `sellerRating`, or sort by `popularityScore` without any joins.

## Quick Checklist
- Identify reference data that would otherwise require joins (category names, seller rating).
- Copy those values into the document at index time.
- Define jobs that calculate derived metrics (popularity, stock windows, geo buckets).
- Track the source and version of every derived field so you can rebuild confidently.

## Mini Exercise
1. Pick one lookup (like category name) and stuff it into the document payload.
2. Write a short script that adds a derived score (e.g., `priceScore = 1 / price`).
3. Record the transformation steps so future engineers can reproduce them.
